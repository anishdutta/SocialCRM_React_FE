/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useState, useEffect } from "react";
// import { LinkedIn } from "react-linkedin-login-oauth2";
// import { useLinkedIn } from "react-linkedin-login-oauth2";
const App = () => {
    const [code, setcode] = useState("");
    const [accesscode, setaccesscode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const handleSuccess = (data) => {
        localStorage.setItem("licode", data);
        setcode(data);
        setErrorMessage("");
        console.log(data);
    };
    const handleFailure = (error) => {
        setcode("");
        setErrorMessage(error.message);
    };

    // const redirecturi = "http://localhost:3000/linkedin"
    const redirecturi = "https://sociophin.netlify.app/linkedin"
    const urlencoded = "https%3A%2F%2Fsociophin.netlify.app%2Flinkedin"
    // const urlencoded = "http%3A%2F%2Flocalhost%3A3000%2Flinkedin"
    const clientid = "782lxko1czd0k0"
    const clientsecret = "5yv3xigfyzedLIT4"


    useEffect(() => {
        let url = window.location.href;
        let params = (new URL(url)).searchParams;
        console.log(params.get('code'))
        const code = params.get('code')
        setcode(code)

        if (code) {
            try {
                getAccessToken(code)
            } catch {
                console.log("error")

            }
        }
    }, [])



    const link = ` https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientid}&redirect_uri=${redirecturi}&state=foobarstate&scope=r_liteprofile%20r_emailaddress%20w_member_social`


    const getAccessToken = (code) => {
        const url = `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${code}&redirect_uri=${urlencoded}&client_id=${clientid}&client_secret=${clientsecret}`
        axios.put(url, { headers: { "Access-Control-Allow-Origin": "*" } }).then(data => { console.log(data); setaccesscode(data.access_token); localStorage.setItem('liaccesstoken', data.access_token) }).catch(err => console.log(err))
    }


    return (
        <div>

            <a href={link}>
                <img
                    src={
                        "https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_960_720.png"
                    }
                    alt="Sign in with Linked In"
                    style={{ maxWidth: "180px", cursor: "pointer" }}
                />
            </a>

            {!code && <div>No code</div>}
            {code && <div>Code: {code}</div>}
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
};
export default App;