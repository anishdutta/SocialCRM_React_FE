import React from "react";
import LatestPost from "../components/Posts/LatestPost";
import LatestComment from "../components/Posts/LatestComment";
import "../components/posts.css";
import LatestMessage from "../components/Posts/LatestMessage";

import axios from "axios";
import { useRecoilValue } from "recoil";
import { access_token, pageid, uid } from "../GlobalState";
import { useEffect, useState } from "react";
// import Comments from "./comments";
// import maillogo from "./email.png";
// import richpanellogo from "./High-Res-Logo-Icon-Blue.png";
// import myposts from "./post.png";
import { Link } from "react-router-dom";

function Post() {
  const accessid = useRecoilValue(access_token);
  const userid = useRecoilValue(uid);
  const page_id = useRecoilValue(pageid);
  const [item, setItem] = useState("");
  const [posts, setPosts] = useState([]);
  console.log(posts);

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message&access_token=${accessid}`
      )
      .then((response) => {
        console.log(response.data.data);
        setPosts(response.data.data);
      });
  }, [pageid, accessid]);

  return (
    <div>
      <div className="pt-2 pb-5 px-5">
        <div className="row">
          <div className="d-flex justify-content-between px-0">
            <div class="btn-group">
              <button type="button" class="btn btn-light btn-sm">
                Post Status
              </button>
              <button
                type="button"
                class="btn btn-warning dropdown-toggle dropdown-toggle-split btn-sm"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="sr-only" />
              </button>
              <div class="dropdown-menu">
                <option class="dropdown-item">All</option>
                <option class="dropdown-item">Filter</option>
                <option class="dropdown-item">Filter</option>
              </div>
            </div>
            <button className="btn btn-light btn-sm">See All</button>
          </div>
          <div className=" col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm post">
            <LatestPost />
          </div>
<<<<<<< Updated upstream
          <div className="col-lg-12 py-0 px-0 d-flex justify-content-between">
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm message">
              <LatestMessage />
            </div>
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm comment">
              <LatestComment />
            </div>
          </div>
=======
          {/* <div className="col-lg-12 py-0 px-0 d-flex justify-content-between flex-wrap row"> */}
          <div className="col-lg-5 border p-3 bg-light mx-auto my-2 rounded shadow-sm message">
            <LatestMessage />
          </div>
          <div className="col-lg-6 border p-3 bg-light mx-auto my-2 rounded shadow-sm comment">
            <LatestComment />
          </div>
          {/* </div> */}
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default Post;
