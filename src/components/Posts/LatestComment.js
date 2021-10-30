import React from 'react'
import { Table } from "react-bootstrap";
const LatestComment = () => {
    return (
        <Table hover>
      <thead>
        <tr>
          <th className="">Latest Comment</th>
          <th className="text-center">Comment Like</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="w-50">
          <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquam.</p>
          <span style={{fontSize:".85em",fontWeight:"300"}}>Post Name</span>
          </td>
          <td className="w-25 text-center">455</td>
        </tr>
        <tr>
          <td className="w-50">
          <p>Comment Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquam.</p>
          <span style={{fontSize:".85em",fontWeight:"300"}}>Post Name</span>
          </td>
          <td className="w-25 text-center">455</td>
        </tr>
        
      </tbody>
    </Table>
    )
}

export default LatestComment
