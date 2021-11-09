import React, { useState,useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const LastMail = () => {
  const [emails,setEmails] = useState([])
  useEffect(() => {
    axios.get("https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getEmailList/test").then((res) => setEmails(res.data))
  }, [emails]);

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>SNo</th>
          <th>Emails</th>
          <th>Last Mail</th>
        </tr>
      </thead>
      <tbody>
      {emails.map((data,index)=>(
        <tr key={data.emailId}>
          <td>{index+1}</td>
          <td className="">{data.emailId}</td>
          <td>{data.lastEmail}</td>
        </tr>
      ))}  
      </tbody>
    </Table>
  );
};

export default LastMail;
