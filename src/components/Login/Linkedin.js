
import axios from "axios";
import React, { useState, useEffect } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
// import { useLinkedIn } from "react-linkedin-login-oauth2";
const App = () => {
    const [code, setcode] = useState("");
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
    // const { linkedInLogin } = useLinkedIn({
    //   clientId: "782lxko1czd0k0",
    //   redirectUri: `http://localhost:3000/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    //   onSuccess: (code) => {
    //     handleSuccess(code);
    //     localStorage.setItem("licode", code);
    //   },
    //   onError: (error) => {
    //     handleFailure(error);
    //   },
    // }); 
    const redirecturi = "http://localhost:3000/linkedin"
    const urlencoded = "http%3A%2F%2Flocalhost%3A3000%2Flinkedin"
    const clientid = "782lxko1czd0k0"
    const clientsecret = "5yv3xigfyzedLIT4"

    // const handlelinkedin = () => {
    //     axios.post(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientid}&redirect_uri=${redirecturi}&state=foobarstate&scope=r_liteprofile%20r_emailaddress%20w_member_social`).then(data => {
    //         console.log(data)
    //     })
    // }


    useEffect(() => {
        let url = window.location.href;
        let params = (new URL(url)).searchParams;
        console.log(params.get('code'))
        const code = params.get('code')
        setcode(code)

        if (code) {
            try {
                getAccessToken(code)
                // axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
                //     'grant_type': 'authorization_code',
                //     'code': code,
                //     'redirect_uri': urlencoded,
                //     'client_id': clientid,
                //     'client_secret': clientsecret
                // }).then(response => {
                //     console.log(response)
                // }).catch(data => { console.log(data) })
            } catch {
                console.log("error")

            }
        }
    }, [])



    const link = ` https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientid}&redirect_uri=${redirecturi}&state=foobarstate&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    // const getcode = () => {
    //     const link = ` https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientid}&redirect_uri=${redirecturi}&state=foobarstate&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    //     return link
    // }

    const getAccessToken = (code) => {
        const url = "https://www.linkedin.com/oauth/v2/accessToken"
        const params = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': urlencoded,
            'client_id': clientid,
            'client_secret': clientsecret
        }
        axios.post(url, params).then(data => { console.log(data) }).catch(err=>console.log(err))
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