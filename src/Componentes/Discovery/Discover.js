import React from 'react';
import { makeStyles } from '@mui/styles';
import microphone from '../images/microphone.svg';
import albums from '../images/albums.svg';
import more from '../images/more.svg';
import covers from '../images/covers.jpg';

function Discover() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.root}>
      <div className={classes.containerText}>
      <h2 className={classes.h2}>Discover new music</h2>
      <div className={classes.container}>
      <div className={classes.spanContent}><img className={classes.img} src={microphone} alt='icono microfono'/>Charts</div>
      <div className={classes.spanContent}><img className={classes.img} src={albums} alt='icono albums'/>Albums</div>
      <div className={classes.spanContent}><img className={classes.img} src={more} alt='icono more'/>More</div>
      </div>
      <p>By joining you can benefit listening to the latest albums released.</p>
      </div>
      <div>
        <img className={classes.imgCover} src={covers} alt='imagen covers'/>
      </div>
    </div>
    </>
  )
}

const useStyles = makeStyles((theme)=>({
root:{
  display: 'flex',
  justifyContent:'center',
  alignItems: 'center',
  color:'white',
  minHeight: '79vh',
  fontFamily:'poppins',
},
containerText:{
 marginRight:'40px',
},
imgCover:{
 width: "35vw",
},
container:{
  display: 'flex',
  alignItems: 'center',
  marginRight:'30px',
},
spanContent:{
  backgroundColor: "#202027",
  width:'60px',
  padding:'8px',
  textAlign:'center',
  margin:'8px',
},
img:{
  width:'30px',
},
h2:{
  fontWeight:'400',
  fontFamily:'poppins',
  fontSize:'2rem',
},
}));
export default Discover;