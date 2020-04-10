import React from "react";
import fakeData from "./../../../../../../Data/fakeData.json";
import { useParams, useLocation, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./BookAppointment.css";
import Popup from "reactjs-popup";

const BookAppointment = (props) => {
  const { key } = useParams();

  const location = useLocation(props);

  const date = location.date.selectedDate;

  console.log("This is date from book appointment page:", date);

  const appointment = fakeData.find((ap) => ap.key === key);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // post data to server

    fetch("http://localhost:4200/addUser", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    // clear input field

    document.getElementById("form-clear").reset();

      // get data from database

      fetch('http://localhost:4200/patientInfo')
      .then(res => res.json())
      .then(data=> {
        console.log("Data from database: " ,data);
      })
      

      document.getElementById('spanText').innerText = "Your appointment request is successful";
  

  };

 

  return (
    <div className="book-appointment">
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="form-clear"
          className="py-5"
        >
          <h2
            className="text-center text-info"  
          >
            {appointment.name}
          </h2>
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Name"
            />
            {errors.name && <span className="error">Name is required</span>}
          </div>
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Email"
            />
            {errors.email && <span className="error">Email is required</span>}
          </div>
          <div className="form-group">
            <input
              name="phone"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Phone"
            />
            {errors.phone && <span className="error">Phone is required</span>}
          </div>
          <div className="form-group">
            <input
              name="age"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Age"
            />
            {errors.age && <span className="error">Age is required</span>}
          </div>
          <div className="form-group">
            <input
              name="address"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Address"
            />
            {errors.address && <span className="error">Address is required</span>}
          </div>
          
          
          <div className="form-group">
          <label>Selected Service</label>
            <input
              name="selectedService"
              className="form-control"
              ref={register({ required: true })}
              disabled
              defaultValue={appointment.name}
            />
            <label>Selected Time</label>
            <input
              name="selectedTime"
              className="form-control"
              ref={register({ required: true })}
              disabled
              defaultValue={appointment.time}
            />
            <label>Selected Date</label>
            <input
              name="selectedDate"
              className="form-control"
              ref={register({ required: true })}
              disabled
              defaultValue={date}
            />
          </div>
          <div className="form-group">
             <button className="btn btn-info btn-block" type="submit">
              Send
            </button>

            <span id="spanText" style={{color:'green'}}></span>
          </div>
        </form>

      
      </div>
    </div>
  );
};

export default BookAppointment;