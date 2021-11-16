import React, { useState, useEffect } from "react";
import send from "../assets/send.png";
import Message from "./Message";
// import { Modal, Button } from "react-bootstrap";
// import axios from "axios";
// import close from "../assets/close.png";

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
  // const [reply, setReply] = useState("");


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uid = localStorage.getItem("dbuseruid");
  useEffect(() => {
    setmsg(reply);
     // eslint-disable-next-line 
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
     // eslint-disable-next-line 
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

      <div className="py-3 px-2">
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
        <div className="text_input d-flex px-3">
          <input
            type="text"
            className="w-100 bg-transparent"
            placeholder="Enter Your Message"
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
          />
          <button onClick={PostMsg} className="send_button">
            <img src={send} alt="send" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dm;
