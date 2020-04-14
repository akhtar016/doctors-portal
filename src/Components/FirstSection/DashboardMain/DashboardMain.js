import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import cyan from '@material-ui/core/colors/cyan';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListItemIcon} from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';
import Appointment from '../../DrawerItems/Appointment/Appointment';
import Dashboard from "../../DrawerItems/Dashboard/Dashboard"
import Patients from '../../DrawerItems/Patients/Patients';
import Prescription from '../../DrawerItems/Prescription/Prescription';
import "./DashboardMain.css";



const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: cyan["A400"]
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: cyan[50],
    padding: theme.spacing(3),
  },
}));

 function DashboardMain() {
  const classes = useStyles();

  const [component, setComponent] = useState('dashboard');

  

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
        

       
            <ListItem button onClick={()=> setComponent('dashboard')}><ListItemIcon><DashboardIcon/></ListItemIcon><ListItemText>Dashboard</ListItemText></ListItem>
            <ListItem button onClick={()=> setComponent('appointment')}><ListItemIcon><EventIcon/></ListItemIcon><ListItemText>Appointment</ListItemText></ListItem>
            <ListItem button onClick={()=> setComponent("patients")}><ListItemIcon><PeopleOutlineIcon/></ListItemIcon><ListItemText>Patients</ListItemText></ListItem>
            <ListItem button onClick={()=> setComponent('prescription')}><ListItemIcon><AssignmentIcon/></ListItemIcon><ListItemText>Prescription</ListItemText></ListItem>
            <ListItem button onClick={()=> alert("Yet to complete")}><ListItemIcon><SettingsIcon/></ListItemIcon><ListItemText>Settings</ListItemText></ListItem> 
        </List>  
        
        
      </Drawer>
      <main>
      {
          component === 'dashboard'  ?
          <Dashboard></Dashboard> 
          :
          component === 'appointment'  ?
           <Appointment></Appointment>
          :
          component === 'patients' ?
           <Patients></Patients>
          :
          component === 'prescription' &&  
           <Prescription></Prescription>   
        }
        
      </main>
    </div>
  );
}

export default DashboardMain;