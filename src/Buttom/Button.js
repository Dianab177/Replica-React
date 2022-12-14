import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';


export default function Buttons() {
    const classes = useStyles();
  return (
    <Stack direction="row" spacing={2}>
      <Button  variant="contained">
      <Link className={classes.link} to='/join'>
      <Typography className={classes.button} variant="p" component="div">
          Join Now
        </Typography>
       </Link>
      </Button>
    </Stack>
  );
}
const useStyles = makeStyles((theme)=>({
link:{
    color:'white',
    textDecoration: 'none',
    margin:'10 15px',
},
button:{
    fontSize: '0.6rem',
}
}));