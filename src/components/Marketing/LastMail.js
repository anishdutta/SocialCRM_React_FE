import React from "react";
import { Table } from "react-bootstrap";

const LastMail = () => {
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
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              test@sociophin.com
            </p>
          </td>
          <td>30/10/2021</td>
        </tr>
        {/* repeated code  */}
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              test@sociophin.com
            </p>
          </td>
          <td>30/10/2021</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              test@sociophin.com
            </p>
          </td>
          <td>30/10/2021</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              test@sociophin.com
            </p>
          </td>
          <td>30/10/2021</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              test@sociophin.com
            </p>
          </td>
          <td>30/10/2021</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default LastMail;
