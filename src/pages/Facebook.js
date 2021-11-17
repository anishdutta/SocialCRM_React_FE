/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import LatestPost from "../components/Posts/LatestPost";
import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/posts.css";
import LatestMessage from "../components/Posts/LatestMessage";

import axios from "axios";

import { useEffect, useState } from "react";
import FbLogin from "../components/Login/Facebook";
import { Link, useHistory } from "react-router-dom";

function Post() {
  const accessid = localStorage.getItem("fbaccesstoken");

  //   const userid = useRecoilValue(uid);
  const history = useHistory();
  const page_id = localStorage.getItem("fbpageid");
  // const page_id = useRecoilValue(pageid);
  //   const [item, setItem] = useState("");
  const [comments, setcomments] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [textInput, setTextInput] = React.useState("");

  const [isLoggedin, setisLoggedin] = useState(false);

  const [selectpostcomments, setSelectpostcomments] = useState(null);
  const [selectpostid, setSelectpostid] = useState(null);

  // console.log(posts);

  // const a = async () => {
  //   const resp = await axios.get(
  //     `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
  //   )
  //   console.log(resp);
  //   console.log("dnbsjhv")
  // };

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
      )
      .then((response) => {
        // window.location.reload();
        console.log("yahan nhi aaya");
        // setisloading(false);
        // console.log(response.data.data);
        // setPosts(response.data.data);
      })
      .catch((err) => {
        // window.location.reload();
        if (err) {
          localStorage.removeItem("fbaccesstoken");
          localStorage.removeItem("fbpageid");
          localStorage.removeItem("fbuserid");
        }
      });
  }, []);

  return !accessid ? (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <FbLogin setisLoggedin={setisLoggedin} />
    </div>
  ) : (
    <>
      {/* {updated && ( */}
      <div className=" px-5 pt-3 h-100">
        <div className="row">
          <div className="d-flex justify-content-between px-0">
            <div className="btn-group">
              <button className="btn btn-light btn-sm" type="button">
                Post Status
              </button>
              <button
                type="button"
                className="btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu">
                <option className="dropdown-item">All</option>
                <option className="dropdown-item">Filter</option>
                <option className="dropdown-item">Filter</option>
              </ul>
            </div>
            <div className="">
              <Link
                to="/newpost"
                className="text-decoration-none text-center mx-3"
              >
                <div className="btn-group">
                  <button
                    className="btn btn-warning btn-sm text-light"
                    type="button"
                  >
                    Create New Post
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <option className="dropdown-item">Upload</option>
                    <option className="dropdown-item">Upload IGTV Video</option>
                  </ul>
                </div>
              </Link>
              <button className="btn btn-light btn-sm">See All</button>
            </div>
          </div>
          <div className=" col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm post">
            <LatestPost
              setisLoggedin={setisLoggedin}
              selectedpostcomments={selectpostcomments}
              setselectedpostcomments={setSelectpostcomments}
              setselectedpostid={setSelectpostid}
              selectedpostid={selectpostid}
            />
          </div>
          <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
            <div className="col-lg-5 border bg-light my-2 rounded shadow-sm message">
              <LatestMessage />
            </div>
            <div className="col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment_box">
              <LatestComment
                comments={selectpostcomments}
                selectpostid={selectpostid}
              />
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Post;
