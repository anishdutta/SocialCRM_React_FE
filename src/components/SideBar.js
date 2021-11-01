import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import downarrow from "./assets/downarrow.svg";

import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'

function SideBar() {
  return (
    <div className="sidebar vw-100 sticky-top top-0 d-flex align-items-center">
      <Link to="/" className="text-decoration-none text-center mx-5">
        <h5 className="text-uppercase text-decoration-none text-center m-auto">
          Social crm
        </h5>
      </Link>
      <ul className="list-unstyled col text-sidebar">
        <Link to="/post" className="text-decoration-none text-center m-auto">
          <li className="my-4">Instagram</li>
        </Link>
        <Link to="/post" className="text-decoration-none text-center m-auto">
          <li className="my-4">Facebook</li>
        </Link>
        <Link to="/post" className="text-decoration-none text-center m-auto">
          <li className="my-4">LinkedIn</li>
        </Link>
        <Link to="/marketing" className="text-decoration-none text-center m-auto">
          <li className="my-4">Marketing</li>
        </Link>

        <Link to="/newpost" className="text-decoration-none text-center m-auto">
          <button className="btn btn-warning text-light">
            <span>Create New Post </span>
            <img className="mx-2" src={downarrow} alt="down" />
          </button>
        </Link>
      </ul>
      <ul className="list-unstyled icon-sidebar m-0">
        <Link to="/post" className=""><img className="social-logo" src={instagram} alt="instagarm" /></Link>
        <Link to="/post" className=""><img className="social-logo" src={facebook} alt="fb" /></Link>
        <Link to="/post" className=""><img className="social-logo" src={linkedin} alt="linkedin" /></Link>
      </ul>
    </div>
  );
}

export default SideBar;
