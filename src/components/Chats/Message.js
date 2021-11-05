import React from "react";
import './chat.css'
const Message = ({ isPrimary }) => {
  return (
    <>
      {isPrimary ? (
        <div className="d-flex align-items-end my-4 ">
          <div className="h-100 mx-2">
            <img
              src="https://source.unsplash.com/160x160/?cartoon"
              alt=""
              height="35px"
              className="rounded-circle"
            />
          </div>
          <div className="specific_chat_primary p-2 w-50">
              chat
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-end my-4 justify-content-end">
          <div className="specific_chat p-2 w-50">
              chat
          </div>
          <div className="h-100 mx-2">
            <img
              src="https://source.unsplash.com/160x160/?cartoon"
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
