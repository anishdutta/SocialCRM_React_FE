import React, { useEffect, useState } from "react";
import dot from "../assets/dot.png";
// import facebook from "../assets/facebook.png";
import { Table } from "react-bootstrap";
import axios from "axios";
import "./posts.css";

const LatestPost = ({
  isLoggedin,
  selectedpostcomments,
  setselectedpostcomments,
}) => {
  const [posts, setPosts] = useState([]);
  const page_id = localStorage.getItem("fbpageid");
  const accessid = localStorage.getItem("fbaccesstoken");
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
      )
      .then((response) => {
        console.log(response.data.data);
        setPosts(response.data.data);
      });
  }, [page_id, accessid]);
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
          <tr
            onClick={() => {
              data.comments && setselectedpostcomments(data.comments.data);
            }}
            key={index}
          >
            <td>{index + 1}</td>
            <td className="w-100 d-flex">
              {data.full_picture && (
                <img
                  src={data.full_picture}
                  alt="post"
                  style={{ height: "4em" }}
                  className="rounded shadow mx-1"
                />
              )}
              <p className="mx-2 para">{data.message}</p>
            </td>
            <td>posted</td>
            {data.created_time && (
              <>
                <td>{new Date(data.created_time).toDateString()}</td>
                <td>
                  {new Date(data.created_time).toTimeString().substr(0, 5)}
                </td>
              </>
            )}
            <td>429</td>
            {data.comments && <td>{data.comments.data.length}</td>}
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
                  <li className="dropdown-item">
                    <a
                      className="text-decoration-none text-secondary"
                      href={data.permalink_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Post
                    </a>
                  </li>
                  {/* <li className="dropdown-item">Edit Post</li> */}
                  {/* <li className="dropdown-item">Delete Post</li> */}
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
