import React from "react";
import dot from "../assets/dot.png";
// import facebook from "../assets/facebook.png";
import { Table } from "react-bootstrap";
import "./posts.css";

const LatestPost = ({ posts }) => {
  return (
    <Table bordered hover className="posttable">
      <thead>
        <tr>
          <th>SNo</th>
          <th>Post</th>
          <th>Post Status</th>
          <th>Date</th>
          <th>Time</th>
          <th>Likes</th>
          <th>Comment</th>
          <th>Reach</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            <td className="w-100 d-flex">
              <img
                src={data.full_picture}
                alt="post"
                style={{ height: "4em" }}
                className="rounded shadow mx-1"
              />
              <p className="mx-2 para">{data.message}</p>
            </td>
            <td>posted</td>
            <td>30/10/2021</td>
            <td>12:00</td>
            <td>429</td>
            <td>555</td>
            <td>1000</td>
            <td>
              <div className="dropdown">
                <button
                  className="more_options_post"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={dot} alt="more" style={{ height: "1em" }} />
                </button>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li className="dropdown-item">View More</li>
                  <li className="dropdown-item">Edit Post</li>
                  <li className="dropdown-item">Delete Post</li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LatestPost;
