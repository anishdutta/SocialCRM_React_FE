import React from "react";
import "./chat.css";

const Message = ({ isPrimary, pdata, profilepic, convertToLocalTime }) => {
  return (
    <>
      {isPrimary ? (
        <div className="d-flex align-items-end my-4">
          <div className="mx-2 ">
            <img
              src={profilepic}
              alt=""
              height="35px"
              className="rounded-circle"
            />
          </div>
          <div className="dm d-flex flex-column">
            <div className="specific_chat_primary p-2 shadow">{pdata.message}</div>
            <span className="chat_time align-self-end mt-1">
              {convertToLocalTime(pdata.created_time)}
            </span>
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-end my-4 justify-content-end">
          <div className="dm d-flex flex-column">
            <div className="specific_chat p-2 shadow">{pdata.message}</div>
            <span className="chat_time align-self-end mt-1">
              {convertToLocalTime(pdata.created_time)}
            </span>
          </div>
          <div className="mx-2">
            <img
              src={profilepic}
              alt=""
              height="35px"
              className="rounded-circle"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
