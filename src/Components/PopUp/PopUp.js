import React from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PopUp = (props) => {

  const date = props.date;
  const service = props.appointment.name;
  const time = props.appointment.time;

  console.log(date, service, time);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Appointment Status and Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
                <p style={{color:'black', fontSize:'14px'}}><span style={{color:'green'}}>Congratulation</span>,Your appointment for {service} is confirmed on {date}. You are requested to visit doctor between {time}. For more: <a href="https://bit.ly/doctors-portal">https://bit.ly/doctors-portal</a><br/>Thank you.</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to="/">
          <Button className="btn btn-info">Okay</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
