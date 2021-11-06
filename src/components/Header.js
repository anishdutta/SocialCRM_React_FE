import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <>
      <header className="header vw-100 ">
        <nav className="sticky-top top-0 d-flex align-items-center text-sidebar py-2">
          <ul className="list-unstyled w-100 text-sidebar">
            <Link to="/" className="text-decoration-none text-center mx-5">
              <li className="text-uppercase text-decoration-none text-center m-auto">
                Social crm
              </li>
            </Link>
            <Link
              to="/post"
              className="text-decoration-none text-center m-auto"
            >
              <li className="">Instagram</li>
            </Link>
            <Link
              to="/post"
              className="text-decoration-none text-center m-auto"
            >
              <li className="">Facebook</li>
            </Link>
            <Link
              to="/post"
              className="text-decoration-none text-center m-auto"
            >
              <li className="">LinkedIn</li>
            </Link>
            <Link
              to="/marketing"
              className="text-decoration-none text-center m-auto"
            >
              <li className="">Marketing</li>
            </Link>

            <Link
              to="/newpost"
              className="text-decoration-none text-center m-auto"
            >
              <div className="btn-group">
                <button
                  className="btn btn-warning btn-sm text-light"
                  type="button"
                >
                  Create New Post
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-warning dropdown-toggle dropdown-toggle-split text-light"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                  <option className="dropdown-item">Upload</option>
                  <option className="dropdown-item">Upload IGTV Video</option>
                </ul>
              </div>
            </Link>
          </ul>
        </nav>
        {/* <ul className="list-unstyled icon-sidebar m-0">
        <Link to="/post" className="">
          <img className="social-logo" src={instagram} alt="instagarm" />
        </Link>
        <Link to="/post" className="">
          <img className="social-logo" src={facebook} alt="fb" />
        </Link>
        <Link to="/post" className="">
          <img className="social-logo" src={linkedin} alt="linkedin" />
        </Link>
      </ul> */}
      </header>
      <SideBar />
    </>
  );
};

export default Header;
