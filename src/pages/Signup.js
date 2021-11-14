/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { collection, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import { CombineAuthButton } from "./Login";
import axios from "axios";

const Signup = (props) => {
  const history = useHistory();

  useEffect(() => {
    if (props.user) {
      history.push({
        pathname: "/",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.user]);

  const [name, setName] = useState("");
  const [orgname, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = props.setUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        try {
          axios
            .post(
              "https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/createUser",
              {
                UserId: user.uid,
                emailId: email,
                displayImg: "test",
                orgName: orgname,
              }
            )
            .then(
              (res) => {
                localStorage.setItem("dbuseruid", user.uid);
                history.push({
                  pathname: "/",
                });
              }
              // console.log(res)
            );
        } catch (e) {
          console.error("Error adding document: ", e);
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage, errorCode);
        // ..
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="shadow col-lg-4 bg-light">
        <CombineAuthButton />
        <div className="px-3 mt-3">
          <h5 className="">
            Register<span className="text-warning"> Now</span>
          </h5>
        </div>

        <form
          className="container mx-auto p-3"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="org_name" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              className="form-control"
              value={orgname}
              onChange={(e) => {
                setOrgName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning text-light w-100 mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
