import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";

const Names = () => {
  return (
    <div>
      <p className="pt-3 fw-bold">Recipents Names</p>
      <div className="d-flex flex-column">
        <Link to="/chat" className="chat">
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex my-2">
              <img
                src="https://source.unsplash.com/160x160/?cartoon"
                alt="pic"
                style={{ height: "3em" }}
                className="rounded-circle"
              />
              <div className="mx-2 pt-1">
                <h3 className="text-black sender_name">John Doe</h3>
                <h4 className="text-secondary latest_msg">
                  Hi i am developer
                </h4>
              </div>
            </div>
            <div
              className="bg-warning rounded-circle d-flex justify-content-center"
              style={{ width: "1.5em", height: "1.5em" }}
            >
              <span className="text-white fs-6">4</span>
            </div>
          </div>
        </Link>
        {/* repeated code */}
        <Link to="/chat" className="chat">
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex my-2">
              <img
                src="https://source.unsplash.com/160x160/?cartoon"
                alt="pic"
                style={{ height: "3em" }}
                className="rounded-circle"
              />
              <div className="mx-2 pt-1">
                <h3 className="text-black sender_name">John Doe</h3>
                <h4 className="text-secondary latest_msg">
                  Hi i am developer
                </h4>
              </div>
            </div>
            <div
              className="bg-warning rounded-circle d-flex justify-content-center"
              style={{ width: "1.5em", height: "1.5em" }}
            >
              <span className="text-white fs-6">4</span>
            </div>
          </div>
        </Link>
        <Link to="/chat" className="chat">
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex my-2">
              <img
                src={linkedin}
                alt="pic"
                style={{ height: "3em" }}
                className="rounded-circle"
              />
              <div className="mx-2 pt-1">
                <h3 className="text-black sender_name">Sender's Name</h3>
                <h4 className="text-secondary latest_msg">
                  Latest Message asjdkjj
                </h4>
              </div>
            </div>
            <div
              className="bg-warning rounded-circle d-flex justify-content-center"
              style={{ width: "1.5em", height: "1.5em" }}
            >
              <span className="text-white fs-6">4</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Names;
