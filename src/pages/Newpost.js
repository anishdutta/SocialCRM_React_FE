import React from "react";
import "../components/newposts.css";
import DragAndDrop from '../components/DragAndDrop'

function NewPost() {
  return (
    <div>
      <div className="container py-5">
        <h5 className="mb-5">Create New Post</h5>
        <div className="row">
          <div className="col-lg-6 px-3">
            <div className="mb-3">
              <textarea
                className="form-control text-dark"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Write your caption..."
              ></textarea>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your location"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-warning w-100 text-light">Publish Now</button>
            </div>
          </div>
          <div className="col-lg-6 border border-secondary">
            <div className="row pt-3 p-2">
              <div className="col-lg-4" style={{height:"180px",width:"180px"}}>
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
              </div>
              <DragAndDrop />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
