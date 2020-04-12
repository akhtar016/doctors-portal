import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PopUp = (props) => {

 // get data from database

 fetch('https://doctor-portals.herokuapp.com/patientInfo')
 .then(res => res.json())
 .then(data=> {
   console.log("Data from database: " ,data[data.length - 1]._id);
 })

 



    return (
        
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{color:'red'}}>Your Appointment Request is Successful</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        
        <Link to="/"><Button>Okay</Button></Link>
      </Modal.Footer>
    </Modal>
    );
};

export default PopUp;