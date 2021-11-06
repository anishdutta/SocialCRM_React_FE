import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { signOutUser } from "../firebase";
import { useHistory } from "react-router-dom";

const Header = ({ user }) => {
  const history = useHistory()
  const tab = window.location.href.split("/")[3];
  console.log(tab);


  return (
    <>
      <header className="header vw-100 ">
        <nav className="sticky-top top-0 d-flex align-items-center justify-content-between w-100 py-2">
            <Link to="/" className="text-decoration-none w-25">
              <h5 className="text-uppercase text-decoration-none text-center w-100 fs-6 my-auto">
                 Social crm
              </h5>
            </Link>
          <ul className="list-unstyled text-sidebar w-100">

            {user ? (
              <>
                <Link
                  to="/instagram"
                  className="text-decoration-none text-center m-auto"
                >
                  <li className="">Instagram</li>
                </Link>
                <Link
                  to="/facebook"
                  className="text-decoration-none text-center m-auto"
                >
                  <li className="">Facebook</li>
                </Link>
                <Link
                  to="/linkedin"
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
                      <option className="dropdown-item">
                        Upload IGTV Video
                      </option>
                    </ul>
                  </div>
                </Link>
                  <button className="btn btn-warning btn-sm text-light mx-3 rounded" onClick={()=>{signOutUser()}}>
                    SignOut
                  </button>
           
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-decoration-none mx-3"
                >
                  <button className="btn btn-warning btn-sm text-light w-100 rounded">
                    Login
                  </button>
                </Link>
                {/* <Link
                  to="/signup"
                  className="text-decoration-none text-center m-auto"
                >
                  <button className="btn btn-warning btn-sm text-light w-100 rounded">
                    Signup
                  </button>
                </Link> */}
              </>
            )}
          </ul>
        </nav>
      </header>
      <SideBar />
    </>
  );
};

export default Header;
