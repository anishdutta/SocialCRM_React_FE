import React from "react";
import  LatestPost from "../components/Posts/LatestPost";
import LatestComment from "../components/Posts/LatestComment";
import "../components/posts.css";
import LatestMessage from "../components/Posts/LatestMessage";


function Post() {
  return (
    <>
      <div className="container px-5 pt-2">
        <div className="row">
          <div className="d-flex col-lg-12 justify-content-end">
            <button className="btn btn-warning text-light">
              Create New Post
            </button>
          </div>
          <div className="d-flex col-lg-12 justify-content-between my-2">
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
                <option class="dropdown-item">
                  All
                </option>
                <option class="dropdown-item">
                  Filter
                </option>
                <option class="dropdown-item">
                  Filter
                </option>
              </div>
            </div>
            <button className="btn btn-light btn-sm">See All</button>
          </div>
          <div className="col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm post">
            <LatestPost/>
          </div>
          <div className="col-lg-5 border p-3 bg-light my-2 mr-3 rounded shadow-sm message">
            <LatestMessage />
          </div>
          <div className="col-lg-6 border p-3 bg-light my-2 mx-auto rounded shadow-sm comment">
            <LatestComment />
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
