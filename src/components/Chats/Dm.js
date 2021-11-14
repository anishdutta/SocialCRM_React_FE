import React, { useState, useEffect } from "react";
import send from "../assets/send.png";
import Message from "./Message";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import close from "../assets/close.png";

const Dm = ({
  name,
  email,
  profilepic,
  mymessage,
  convertToLocalTime,
  PostMsg,
  page_id,
  setmsg,
  msg,
}) => {
  const [show, setShow] = useState(false);
  const [quickReply, setQuickReply] = useState([]);
  const [reply, setReply] = useState("");
  const [newReply, setNewReply] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uid = localStorage.getItem("dbuseruid");
  useEffect(() => {
    setmsg(reply);
  }, [reply]);
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
    <div className="">
      <div className="border-bottom w-100 d-flex p-2">
        <div className="">
          <img
            src={profilepic}
            alt=""
            height="60px"
            className="rounded-circle"
          />
        </div>
        <div className="mx-3 d-flex flex-column justify-content-center">
          <p className="m-0">{name}</p>
          <p className="m-0 text-secondary">{email}</p>
        </div>
      </div>
      {/* chatbox */}
      <div className="py-3 px-2">
        {/* chatting */}
        <div className="">
          {mymessage.length
            ? mymessage.map((pdata, idx) => (
                <Message
                  key={idx}
                  pdata={pdata}
                  profilepic={profilepic}
                  convertToLocalTime={convertToLocalTime}
                  isPrimary={pdata.from.id === page_id ? false : true}
                />
              ))
            : "Select any conversation"}
        </div>

        <div className="d-flex flex-wrap align-items-center justify-content-end">
          <span className="quick_reply">Lorem ipsumdd</span>
          <span className="quick_reply">Lorem im</span>
          <span className="quick_reply">Lorem</span>
          <button
            className="btn btn-sm btn-warning rounded-pill text-light mx-3"
            onClick={() => {
              handleShow();
              // setTo(data.emailId);
            }}
          >
            Quick Reply
          </button>
        </div>
        <div className="text_input d-flex px-3">
          <input
            type="text"
            className="w-100 bg-transparent"
            placeholder="Enter Your Message"
            // onSubmit={"test tmess" + console.log(msg)}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <button onClick={PostMsg} className="send_button">
            <img src={send} alt="send" className="cursor-pointer" />
          </button>
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
                    setReply(reply.message);
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

export default Dm;
