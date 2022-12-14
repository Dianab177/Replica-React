import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logo from './images/logo.svg';
import { makeStyles } from '@mui/styles';
import "../App.css";

export default function Appbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}  variant="dense">
          <div className={classes.toolbar}>
          <Link to='/'>
           <img className={classes.img} src={logo} alt="Imagen logo"/>
           </Link>
          <Link className={classes.link} to='/'>
          <Typography variant="h6" component="div">
          SoundWare
          </Typography>
          </Link>
          </div>
          <div className={classes.toolbar}>
          <Link className={classes.link} to='/discovery'>
          <Typography className={classes.space} variant="h6" component="div">
          Discover
          </Typography>
          </Link>
          <Link className={classes.space} to='/join'>
          <Typography variant="h6" component="div">
          Join
          </Typography>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const useStyles = makeStyles((theme)=>({
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#202027", 
    height:'10vh',
  },
 link: {
  color: "white",
  textDecoration: "none",
  marginRight: 10,
},
space: {
  color: "white",
  textDecoration: "none",
  marginLeft: 20,
},
img: {
  width: '50px',
  marginRight: '10px',
}
}));