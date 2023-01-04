import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

export default function Footer() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}  variant="dense">
          <div className={classes.toolbar}>
          <Link className={classes.link} to='/join'>
          <Typography variant="h6" component="div">
           About Us
           </Typography>
           </Link>
          <Link className={classes.link} to='/join'>
          <Typography variant="h6" component="div">
          Contact
          </Typography>
          </Link>
          </div>
          <div className={classes.toolbar}>
          <Link className={classes.space} href="https://twitter.com/">
          <IconButton aria-label="Twittter">
           <TwitterIcon  className={classes.icono}/>
           <Typography className={classes.icono} variant="h6" component="div">
           Twitter
           </Typography>
          </IconButton>
          </Link>
          <Link className={classes.space} href="https://es-es.facebook.com/">
          <IconButton aria-label="Facebook">
           <FacebookIcon  className={classes.icono}/>
           <Typography className={classes.icono} variant="h6" component="div">
           Facebook
           </Typography>
          </IconButton>
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
    height:'6vh',
    bottom: 0,
  },
 link: {
  color: "white",
  textDecoration: "none",
  marginRight: 20,
},
space: {
  color: "white",
  textDecoration: "none",
  marginLeft: 20,
},
img: {
  width: '50px',
  marginRight: '10px',
},
icono:{
  color:'white',
  marginRight:5
}
}));