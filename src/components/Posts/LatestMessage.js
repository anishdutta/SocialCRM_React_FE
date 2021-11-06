import React from "react";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const LatestMessage = () => {
  return (
    <div className="d-flex flex-column relative">
      <div className="sticky-top top-0 bg-light m-0 py-2">
      <h5 className="">Latest Messages</h5>

      </div>
      <Link to="/chat" className="chat">
        <div className=" d-flex align-items-center justify-content-between">
          <div className="d-flex my-2">
            <img
              src={linkedin}
              alt="pic"
              style={{ height: "4em" }}
              className="rounded-circle"
            />
            <div className="mx-3">
              <h5 className="text-black">Sender's Name</h5>
              <p className="text-secondary">Latest Message asjdkjj</p>
            </div>
          </div>
          <div
            className="bg-warning rounded-circle d-flex justify-content-center"
            style={{ width: "2em" }}
          >
            <span className="text-white fs-5">4</span>
          </div>
        </div>
      </Link>
      {/* repeated code */}
      <Link to="/chat" className="chat">
        <div className=" d-flex align-items-center justify-content-between">
          <div className="d-flex my-2">
            <img
              src={linkedin}
              alt="pic"
              style={{ height: "4em" }}
              className="rounded-circle"
            />
            <div className="mx-3">
              <h5 className="text-black">Sender's Name</h5>
              <p className="text-secondary">Latest Message asjdkjj</p>
            </div>
          </div>
          <div
            className="bg-warning rounded-circle d-flex justify-content-center"
            style={{ width: "2em" }}
          >
            <span className="text-white fs-5">4</span>
          </div>
        </div>
      </Link>
      <Link to="/chat" className="chat">
        <div className=" d-flex align-items-center justify-content-between">
          <div className="d-flex my-2">
            <img
              src={linkedin}
              alt="pic"
              style={{ height: "4em" }}
              className="rounded-circle"
            />
            <div className="mx-3">
              <h5 className="text-black">Sender's Name</h5>
              <p className="text-secondary">Latest Message asjdkjj</p>
            </div>
          </div>
          <div
            className="bg-warning rounded-circle d-flex justify-content-center"
            style={{ width: "2em" }}
          >
            <span className="text-white fs-5">4</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestMessage;
