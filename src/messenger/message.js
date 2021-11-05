import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { access_token, uid, pageid } from "../GlobalState";

const Message = (props) => {
  const [item, setItem] = useState("");
  // const [data,setData] = useState("")
  const [posts, setPosts] = useState([]);
  const accessid = useRecoilValue(access_token);
  const userid = useRecoilValue(uid);
  const page_id = useRecoilValue(pageid);
  console.log(posts);
  const [mymessage, setmessage] = useState([]);
  const [sender, setsender] = useState([]);
  const [msg, setmsg] = useState([]);
  const [ismsg, setismsg] = useState([]);
  const [senderid, setsenderid] = useState("");
  const [userdp, setuserdp] = useState("");
  console.log("hey there" + props.data);
  //const accessid = "EAAC0xFohZChEBAMXdI29RAEJ5cHW4Bpi0qNLJo1M5rDjm84SNicojwuUivgHGl3TZBCi6HiMJ5wjc5ULdy7HP1YbvLaczm7yz1A8ZACZAaZA7RkHhFHPHgekfU3jbZCBbRqlXC6zr0H1lD3u0Wf1g3JSjhU94xwiH4ZB3GFWunbr1y5cnHLM3XHbcenr0G028oUheO4kCqZBtwZDZD";
  useEffect(() => {
    getfunc();
  }, [props.data]);

  function getfunc() {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${props.data}?fields=name,messages{message,created_time,from},participants&access_token=${accessid}`
      )
      .then((response) => {
        setmessage(response.data.messages.data.reverse());
        setsender(response.data.participants.data[0].name);
        setsenderid(response.data.participants.data[0].id);
        // console.log(response.data)
        console.log("id of rec" + senderid);
      });
  }

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/v11.0/${senderid}?access_token=${accessid}`
      )
      .then((response) => {
        setuserdp(response.data.profile_pic);
      });
  }, [senderid]);

  function converToLocalTime(serverDate) {
    var b = serverDate.split(/\D+/);
    let mystr = `${b[1]}-${b[2]}      ${b[3]}:${b[4]}`;
    return mystr;
  }

  function PostMsg() {
    //   console.log(senderid);
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
        console.log(response.data);
        setmsg("");
        getfunc();
      });
  }
  console.log("this  is message", mymessage);
  return (
    <div className="col-md-9 message">
      <div className="row">
        <div className="col-md-9 inner-msg">
          <div className="section-head">
            <h2>{sender ? sender : "Select Conversation"}</h2>
          </div>

          <div className="message-body">
            <div className="msg-lists">
              {mymessage.length
                ? mymessage.map((pdata, idx) => (
                    <div
                      className={`row msg-list  ${
                        pdata.from.id === page_id
                          ? "flex-row-reverse"
                          : "justify-content-start"
                      }`}
                      key={idx}
                    >
                      <div className="col col-md-1">
                        <div
                          className="round-img"
                          style={{ backgroundImage: `url("${userdp}")` }}
                        ></div>
                      </div>
                      {console.log("this is name" + pdata.from.name)}
                      <div className={`col col-md-3 `}>
                        <div
                          className={` message p-2 mb-1 bg-body p-2 mb-1 bg-body rounded `}
                        >
                          {pdata.message}
                        </div>

                        <div className="myTime">
                          {converToLocalTime(pdata.created_time)}
                        </div>
                      </div>
                    </div>
                  ))
                : "Select any conversation"}
            </div>

            <div className="send-msg row">
              <div className="col-md-10">
                <input
                  onSubmit={"test tmess" + console.log(msg)}
                  onInput={(e) => setmsg(e.target.value)}
                  className="form-control"
                  placeholder="Message"
                />
              </div>
              <div className="col-md-1">
                <button onClick={PostMsg} className="btn btn-success">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 profile">
          <div className="profile-card">
            <div className="profile-details d-flex justify-content-center">
              <div
                className="profile-img "
                style={{ backgroundImage: `url("${userdp}")` }}
              ></div>
            </div>
            <div className="profile-details ">
              <h2>{sender ? sender : ""}</h2>
              Offline
            </div>
            <div className="profile-details d-flex justify-content-center">
              <button className="btn btn-outline-dark btn-profile">Call</button>
              <div style={{ width: "15px" }}></div>
              <button className="btn btn-outline-dark btn-profile">
                Profile
              </button>
            </div>
          </div>
          <div className="cust-body">
            <div className="cust-details p-3 mb-5 bg-body rounded">
              <h2>Customer details</h2>
              <div className="row detail-row">
                <div className="col col-md-6">
                  <b>Email</b>
                </div>
                <div className="col col-md-6">
                  {sender ? sender : ""}@gmail.com
                </div>
              </div>
              <div className="row detail-row">
                <div className="col col-md-6">
                  <b>Name</b>
                </div>
                <div className="col col-md-6">{sender ? sender : ""}</div>
              </div>
              {/* <div className="row detail-row">
                            <div className="col col-md-6">
                                Last Name
                            </div>
                            <div className="col col-md-6">
                                dutta
                            </div>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    //         <div className="main-cointainer">
    //             <h2>Compnent2</h2>

    //               {mymessage.length ? mymessage.map((pdata,idx)=><p key={idx}>{pdata.message}</p>) : ""}
    //               {/* {console.log(mymessage[0].message)} */}
    // <p>{props.data} </p>

    //         </div>
  );
};

export default Message;
