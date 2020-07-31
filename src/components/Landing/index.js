import React from 'react';
import Rayze from "../../img/Rayze.jpg";
import landing from "../../img/landing.svg";
import landing2 from "../../img/landing2.svg";



import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    // maxWidth: 200,
    // maxHeight: 200,
    // display: "flex",
    // justifyContent: "center",
    width: "21rem",
   
    // padding: "1rem",
  },
  
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
        {/* <Typography component="h1" variant="h5">
          Welcome to 
        </Typography> */}
        <img src={Rayze} className = {classes.img} alt="Logo" />
        <Typography component="h1" variant="h5" align="center">
          Here for small businesses and startup organizations 
        </Typography>
        <img src={landing2} className = {classes.img} alt="Logo" />
        <Typography component="h1" variant="h5" align="center">
        Moving businesses to online platforms and offering marketing advice.
        </Typography>
         
        </div>
      </Container>
    </div>
  )
}

export default LandingPage;