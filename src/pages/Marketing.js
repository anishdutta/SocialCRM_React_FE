import React from "react";
// import LatestPost from "../components/Posts/LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
import "../components/marketing.css";
// import LatestMessage from "../components/Posts/LatestMessage";

function Marketing() {
  return (
    <>
      <div className="pt-2 pb-5 px-5">
        <div className="row">
          <div className="d-flex justify-content-between px-0">
            <h4>Marketing</h4>
          </div>
          <div className="col-lg-12 py-0 px-0 d-flex justify-content-between">
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm emails"></div>
            <div className="col-lg-6 border p-3 bg-light rounded shadow-sm addemail"></div>
          </div>
          <div className=" col-lg-12 border p-3 bg-light my-2 mx-auto rounded shadow-sm mailsubject"></div>
        </div>
      </div>
    </>
  );
}

export default Marketing;
