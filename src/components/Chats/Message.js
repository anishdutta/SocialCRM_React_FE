import React from "react";
import "./chat.css";

const Message = ({ isPrimary, pdata, profilepic, convertToLocalTime }) => {
  return (
    <>
      {isPrimary ? (
        <div className="d-flex align-items-end my-4 ">
          <div className="h-100 mx-2">
            <img
              src={profilepic}
              alt=""
              height="35px"
              className="rounded-circle"
            />
          </div>
          {convertToLocalTime(pdata.created_time)}
          <div className="specific_chat_primary p-2 w-50">{pdata.message}</div>
        </div>
      ) : (
        <div className="d-flex align-items-end my-4 justify-content-end">
          <div className="specific_chat p-2 w-50">{pdata.message}</div>
          {convertToLocalTime(pdata.created_time)}
          <div className="h-100 mx-2">
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
