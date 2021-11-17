/* eslint-disable no-unused-vars */

import React from "react";
// import LatestPost from "../components/Posts/LatestPost";
// import LatestComment from "../components/Posts/LatestComment";
import "../components/Posts/posts.css";
// import LatestMessage from "../components/Posts/LatestMessage";

// import axios from "axios";

import { useEffect, useState } from "react";
import LiLogin from "../components/Login/Linkedin";
// import { Link, useHistory, useParams } from "react-router-dom";

function Post() {
    // const accessid = localStorage.getItem("liaccesstoken");
    // const redirecturi = "http://localhost:3000/linkedin"
    // const urlencoded = "http%3A%2F%2Flocalhost%3A3000%2Flinkedin"
    // const clientid = "782lxko1czd0k0"
    // const clientsecret = "5yv3xigfyzedLIT4"



    // const page_id = localStorage.getItem("lipageid");
    // // const page_id = useRecoilValue(pageid);
    // //   const [item, setItem] = useState("");
    // const [comments, setcomments] = useState([]);
    // const [isloading, setisloading] = useState(true);
    // const [textInput, setTextInput] = React.useState("");

    // const [isLoggedin, setisLoggedin] = useState(false);

    // const [selectpostcomments, setSelectpostcomments] = useState(null);
    // const [selectpostid, setSelectpostid] = useState(null);


    return (
        <div className="h-100 d-flex align-items-center justify-content-center">
            <LiLogin />
        </div>
    )
}

export default Post;
