import React from "react";
import LatestPost from "../components/Posts/LatestPost";
import LatestComment from "../components/Posts/LatestComment";
import "../components/posts.css";
import LatestMessage from "../components/Posts/LatestMessage";

function Post() {
  return (
    <>
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
          <div className="col-lg-12 py-0 px-0 d-flex justify-content-between">
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm message">
              <LatestMessage />
            </div>
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm comment">
              <LatestComment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
