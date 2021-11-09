import React, { useState,useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

function MailSubject() {

  const [emails,setEmails] = useState([])
  useEffect(() => {
    axios.get("https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getSendEmailList/test").then((res) => setEmails(res.data))
  }, []);

  console.log(emails)

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Mail Subject</th>
          <th>No .of Recipent</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {emails.map((data,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td className="">
           {data.subject}
          </td>
          <td>451</td>
          <td>30/10/2021</td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}

export default MailSubject;
