import React from "react";
import { Table } from "react-bootstrap";

function MailSubject() {
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
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>451</td>
          <td>30/10/2021</td>
        </tr>
        {/* repeated code  */}
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>451</td>
          <td>30/10/2021</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>451</td>
          <td>30/10/2021</td>
        </tr>
        <tr>
          <td>1</td>
          <td className="">
            <p className="fs-6 mx-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              tenetur architecto aut.
            </p>
          </td>
          <td>451</td>
          <td>30/10/2021</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MailSubject;
