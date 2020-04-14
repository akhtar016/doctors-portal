import React, { useState } from "react";
import "./Dashboard.css";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from "react-bootstrap";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Dashboard = () => {

    const classes = useStyles();

    const [totalPatient, setTotalPatient] = useState(0);

    const [rows, setRows] = useState([]);


      // get data from database

      fetch("https://doctor-portals.herokuapp.com/patientInfo")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data from database: ", data.length);

        setTotalPatient(data.length);
        setRows(data)
      });
  



  
  return (
    <div className="dashboard bg-dark-gray">
      <h5 style={{fontWeight:'bold', marginBottom:'30px'}}>Dashboard</h5>
      <div className="categories">
        <div className="row">
          <div className="col-md-3">
            <div className="cat2 d-flex justify-content-between align-items-center bg-danger">
              <div>
                <h1 className="styleH1">0</h1>
              </div>
              <div>
                <p className="styleP">Pending Appointments</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="cat2 d-flex justify-content-between align-items-center bg-info">
            <div>
                <h1 className="styleH1">0</h1>
              </div>
              <div>
                <p className="styleP">Today's Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cat2 d-flex justify-content-between align-items-center bg-success">
            <div>
                <h1 className="styleH1">{totalPatient}</h1>
              </div>
              <div>
                <p className="styleP">Total Appointments</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="cat2 d-flex justify-content-between align-items-center bg-warning">
            <div>
                <h1 className="styleH1">{totalPatient}</h1>
              </div>
              <div>
                <p className="styleP">Total Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <TableContainer component={Paper} style={{padding:"20px"}}>
      <h5 className="styleTableH1">Recent Appointments</h5>
      <Table className={classes.table} aria-label="simple table">
          
        <TableHead>
          <TableRow>
            <TableCell align="left">Sr. No</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Contact</TableCell>
            <TableCell align="right">Prescription</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
             <TableCell align="left">{0}</TableCell>
              <TableCell align="center">{row.selectedDate}</TableCell>
              <TableCell align="center">{row.selectedTime}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="right"><Button className="btn btn-info">View</Button></TableCell>
              <TableCell align="right"><Button className="btn btn-success">Approved</Button> <EditOutlinedIcon className="bg-warning p-1" 
              style={{fontSize:'40px'}}/></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>










    </div>
  );
};

export default Dashboard;
