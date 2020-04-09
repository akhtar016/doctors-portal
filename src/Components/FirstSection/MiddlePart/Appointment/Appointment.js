import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Appointment.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  let onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="appointment-Sec">
      <div className="bg-image">
        <Navbar className="navbar"></Navbar>
        <div class="content">
          <div class="row">
            <div class="col-6">
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
          Available Appointments On {date.toString()}{" "}
        </h1>
      </div>

      <div class="row card-custom text-center">
        <div class="col-sm-4">
          <div class="card" style={{ marginBottom: "20px" }}>
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Teeth Orthodontics
              </h4>
              <h6 style={{ fontWeight: "bold" }}>8:00 AM - 9:00 AM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Cosmetic Dentistry
              </h4>
              <h6 style={{ fontWeight: "bold" }}>10:05 AM - 11:30 AM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Teeth Cleaning
              </h4>
              <h6 style={{ fontWeight: "bold" }}>5:00 PM - 6:30 PM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Teeth Orthodontics
              </h4>
              <h6 style={{ fontWeight: "bold" }}>8:00 AM - 9:00 AM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Cosmetic Dentistry
              </h4>
              <h6 style={{ fontWeight: "bold" }}>10:05 AM - 11:30 AM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h4
                class="card-title"
                style={{ color: "#0a8268", fontWeight: "600" }}
              >
                Teeth Cleaning
              </h4>
              <h6 style={{ fontWeight: "bold" }}>5:00 PM - 6:30 PM</h6>
              <p style={{ color: "gray" }}>10 SPACES AVAILABLE</p>
              <a href="# " class="btn btn-info">
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
