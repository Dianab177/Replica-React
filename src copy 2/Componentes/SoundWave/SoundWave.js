import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import imgBanner from "../images/Group-banner.png";
import Typography from "@mui/material/Typography";


function SoundWave() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <div></div>
      <div>
        <h1 className={classes.title}>Feel The Music</h1>
        <p className={classes.paragraph}>
          Stream over 20 thounsand songs with one click
        </p>
        <Button variant="contained">
          <Link className={classes.link} to="/join">
            <Typography className={classes.button} variant="p" component="div">
              Join Now
            </Typography>
          </Link>
        </Button>
      </div>
    </div>
    <Link to="discovery"><div><Discover/></div></Link>
    <Link to="join"><div><Join/></div></Link>
    <Link><div><Footer/></div></Link>
    </>
  );
}
const useStyles = makeStyles(({ theme }) => ({
  root: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    minHeight: "82.3vh",
    backgroundImage: `url(${imgBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  img: {
    height: "45vh",
    marginTop: "15vh",
    bottom: 0,
  },
  paragraph: {
    fontSize: "1rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "400",
    fontFamily: "poppins",
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "10 15px",
  },
  button: {
    fontSize: "0.6rem",
  },
}));

export default SoundWave;
