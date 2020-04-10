import React from "react";
import fakeData from "./../../../../../../Data/fakeData.json";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./BookAppointment.css";

const BookAppointment = (props) => {
  const { key } = useParams();

  const appointment = fakeData.find((ap) => ap.key === key);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  

  return (

    <div className="book-appointment">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          <h2 className="text-center text-info" style={{"marginBottom":'25px'}}>{appointment.name}</h2>
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
              name="phone"
              className="form-control"
              ref={register({ required: true })}
              placeholder="Phone"
            />
            {errors.phone && (
              <span className="error">Phone is required</span>
            )}
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
          <label>Selected Time</label>
          <input
              name="selectedTime"
              className="form-control"
              disabled
              defaultValue={appointment.time}
            />
            
          </div>
          <div className="form-group">
            <button className="btn btn-info btn-block" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
