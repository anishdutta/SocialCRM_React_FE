/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../components/newposts.css";
import DragAndDrop from "../components/DragAndDrop";
import axios from "axios";
import { useHistory } from "react-router-dom";
function NewPost() {
  const accessid = localStorage.getItem("fbaccesstoken");
  // console.log(accessid);
  const history = useHistory();
  const userid = localStorage.getItem("fbuserid");

  const page_id = localStorage.getItem("fbpageid");

  const [url, seturl] = useState("");
  const [caption, setcaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url && !caption) {
      console.log("url and !caption");
      axios
        .post(
          `https://graph.facebook.com/v11.0/${page_id}/photos?url=${url}&access_token=${accessid}`
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            history.push("/facebook");
          }
        });
    } else if (url && caption) {
      console.log("url and caption");
      axios
        .post(
          `https://graph.facebook.com/v11.0/${page_id}/photos?url=${url}&message=${caption}&access_token=${accessid}`
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            history.push("/facebook");
          }
        });
    } else if (!url && caption) {
      console.log("!url and caption");
      axios
        .post(
          `https://graph.facebook.com/v11.0/${page_id}/feed?message=${caption}&access_token=${accessid}`
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            history.push("/facebook");
          }
        });
    } else {
      alert("Please Put image and a caption");
    }
  };
  return (
    <div>
      <div className="container py-5">
        <h5 className="mb-5">Create New Post</h5>
        <div className="row">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="col-lg-6 px-3">
              <div className="mb-3">
                <textarea
                  className="form-control text-dark"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Write your caption..."
                  onChange={(e) => {
                    setcaption(e.target.value);
                  }}
                ></textarea>
              </div>
              {/* <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
              />
            </div> */}
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn btn-warning w-100 text-light"
                >
                  Publish Now
                </button>
              </div>
            </div>
          </form>

          <div className="col-lg-6 border border-secondary">
            <div className="row pt-3 p-2">
              {/* <div className="col-lg-4" style={{height:"180px",width:"180px"}}>
                <img src="https://source.unsplash.com/160x160/?socialmedia" alt="media" className="rounded" />
              </div>
              <div className="col-lg-4"  style={{height:"180px",width:"180px"}}>
                <img src="https://source.unsplash.com/160x160/?socialmedia" alt="media" className="rounded"/>
              </div>
              <div className="col-lg-4"  style={{height:"180px",width:"180px"}}>
                <img src="https://source.unsplash.com/160x160/?socialmedia" alt="media" className="rounded"/>
              </div>
              <div className="col-lg-4"  style={{height:"180px",width:"180px"}}>
                <img src="https://source.unsplash.com/160x160/?socialmedia" alt="media" className="rounded"/>
              </div> */}
              <DragAndDrop url={url} seturl={seturl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
