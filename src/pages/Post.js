import React from "react";
import LatestPost from "../components/Posts/LatestPost";
import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/posts.css";
import LatestMessage from "../components/Posts/LatestMessage";

// import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { access_token, pageid, uid } from "../GlobalState";
// import { useEffect, useState } from "react";
// import Comments from "./comments";
// import maillogo from "./email.png";
// import richpanellogo from "./High-Res-Logo-Icon-Blue.png";
// import myposts from "./post.png";
import { Link } from "react-router-dom";

function Post() {
  // const accessid = useRecoilValue(access_token);
  // const userid = useRecoilValue(uid);
  // const page_id = useRecoilValue(pageid);
  // const [item, setItem] = useState("");
  // const [posts, setPosts] = useState([]);
  // console.log(posts);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message&access_token=${accessid}`
  //     )
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setPosts(response.data.data);
  //     });
  // }, [pageid, accessid]);

  return (
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
            <button className="btn btn-light btn-sm">See All</button>
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
                      <option className="dropdown-item">
                        Upload IGTV Video
                      </option>
                    </ul>
                  </div>
                </Link>
          </div>
          <div className=" col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm post">
            <LatestPost />
          </div>
          <div className="col-lg-12  container-fluid d-flex flex-wrap justify-content-between align-items-center p-0">
          <div className="col-lg-5 border bg-light my-2 rounded shadow-sm message">
            <LatestMessage />
          </div>
          <div className="col-lg-6 border p-3 bg-light  my-2 rounded shadow-sm comment">
            <LatestComment />
          </div>
        </div>
        </div>
      </div>
  );
}

export default Post;
