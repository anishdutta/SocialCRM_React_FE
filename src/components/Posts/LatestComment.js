/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { access_token, pageid, uid } from "../../GlobalState";

// const LatestComment = (props) => {
//   // const comments = props.comments;
//   // console.log(comments);
//   //  const accessid = useRecoilValue(access_token);
//   const accessid = localStorage.getItem("fbaccesstoken");
//   //   const userid = useRecoilValue(uid);
//   //  const page_id = useRecoilValue(pageid);
//   const selectpostid = props.selectpostid
//   const [comments, setcomments] = useState([]);
//   const [textInput, setTextInput] = React.useState("");

//   useEffect(() => {
//     getComments();
//   }, [selectpostid]);

//   function getComments() {
//     axios
//       .get(
//         `https://graph.facebook.com/v11.0/${selectpostid}/comments?fields=message,from,comments&access_token=${accessid}`
//       )
//       .then((response) => {
//         setcomments(response.data.data);
//         console.log("id of rec", response.data);
//       });
//   }

//   const handleChange = (event) => {
//     setTextInput(event.target.value);
//   };

//   function postreply(item) {
//     // console.log(textInput);
//     const body = { message: "" + textInput + "" };
//     axios
//       .post(
//         `https://graph.facebook.com/v11.0/${item}/comments?access_token=${accessid}`,
//         body
//       )
//       .then((response) => {
//         // console.log(response.data);
//         setTextInput("");
//         // getComments();
//       });
//   }

//   return (
//     <Table hover>
//       <thead>
//         <tr>
//           <th className="">Post Comments</th>
//           {/* <th className="text-center">Comment Like</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {comments
//           ? comments.map((data, idx) => (
//               <tr key={idx}>
//                 <td className="w-50">
//                   <p>{data.message}</p>
//                   <span style={{ fontSize: ".85em", fontWeight: "300" }}>
//                     {new Date(data.created_time).toDateString()},{" "}
//                     {new Date(data.created_time).toTimeString().substr(0, 5)}
//                   </span>
//                 </td>
//                 {/* <td className="w-25 text-center">455</td> */}
//               </tr>
//             ))
//           : "Please Select a Post to see comments"}
//         {/* <tr>
//           <td className="w-50">
//             <p>
//               Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Sit, aliquam.
//             </p>
//             <span style={{ fontSize: ".85em", fontWeight: "300" }}>
//               Post Name
//             </span>
//           </td>
//           <td className="w-25 text-center">455</td>
//         </tr> */}
//       </tbody>
//     </Table>
//   );
// };

// export default LatestComment;
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { access_token, pageid, uid } from "../GlobalState";

const Comments = (props) => {
  // const accessid = useRecoilValue(access_token);
  // const userid = useRecoilValue(uid);
  // const page_id = useRecoilValue(pageid);
  const [comments, setcomments] = useState([]);
  const [textInput, setTextInput] = React.useState("");
  const accessid = localStorage.getItem("fbaccesstoken");
  // const selectpostid = props.selectpostid;

  useEffect(() => {
    getComments();
  }, [props.selectpostid]);

  function getComments() {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${props.selectpostid}/comments?fields=message,from,comments&access_token=${accessid}`
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

  function converToLocalTime(serverDate) {
    var b = serverDate.split(/\D+/);
    let mystr = `${b[1]}-${b[2]}      ${b[3]}:${b[4]}`;
    return mystr;
  }

  return (
    <div className="comments">
      <div className="post-head">
        <h5>Comments</h5>
      </div>
      <div className="">
        {comments.length
          ? comments.map((comment, idx) => (
            <ul key={idx} className="list-unstyled">
                <li>
                  <div className="comment">
                    <b>{comment.from && comment.from.name}:</b>
                    <br />
                    {comment.message}
                  </div>
                  {comment.comments
                    ? comment.comments.data.length
                      ? comment.comments.data.map(
                          (commenters, idx) => (
                          <ul className="list-unstyled">
                              {/* <div className="reply-txt">Replies :</div> */}
                              <li>
                                <div className="replies">
                                  <b>{comment.from && comment.from.name}:</b>:
                                  <br />
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
                          console.log(comment.id);
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
