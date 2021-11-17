import React from "react";
import { useState } from "react";
import axios from "axios";
import CsvDnD from "../CsvDnD";
const AddEmail = () => {
  const [email, setEmail] = useState("");
  const dbuseruid = localStorage.getItem("dbuseruid");
  const addEmail = () => {
    if (email.length) {
      axios
        .post(
          "https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/addEmailList",
          {
            userId: dbuseruid,
            emailId: email,
            schedule: "testtime",
          }
        )
        .then(alert("Email added Succesfully"));
    } else {
      alert("Please Enter Email");
    }
  };
  return (
    <div>
      <div className="mb-2">
        <label for="exampleFormControlInput1" className="form-label">
          Add Emails
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* <div className="mb-2">
      <label for="formFile" className="form-label">
        Email List
      </label>
      <input className="form-control" type="file" id="formFile" />
      </div> */}
      <CsvDnD />
      <button
        type="submit"
        className="btn btn-warning btn-sm mt-2"
        onClick={addEmail}
      >
        Submit
      </button>
    </div>
  );
};

export default AddEmail;
