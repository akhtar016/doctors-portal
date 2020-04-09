import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (

        
      <nav class="navbar navbar-expand-lg">
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="# ">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Dental Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>

     
  );
};

export default Navbar;
