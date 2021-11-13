/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { access_token, pageid, uid } from "../GlobalState";

const Comments = (props) => {
  const accessid = useRecoilValue(access_token);
  // const userid = useRecoilValue(uid);
  // const page_id = useRecoilValue(pageid);
  const [comments, setcomments] = useState([]);
  const [textInput, setTextInput] = React.useState("");

  useEffect(() => {
    getComments();
  }, [props.data]);

  function getComments() {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${props.data}/comments?fields=message,from,comments&access_token=${accessid}`
      )
      .then((response) => {
        setcomments(response.data.data);
        console.log("id of rec", response.data);
      });
  }

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  function postreply(item) {
    console.log(textInput);

    const body = { message: "" + textInput + "" };
    axios
      .post(
        `https://graph.facebook.com/v11.0/${item}/comments?access_token=${accessid}`,
        body
      )
      .then((response) => {
        console.log(response.data);
        setTextInput("");
        getComments();
      });
  }

  // function converToLocalTime(serverDate) {
  //   var b = serverDate.split(/\D+/);
  //   let mystr = `${b[1]}-${b[2]}      ${b[3]}:${b[4]}`;
  //   return mystr;
  // }

  return (
    <div className="col col-md-6 comments">
      <div className="post-head">
        <h2>Comments</h2>
      </div>
      <div className="mycomments">
        {comments.length
          ? comments.map((comment, idx) => (
              <ul key={idx}>
                <li>
                  <div className="comment">
                    <b>{comment.from.name}:</b>
                    <br />
                    {comment.message}
                  </div>
                  {comment.comments
                    ? comment.comments.data.length
                      ? comment.comments.data.map(
                          (commenters, idx) => (
                            <ul>
                              {/* <div className="reply-txt">Replies :</div> */}
                              <li>
                                <div className="replies">
                                  <b>{comment.from.name}:</b>:<br />
                                  {commenters.message}
                                </div>
                              </li>
                            </ul>
                          )
                          // <div>{commenters.message}</div>
                        )
                      : " "
                    : " "}
                </li>
                <li>
                  <div className="row reply-box">
                    <div className="col col-md-8">
                      <input
                        onChange={handleChange}
                        className="form-control form-reply col-md-10"
                        placeholder="Reply to the above comment"
                      ></input>
                    </div>
                    <div className="col col-md-4">
                      <button
                        className="btn btn-success btn-reply"
                        onClick={() => {
                          postreply(comment.id);
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))
          : props.data
          ? "No comments available"
          : "Click on the post to view comments"}
      </div>
    </div>

    // <div>

    // </div>
  );
};

export default Comments;
