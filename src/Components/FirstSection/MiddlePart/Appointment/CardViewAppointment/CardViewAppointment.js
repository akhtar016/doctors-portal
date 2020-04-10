import React from 'react';
import "./CardViewAppointment.css";
import { Link } from 'react-router-dom';


const CardViewAppointment = (props) => {

    const{ name, time,key} = props.available;


    const selectedDate = props.formattedDate;
    

    return (

      <div className="col-md-4 mb-4">
            
            <div className="card text-center">
                
                <div className="card-body custom-card-body">
                    <h4>{name}</h4>
                    <h6>{time}</h6>
                    <p>10 SPACES AVAILABLE</p>
                    <Link to={{
                        pathname:"/get_appointment/"+key,
                        date:
                        {
                            selectedDate: selectedDate
                        }

                        }}><button className="btn btn-info">BOOK APPOINTMENT</button></Link>
                </div>
            </div>
            
        </div>
       

            
      
    );
};

export default CardViewAppointment;