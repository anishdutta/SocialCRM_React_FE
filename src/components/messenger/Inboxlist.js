import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Message from "./message";
import "./CSS/inbox.css";
import { useRecoilValue } from "recoil";
import { Button, makeStyles } from "@material-ui/core";
import { access_token, pageid, uid } from "../GlobalState";
import maillogo from "./email.png";
import richpanellogo from "./High-Res-Logo-Icon-Blue.png";
import myposts from "./post2.png";
import posts from "./post.png";
import { Link, useHistory } from "react-router-dom";


const Inboxlist = () => {
  const [item, setItem] = useState("");
  // const [data,setData] = useState("")
  const [posts, setPosts] = useState([]);
  const accessid = useRecoilValue(access_token);
  const userid = useRecoilValue(uid);
  const page_id = useRecoilValue(pageid);
  console.log(posts);
  const history = useHistory();
  // state={item: "", data:"", acid: this.accessid};

  // const getdata=(item)=>{
  //     console.log(item);
  //     setItem(item)
  // }

  // constructor(props) {
  //     super(props)

  //     this.state = {
  //          posts : []
  //     }
  // }

  //  accessid = "EAAC0xFohZChEBAFFjNlgWHsNbdydegrq1pJv0N67GEf1e45dbWYAGTfXOAWTMaM2D3IW88tABmzEMNYamkw2ZAkcyhmvy0hx1qWBluFm8j1EGkgMS7ImdU2tzLI6oZCxVZCcxzZCZCqeuUP2HUVXPUjERSGdoK5UF5mCFWnKg9iTQUjyyYV7selQAroTUjHlcQx2v6FI2hdvctwsNE0c9H"
  console.log(accessid);
  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${page_id}/conversations?fields=name,id,senders&access_token=${accessid}`
      )
      .then((response) => {
        //   console.log(response.data.data[0].id);
        setPosts(response.data.data);
      });
  }, [userid, accessid]);

  // useEffect(()=>{
  //     history.push("/");

  // },[!userid])

  //  useStyles = makeStyles((theme) => ({
  //     root: {
  //       flexGrow: 1,
  //     },
  //     paper: {
  //       padding: theme.spacing(2),
  //       textAlign: 'center',
  //       color: theme.palette.text.secondary,
  //     },
  //   }));

  // const {posts} = this.state
  return (
    <div className="row my_mesg justify-content-md-center">
      <div className="col col-md-1 sidebar">
        <div className="icons justify-content-md-center">
          <img className="mylogo" src={richpanellogo} alt="Logo"></img>
        </div>
        <Link to="./">
          <div className="icons justify-content-md-center active">
            <img className="mylogo" src={maillogo} alt="Logo"></img>
          </div>
        </Link>

        <Link to="./users">
          <div className="icons justify-content-md-center">
            <img className="mylogo" src={myposts} alt="Logo"></img>
          </div>
        </Link>
      </div>
      {console.log(posts.length)}
      <div className="inbox col-md-2">
        <div className="section-head inbox-head">
          <h2>Conversations</h2>{" "}
        </div>

        <div className="inbox-lists">
          {posts.length ? (
            posts.map((post) => (
              <div key={post.id}>
                <div
                  className="inbox-list"
                  onClick={() => {
                    setItem(post.id);
                  }}
                >
                  <div className="time ">10:00</div>
                  <div className="row list-detail">
                    <div className="col col-md-1 check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                    <div className="col col-md-11">
                      <span className="list-name bold">
                        {post.senders.data[0].name}
                      </span>
                      <br />
                      <span className="list-msg ">Facebook DM</span>
                      <br />
                    </div>
                  </div>
                  <div className="list-msg-detail">
                    <span className="list-msg-head bold">Awesome product</span>
                    <br />
                    <span className="list-cont">
                      This is test message hey !!
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : userid ? (
            <div> {console.log(userid)}No messages found</div>
          ) : (
            <div>Please Login to view messages</div>
          )}
        </div>
      </div>
      <Message data={item} />
    </div>
  );
};

export default Inboxlist;
