import React from "react";
import "../components/Chats/chat.css";
import Dm from "../components/Chats/Dm";
import Names from "../components/Chats/Names";
import Saved from "../components/Chats/Saved";

const Chat = () => {

  return (
    <main className="container-fluid px-5">
      <div className="row h-100">
        <div className="col-lg-8 bg-light shadow rounded my-2">
          <div className="row">
            <div className="col-lg-4">
              <Names />
            </div>
            <div className="col-lg-8 bg-light p-0">
              <Dm />
            </div>
          </div>
        </div>
        <div className="col-lg-3 mx-auto my-2 ">
          <Saved />
        </div>
      </div>
    </main>
  );
};

export default Chat;
