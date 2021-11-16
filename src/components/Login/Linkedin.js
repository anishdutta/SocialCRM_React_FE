
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
    return (
        <div>
            <LinkedIn
                clientId="782lxko1czd0k0"
                redirectUri={`${window.location.origin}/linkedin`}
                onSuccess={(code) => {
                    handleSuccess(code)
                    localStorage.setItem("linkedin", JSON.stringify(code));
                }}
                onError={(error) => {
                    handleFailure(error)
                    console.log(error);
                }}
            >
                {({ linkedInLogin }) => (
                    <img
                        onClick={linkedInLogin}
                        src={
                            "https://cdn.pixabay.com/photo/2017/08/22/11/56/linked-in-2668700_960_720.png"
                        }
                        alt="Sign in with Linked In"
                        style={{ maxWidth: "180px", cursor: "pointer" }}
                    />
                )}
            </LinkedIn>
            {!code && <div>No code</div>}
            {code && <div>Code: {code}</div>}
            {errorMessage && <div>{errorMessage}</div>}
        </div>
    );
};
export default App;