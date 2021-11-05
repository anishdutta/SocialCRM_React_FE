import React from "react";
import send from '../assets/send.png'
import Message from "./Message";

const Dm = () => {
  return (
    <div className="">
      <div className="border-bottom w-100 d-flex p-2">
        <div className="">
          <img
            src="https://source.unsplash.com/160x160/?cartoon"
            alt=""
            height="60px"
            className="rounded-circle"
          />
        </div>
        <div className="mx-3 d-flex flex-column justify-content-center">
          <p className="m-0">John Doe</p>
          <p className="m-0 text-secondary">@johndoedklfs</p>
        </div>
      </div>
      {/* chatbox */}
      <div className="py-3 px-2">
        {/* chatting */}
        <div className="">
          <Message isPrimary={true} />
          <Message isPrimary={false} />
        </div>
        <div className="d-flex flex-wrap">
          <span className="quick_reply">Lorem ipsumdd</span>
          <span className="quick_reply">Lorem im</span>
          <span className="quick_reply">Lorem</span>
        </div>
        <div className="text_input d-flex px-3">
          <input type="text" className="w-100 bg-transparent" placeholder="Enter Your Message" />
          <img src={send} alt="send" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};


export default Dm;
