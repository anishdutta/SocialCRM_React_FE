/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import "../components/Chats/chat.css";
import Dm from "../components/Chats/Dm";
import Names from "../components/Chats/Names";
import Saved from "../components/Chats/Saved";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { access_token, uid, pageid } from "../GlobalState";
const Chat = () => {
  const { id } = useParams();

  // const [item, setItem] = useState("");
  // const [data,setData] = useState("")
  // const [posts, setPosts] = useState([]);
  const accessid = localStorage.getItem("fbaccesstoken");
  const userid = localStorage.getItem("fbuserid");
  const page_id = localStorage.getItem("fbpageid");

  // console.log(posts);
  const [mymessage, setmessage] = useState([]);
  const [sender, setsender] = useState([]);
  const [msg, setmsg] = useState("");
  // const [ismsg, setismsg] = useState([]);
  const [senderid, setsenderid] = useState("");
  const [userdp, setuserdp] = useState("");
  const [email, setemail] = useState("");
  // console.log("hey there" + id);
  //const accessid = "EAAC0xFohZChEBAMXdI29RAEJ5cHW4Bpi0qNLJo1M5rDjm84SNicojwuUivgHGl3TZBCi6HiMJ5wjc5ULdy7HP1YbvLaczm7yz1A8ZACZAaZA7RkHhFHPHgekfU3jbZCBbRqlXC6zr0H1lD3u0Wf1g3JSjhU94xwiH4ZB3GFWunbr1y5cnHLM3XHbcenr0G028oUheO4kCqZBtwZDZD";
  useEffect(() => {
    getfunc();
  }, [id]);

  function getfunc() {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${id}?fields=name,messages{message,created_time,from},participants&access_token=${accessid}`
      )
      .then((response) => {
        setmessage(response.data.messages.data.reverse());
        setsender(response.data.participants.data[0].name);
        setemail(response.data.participants.data[0].email);
        setsenderid(response.data.participants.data[0].id);
        console.log(response.data);
        // console.log("id of rec" + senderid);
      });
  }

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${senderid}?access_token=${accessid}`
      )
      .then((response) => {
        setuserdp(response.data.profile_pic);
        console.log(response.data);
      });
  }, [senderid,accessid]);

  function convertToLocalTime(serverDate) {
    var b = serverDate.split(/\D+/);
    let mystr = `${b[1]}-${b[2]}      ${b[3]}:${b[4]}`;
    return mystr;
  }

  function PostMsg() {
      console.log(senderid);
    console.log(msg)
    const body = {
      messaging_type: "RESPONSE",
      recipient: '{\n  "id": "' + senderid + '"\n}',
      message: '{\n  "text": "' + msg + '"\n}',
    };
    axios
      .post(
        `https://graph.facebook.com/v11.0/me/messages?access_token=${accessid}`,
        body
      )
      .then((response) => {
        // console.log(response.data);
        setmsg("");
        getfunc();
      });
  }
  // console.log("this  is message", mymessage);

  return (
    <main className="container-fluid px-5 h-100">
      <div className="row h-100">
        <div className="col-lg-8 bg-light shadow rounded my-2 h-100">
          <div className="row h-100">
            <div className="col-lg-4">
              <Names />
            </div>
            <div className="col-lg-8 bg-light p-0 h-100">
              <Dm
                mymessage={mymessage}
                PostMsg={PostMsg}
                convertToLocalTime={convertToLocalTime}
                email={email}
                profilepic={userdp}
                name={sender}
                page_id={page_id}
                msg={msg}
                setmsg={setmsg}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-3 mx-auto my-2">
          <Saved
            email={email}
            profilepic={userdp}
            name={sender}
            msg={msg}
            setmsg={setmsg}
          />
        </div>
      </div>
    </main>
  );
};

export default Chat;
