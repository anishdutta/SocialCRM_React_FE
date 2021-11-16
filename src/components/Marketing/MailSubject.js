import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function MailSubject() {
  const dbuseruid = localStorage.getItem("dbuseruid");
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getSendEmailList/${dbuseruid}`
      )
      .then((res) => {
        setEmails(res.data);
        // console.log(res);
      });
  }, [dbuseruid,emails]);

  // console.log(emails)

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Mail Subject</th>
          <th>Mail body</th>
          <th>Email(To)</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="">{data.subject}</td>
            <td>{data.body}</td>
            <td>{data.emailId}</td>
            <td>
              {new Date(parseInt(data.timeStamp)).toLocaleDateString()},
              {new Date(parseInt(data.timeStamp)).toLocaleTimeString()}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MailSubject;
