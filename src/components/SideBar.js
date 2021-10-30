import React from "react";
import './sidebar.css'
import { Link } from "react-router-dom";
import instagram from './assets/instagram.png'
import facebook from './assets/facebook.png'
import linkedin from './assets/linkedin.png'

function SideBar() {
  return( 
  <div className="sidebar vh-100 sticky-top top-0">
   <Link to="/" className="text-decoration-none"> <h5 className="text-uppercase text-center">Social crm</h5></Link>
    <ul className="list-unstyled container text-sidebar">
        <Link to="/post" className="text-decoration-none text-center"><li className="my-4">Instagram</li></Link>
        <Link to="/post" className="text-decoration-none text-center"><li className="my-4">Facebook</li></Link>
        <Link to="/post" className="text-decoration-none text-center"><li className="my-4">LinkedIn</li></Link>
    </ul>
    <ul className="list-unstyled container icon-sidebar">
        <Link to="/post" className=""><img className="social-logo" src={instagram} alt="instagarm" /></Link>
        <Link to="/post" className=""><img className="social-logo" src={facebook} alt="fb" /></Link>
        <Link to="/post" className=""><img className="social-logo" src={linkedin} alt="linkedin" /></Link>
    </ul>
  </div>
  )
}

export default SideBar;
