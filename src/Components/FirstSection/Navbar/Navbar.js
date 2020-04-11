import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand-xl">
        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Doctor's Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dental-services" className="nav-link">
                Dental Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reviews" className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

     
  );
};

export default Navbar;
