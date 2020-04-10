import React from "react";
import './MiddlePart.css';
import { Link } from "react-router-dom";

const MiddlePart = () => {
  return (
    <div className="content">
      <div className="row">
        <div className="col-6">
            <h4>Your New Smile</h4>
            <h4>Starts Here</h4>
            <p id="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, facilis aliquam ab placeat, aut minus non architecto voluptatem exercitationem excepturi velit harum odit amet voluptate</p>
            <Link to="/get-appointment"><button className="btn btn-info custom-btn">Get Appointment</button></Link>
        </div>
        <div className="col-6 d-flex justify-content-end">
            <img  src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1586325276/Mask_Group_1_rguk4y.png" alt="" height="350px" width="100%"/>
            
            </div>
      </div>
    </div>
  );
};

export default MiddlePart;
