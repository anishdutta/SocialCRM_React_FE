import React from "react";
import send from "../assets/send.png";
import Message from "./Message";

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
                  pdata={pdata}
                  profilepic={profilepic}
                  convertToLocalTime={convertToLocalTime}
                  isPrimary={pdata.from.id === page_id ? false : true}
                />
              ))
            : "Select any conversation"}
        </div>

        <div className="d-flex flex-wrap">
          <span className="quick_reply">Lorem ipsumdd</span>
          <span className="quick_reply">Lorem im</span>
          <span className="quick_reply">Lorem</span>
        </div>
        <div className="text_input d-flex px-3">
          <input
            type="text"
            className="w-100 bg-transparent"
            placeholder="Enter Your Message"
            onSubmit={"test tmess" + console.log(msg)}
            onInput={(e) => setmsg(e.target.value)}
          />
          <button onClick={PostMsg}>
            <img src={send} alt="send" className="cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dm;
