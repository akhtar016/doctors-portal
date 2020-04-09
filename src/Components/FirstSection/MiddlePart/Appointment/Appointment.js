import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Appointment.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  let onChange = date => {
    setDate(date);
  };

  return (
    <div className="bg-image appointment-Sec">
      <Navbar className="navbar"></Navbar>
      <div class="content">
        <div class="row">
          <div class="col-6">
            <h2>Appointment</h2>
            <Calendar onChange={onChange} value={date} 
            />
          </div>
          <div className="col-6 d-flex justify-content-end">
            <img
              src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1586325276/Mask_Group_1_rguk4y.png"
              alt=""
              height="350px"
              width="100%"
            />
          </div>
        </div>
      </div>

      <div className="container custom-design">

          <h1 style={{color:'cyan', fontWeight:'bold'}}>Available Appointments On {date.toString()}  </h1>

      </div>
    </div>
  );
};

export default Appointment;
