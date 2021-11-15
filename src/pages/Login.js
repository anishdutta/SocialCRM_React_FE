/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import axios from "axios";

function Login({ setUser, user }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // console.log(user);
        axios
          .get(
            `https://5k3xbanutb.execute-api.us-east-1.amazonaws.com/dev/api/getUserDetails/${user.uid}`
          )
          .then((res) => {
            // console.log(res);
            localStorage.setItem("dbuseruid", user.uid);
          });
        history.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <div className="shadow col-lg-4 bg-light rounded">
        <CombineAuthButton />
        <div className="px-3 mt-3">
          <h5 className="">
            Welcome <span className="text-warning">Back</span>
          </h5>
        </div>
        <form
          className="container mx-auto p-3"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
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
}

export default Login;

export const CombineAuthButton = () => {
  return (
    <div className="d-flex">
      <Link
        to="/login"
        className="text-decoration-none text-center m-auto w-50"
      >
        <button className="btn btn-warning text-light w-100 rounded-0">
          Login
        </button>
      </Link>
      <Link
        to="/signup"
        className="text-decoration-none text-center m-auto w-50"
      >
        <button className="btn btn-warning text-light w-100 rounded-0">
          Signup
        </button>
      </Link>
    </div>
  );
};
