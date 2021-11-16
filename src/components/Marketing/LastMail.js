import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";

const LastMail = () => {
  const userdbuid = localStorage.getItem("dbuseruid");

  const [emails, setEmails] = useState([]);
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getEmailList/${userdbuid}`
      )
      .then((res) => setEmails(res.data));
  }, [emails, userdbuid]);

  useEffect(() => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getUserDetails/${userdbuid}`
      )
      .then((res) => {
        // console.log(res.data[0]);
        setuser(res.data[0]);
      });
  }, [userdbuid]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [To, setTo] = useState("");
  // const [from, setFrom] = useState("");
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");

  const sendEmail = () => {
    // console.log(To, from, Subject, Message);
    axios
      .post(
        "https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/send_mail",
        { userId: userdbuid, To, from: user.orgName, Message, Subject },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        // console.log(res.data);
        alert("Email Sent");
      });
    // setFrom("");
    setMessage("");
    setSubject("");
  };

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Emails</th>
            <th>Last Mail</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="">{data.emailId}</td>
              <td>{data.lastEmail}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning text-secondary"
                  onClick={() => {
                    handleShow();
                    setTo(data.emailId);
                  }}
                >
                  Send Mail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                To
              </label>
              <input
                type="email"
                className="form-control"
                value={To}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              />
            </div> */}
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                From
              </label>
              <input
                type="Text"
                className="form-control"
                value={from}
                onChange={(e) => {
                  setFrom(e.target.value);
                }}
              />
            </div> */}
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                value={Subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                rows="3"
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            className="text-light"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="warning"
            className="text-light"
            onClick={() => {
              sendEmail();
              handleClose();
            }}
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LastMail;
