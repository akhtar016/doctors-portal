import React from "react";
import "./FinalPart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";

const FinalPart = () => {
  return (
    <div className="container">
        <div className="d-flex justify-content-around">

      <div className="row custom-card bg-info">
        <div className="icon">
          <span><FontAwesomeIcon icon={faClock}/></span>
        </div>
        <div>
          <h6>Opening Hours</h6>
          <p>Lorem ipsum dolor sit</p>
        </div>
      </div>

      <div className="row custom-card bg-dark">
        <div className="icon">
          <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
        </div>
        <div>
          <h6>Visit Our Location</h6>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </div>

      <div className="row custom-card bg-info">
        <div className="icon">
          <span><FontAwesomeIcon icon={faPhoneAlt}/></span>
        </div>
        <div className="textPart">
          <h6>Contact Us Now</h6>
          <p>+000 111 456789</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FinalPart;
