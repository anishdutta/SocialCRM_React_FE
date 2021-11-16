/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import close from "../assets/close.png";

const Saved = ({ email, profilepic, name, msg, setmsg }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [quickReply, setQuickReply] = useState([]);
  // const [reply, setReply] = useState("");
  const [newReply, setNewReply] = useState("");
  console.log(msg);

  const uid = localStorage.getItem("dbuseruid");

  // useEffect(() => {
  //   setmsg(reply);
  // }, [reply]);

  const getQuickReply = () => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getCustomReply/${uid}`
      )
      .then((res) => setQuickReply(res.data));
  };
  const addQuickReply = () => {
    axios
      .post(
        "https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/createCustomReply",
        { userId: uid, message: newReply }
      )
      .then((res) => setNewReply(""));
  };
  const deleteQuickReply = (Id) => {
    console.log("uid", uid);
    console.log(Id);
    axios
      .post(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/deleteCustomReply`,
        { userId: uid, Id: Id }
      )
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    getQuickReply();
  }, [quickReply]);
  return (
    <div className="d-flex flex-column justify-content-center align-content-between h-100">
      <div className="bg-light rounded shadow my-auto p-3">
        <div className="d-flex justify-content-center">
          <img
            src={profilepic}
            alt=""
            height="150px"
            className="rounded-circle"
          />
        </div>
        <div className="mt-2">
          <h5 className="text-center">{name}</h5>
          <p className="text-center">{email}</p>
        </div>
      </div>
      <div className="bg-light rounded shadow my-auto p-3 saved">
        <div className="d-flex justify-content-center">
          <h5 className="">Saved Messages</h5>{" "}
          <button
            className="btn btn-sm btn-warning rounded-pill text-light mx-3"
            onClick={() => {
              handleShow();
              // setTo(data.emailId);
            }}
          >
            Add Quick Reply
          </button>
        </div>
        <div className="quick">
          {quickReply.map((reply, i) => (
            <div className="quick_reply col-lg-10 d-flex justify-content-between">
              <span
                onClick={() => {
                  setmsg(reply.message);
                  handleClose();
                }}
                className="col-lg-10"
                // className="quick_reply"
              >
                {reply.message}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => deleteQuickReply(reply.Id)}
              >
                <img src={close} alt="delete" style={{ height: "2vh" }} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Quick Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {quickReply.map((reply, i) => (
              <div className="quick_reply col-lg-4 d-flex justify-content-between">
                <span
                  onClick={() => {
                    setmsg(reply.message);
                    handleClose();
                  }}
                  className="col-lg-10"
                  // className="quick_reply"
                >
                  {reply.message}
                </span>
                <span
                  className="cursor-pointer"
                  onClick={() => deleteQuickReply(reply.Id)}
                >
                  <img src={close} alt="delete" style={{ height: "2vh" }} />
                </span>
              </div>
            ))}
          </div>
          <div className="d-flex px-2 reply_input">
            <input
              type="text"
              className="w-100 bg-transparent border-none outline-none"
              placeholder="Custom Reply"
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
            />
            <button
              className="btn btn-sm btn-warning text-secondary rounded-pill"
              onClick={addQuickReply}
            >
              Add
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            className="text-light"
            onClick={handleClose}
          >
            Cancel
          </Button>
          {/* <Button
            variant="warning"
            className="text-light"
            onClick={() => {
              // sendEmail();
              handleClose();
            }}
          >
            Send
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Saved;
