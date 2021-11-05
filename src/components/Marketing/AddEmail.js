import React from "react";

const AddEmail = () => {
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
        />
      </div>
      <div className="mb-2">
        <label for="formFile" className="form-label">
          Email List
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <button type="submit" className="btn btn-warning btn-sm">Submit</button>
    </div>
  );
};

export default AddEmail;
