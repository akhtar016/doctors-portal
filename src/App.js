import React from 'react';
import './App.css';
import FirstSection from './Components/FirstSection/FirstSection';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from './Components/FirstSection/MiddlePart/Appointment/Appointment';
import NotFound from './Components/NotFound/NotFound';
import BookAppointment from './Components/FirstSection/MiddlePart/Appointment/CardViewAppointment/BookAppointment/BookAppointment';
import Login from './Components/Login/Login';
import Dashboard from './Components/FirstSection/Dashboard/Dashboard';

function App() {
  return (

    <Router>
    <Switch>
      <Route exact path="/">
        <FirstSection></FirstSection>
      </Route>

      <Route path="/get-appointment">
        <Appointment></Appointment>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/dashboard">
        <Dashboard></Dashboard>
      </Route>

      

      <Route path="/get_appointment/:key">
              <BookAppointment></BookAppointment>
            </Route>

      

      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
    
  );
}

export default App;
