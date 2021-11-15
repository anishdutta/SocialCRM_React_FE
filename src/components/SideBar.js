import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
// import downarrow from "./assets/downarrow.svg";

// import instagram from "./assets/instagram.png";
// import facebook from "./assets/facebook.png";
// import linkedin from "./assets/linkedin.png";

function SideBar() {
  return (
    <>
      <nav className="sidebar navbar navbar-light bg-light sticky-top top-0 icon-sidebar m-0 vw-100">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none text-center mx-5">
            <h5 className="text-uppercase text-decoration-none text-center m-auto">
              Social crm
            </h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link
                to="/"
                className="text-decoration-none text-center mx-5 off-canvas-title"
              >
                <h5 className="text-uppercase text-decoration-none text-center m-auto">
                  Social crm
                </h5>
              </Link>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <Link
                  to="/post"
                  className="nav-link text-decoration-none m-auto"
                >
                  <li className="my-4 nav-item">Instagram</li>
                </Link>
                <Link
                  to="/post"
                  className="nav-link text-decoration-none m-auto"
                >
                  <li className="my-4 nav-item">Facebook</li>
                </Link>
                <Link
                  to="/post"
                  className="nav-link text-decoration-none m-auto"
                >
                  <li className="my-4 nav-item">LinkedIn</li>
                </Link>
                <Link
                  to="/marketing"
                  className="nav-link text-decoration-none m-auto"
                >
                  <li className="my-4 nav-item">Marketing</li>
                </Link>

                <Link
                  to="/newpost"
                  className="nav-link text-decoration-none m-auto"
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
                      <option className="dropdown-item">
                        Upload IGTV Video
                      </option>
                    </ul>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
