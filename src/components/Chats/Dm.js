import React from "react";
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

  // useEffect(() => {
  //   setmsg(reply);
  // }, [reply]);

  return (
    <div className="h-100 d-flex flex-column justify-content-between">
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
      <div className="py-3 px-2 w-100" style={{overflowY:"scroll"}}>
        <div className="w-100">
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
      </div>
      <div className="text_input d-flex m-2 px-3">
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
  );
};

export default Dm;
