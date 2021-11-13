import React from "react";
import richpanellogo from "./High-Res-Logo-Icon-Blue.png";

const Welcome = () => {
  return (
    <div>
      <center>
        <img
          className="mylogo1"
          width="220px"
          src={richpanellogo}
          alt="Logo"
        ></img>
        <h1>Richpanel Assignment</h1>
        <hr></hr>
      </center>
    </div>
  );
};

export default Welcome;
