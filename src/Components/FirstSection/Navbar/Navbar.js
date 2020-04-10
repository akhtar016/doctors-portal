import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (

        
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand-xl">
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="# ">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Dental Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

     
  );
};

export default Navbar;
