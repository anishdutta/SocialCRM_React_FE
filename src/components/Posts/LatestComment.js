/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { access_token, pageid, uid } from "../../GlobalState";

const LatestComment = (props) => {
  const comments = props.comments;
  console.log(comments);
  //  const accessid = useRecoilValue(access_token);
  const accessid = localStorage.getItem("fbaccesstoken");
  //   const userid = useRecoilValue(uid);
  //  const page_id = useRecoilValue(pageid);
  // const [comments, setcomments] = useState([]);
  const [textInput, setTextInput] = React.useState("");

  // useEffect(() => {
  //   getComments();
  // }, [selectpostid]);

  // function getComments() {
  //   axios
  //     .get(
  //       `https://graph.facebook.com/v11.0/${selectpostid}/comments?fields=message,from,comments&access_token=${accessid}`
  //     )
  //     .then((response) => {
  //       setcomments(response.data.data);
  //       // console.log("id of rec", response.data);
  //     });
  // }

  const handleChange = (event) => {
    setTextInput(event.target.value);
  };

  function postreply(item) {
    // console.log(textInput);
    const body = { message: "" + textInput + "" };
    axios
      .post(
        `https://graph.facebook.com/v11.0/${item}/comments?access_token=${accessid}`,
        body
      )
      .then((response) => {
        // console.log(response.data);
        setTextInput("");
        // getComments();
      });
  }

  return (
    <Table hover>
      <thead>
        <tr>
          <th className="">Latest Comment</th>
          {/* <th className="text-center">Comment Like</th> */}
        </tr>
      </thead>
      <tbody>
        {comments
          ? comments.map((data, idx) => (
              <tr key={idx}>
                <td className="w-50">
                  <p>{data.message}</p>
                  <span style={{ fontSize: ".85em", fontWeight: "300" }}>
                    {new Date(data.created_time).toDateString()},{" "}
                    {new Date(data.created_time).toTimeString().substr(0, 5)}
                  </span>
                </td>
                {/* <td className="w-25 text-center">455</td> */}
              </tr>
            ))
          : "Please Select a Post to see comments"}
        {/* <tr>
          <td className="w-50">
            <p>
              Comment Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sit, aliquam.
            </p>
            <span style={{ fontSize: ".85em", fontWeight: "300" }}>
              Post Name
            </span>
          </td>
          <td className="w-25 text-center">455</td>
        </tr> */}
      </tbody>
    </Table>
  );
};

export default LatestComment;
