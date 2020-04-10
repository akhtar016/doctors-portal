import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Appointment.css";
import Calendar from "react-calendar";
import fakeData from "./../../../../Data/fakeData.json";
import "react-calendar/dist/Calendar.css";
import CardViewAppointment from "./CardViewAppointment/CardViewAppointment";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  let onChange = (date) => {
    setDate(date);
  };

  function formattedDate(date){

  const clickedDate = date.toString();
  const splitDate = clickedDate.split(" ");
  const formatDate = `${splitDate[1]} ${splitDate[2]},${splitDate[3]}`;
  return formatDate;
  }

  // const clickedDate = date.toString();
  // const splitDate = clickedDate.split(" ");
  // const formatDate = `${splitDate[1]} ${splitDate[2]},${splitDate[3]}`;

  const availableDate = formattedDate(date);
  console.log(availableDate)
  

  return (
    <div className="appointment-Sec">
      <div className="bg-image">
        <Navbar className="navbar"></Navbar>
        <div className="content">
          <div className="row">
            <div className="col-6">
              <h2>Appointment</h2>
              <Calendar onChange={onChange} value={date} />
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
      </div>

      <div className="container">
        <h1
          style={{ color: "#0a8268", fontWeight: "600" }}
          className="text-center"
        >
          Available Appointments On {availableDate}
        </h1>
      </div>

      <div className="row my-3 custom-design">

          {
              fakeData.map(available=> <CardViewAppointment available={available} formattedDate={availableDate}></CardViewAppointment> )
          }
          
      </div>


      </div>

    
  );
};

export default Appointment;
