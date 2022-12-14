import React from 'react';
import { makeStyles } from '@mui/styles';
import Buttons from '../../Buttom/Button';
import imgBanner from '../images/Group-banner.png';


function SoundWave() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div></div>
    <div>
    <h1 className={classes.title}>Feel The Music</h1>
    <p className={classes.paragraph}>Stream over 20 thounsand songs with one <br/> click</p>
   <Buttons />
    </div>
    </div>
  )
}
const useStyles = makeStyles((theme)=>({
  root:{
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: 'white',
    minHeight: '100vh',
    backgroundImage: `url(${imgBanner})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  img:{
    height: "45vh",
    marginTop: "15vh",
    bottom: 0,
  },
  paragraph:{
    fontSize:'1rem',
  },
  title:{
    fontSize:'2rem',
    fontWeight:'400',
    fontFamily:'poppins',
  },
}));

export default SoundWave;