/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
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
  selectedpostid,
  setselectedpostid,
}) => {
  const [posts, setPosts] = useState([]);
  const [page_id, setpage_id] = useState("");
  const [accessid, setaccessid] = useState("");
  const [data, setData] = useState(false);
  const [other, setother] = useState([]);

  useEffect(() => {
    const page_id = localStorage.getItem("fbpageid");
    const accessid = localStorage.getItem("fbaccesstoken");
    setpage_id(page_id);
    setaccessid(accessid);
    setData(true);
  }, []);

  const likes = (id) => {
    other.filter((other) => {
      if (other.id === id) {
        console.log()
        return other.likes.data.length;
      }
    });
  };

  useEffect(() => {
    // if (data) {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/posts?fields=full_picture,message,likes,reactions,created_time,permalink_url,comments&access_token=${accessid}`
      )
      .then((response) => {
        console.log(response.data.data);
        setPosts(response.data.data);
        axios
          .get(
            `https://graph.facebook.com/v11.0/${page_id}/feed?fields=comments.limit(1).summary(true),likes.limit(1).summary(true)&access_token=${accessid}`
          )
          .then((res) => {
            setother(res.data.data);
            console.log(res);
          });
      });

    // }
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
              setselectedpostid(data.id);
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
            {console.log(likes(data.id))}
            <td>{parseInt(likes(data.id))}</td>
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
