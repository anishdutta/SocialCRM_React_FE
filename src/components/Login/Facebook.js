/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import FacebookLogin from "react-facebook-login";

import axios from "axios";
import { useHistory } from "react-router-dom";
// import { useCookies } from "react-cookie";

const FbLogin = ({ setisLoggedin }) => {
  // const isLoggedin = props.isLoggedin;
  const fbuserid = localStorage.getItem("fbuserid");
  const fbaccesstoken = localStorage.getItem("fbaccesstoken");
  const fbpageid = localStorage.getItem("fbpageid");

  // const setisLoggedin = props.setisLoggedin;
  // const [userData, setUserdata] = useState(null);
  // const [user_uid, setUseruid] = useRecoilState(uid);
  // const [page_id, setpageid] = useRecoilState(pageid);

  const [update, setupdate] = useState(false);

  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        `https://graph.facebook.com/${fbuserid}/accounts?fields=name,access_token&access_token=${fbaccesstoken}`
      )
      .then((response) => {
        if (Array.isArray(response.data.data) && response.data.data.length) {
          // Setuseraccesstoken(response.data.data[0].access_token);
          console.log(response);
          localStorage.setItem(
            "fbaccesstoken",
            response.data.data[0].access_token
          );
          localStorage.setItem("fbpageid", response.data.data[0].id);
        } else {
          alert("No page found linked to this account");
          window.location.reload();
        }
      });
  }, [update]);

  return (
    // !isLoggedin && (
    // appId="198755418766865"
    // {console.log(uidvalue, user_uid, user_accessToken)}
    <FacebookLogin
      appId="2959141431013010"
      autoLoad={false}
      fields="name,email,picture"
      // onClick={componentClicked}
      scope="pages_show_list,read_page_mailboxes,pages_messaging,pages_read_engagement, pages_manage_metadata,pages_manage_posts,pages_read_engagement, public_profile"
      callback={(response) => {
        console.log(response);
        // setUserdata(response);
        // Setuseraccesstoken(response.accessToken);
        // setUseruid(response.userID);
        localStorage.setItem("fbaccesstoken", response.accessToken);
        localStorage.setItem("fbuserid", response.userID);
        setupdate(!update);
        if (response.userID) {
          history.push("/");
          // history.push("/facebook");
          history.location.pathname.replace("/facebook");
        }
        // window.location.reload();
      }}
    />
    // )
  );
};

export default FbLogin;
