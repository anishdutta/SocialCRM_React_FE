import React from "react";

const Saved = ({email,profilepic,name}) => {
  return (
    <div className="d-flex flex-column justify-content-center align-content-between h-100">
      <div className="bg-light rounded shadow my-auto p-3">
        <div className="d-flex justify-content-center">
            <img src={profilepic} alt="" height="150px" className="rounded-circle" />
        </div>
        <div className="mt-2">
            <h5 className="text-center">{name}</h5>
            <p className="text-center">{email}</p>
        </div>
      </div>
      <div className="bg-light rounded shadow my-auto p-3 saved">
        <h5 className="">Saved Messages</h5>
        <ul className="list-unstyled">
            <li className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
        </ul>
      </div>
    </div>
  );
};

export default Saved;
