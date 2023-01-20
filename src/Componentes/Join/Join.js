import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import imgBanner2 from '../images/Group-banner2.png';

function Join() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <h2 className={classes.h2}>
          Join The <span className={classes.spanColor}>fun.</span>
        </h2>
        <div className={classes.containerForm}>
          <form>
            <Typography>Name:</Typography>
            <input className={classes.input} type="text" />
            <Typography>Email:</Typography>
            <input className={classes.input} type="text" />
            <Typography>Password:</Typography>
            <input className={classes.input} type="password" />
            <div className={classes.containerButton}>
            <Button variant="contained">
              <Link className={classes.linkButton} to="/join">
                <Typography
                  className={classes.buttonJoin}
                  variant="p"
                  component="div"
                >
                  Join Now
                </Typography>
              </Link>
            </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    minHeight: "79vh",
    fontFamily: "poppins",
    backgroundImage: `url(${imgBanner2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  h2: {
    fontSize: "3rem",
  },
  spanColor: {
    color: "#bc3a80",
  },
  containerForm:{
    display:'flex',
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#202027",
    padding:'30px 40px',
    borderRadius:'10px',
    marginLeft:'15vw',
  },
  linkButton: {
    color: "white",
    textDecoration: "none",
    margin: "10 15px",
  },
  containerButton:{
    marginTop:'15px',
  },
  buttonJoin: {
    fontSize: "0.6rem",
    width: "28vw",
  }, 
  input: {
    width: "30vw",
    border: "0.5px #5c5470 solid",
    background:'#202027',
    padding:'7px',
    marginBottom: '20px',
    borderRadius: '5px',
  },
}));
export default Join;
