import React from 'react';
import { withAuthorization } from '../../services/Session';
import info from "../../img/info.svg";
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
  function InfoPage() {
    const classes = useStyles();
    return (
      <div>
        <Container>
          <CssBaseline />
          <div className={classes.paper}>
          
          <img src={info} className = {classes.img} alt="Logo" />
          <Typography component="h1" variant="h5" align="center">
          Rayze offers this database as a way to find out more about other companies and connect with others

          </Typography>
          
           
          </div>
        </Container>
      </div>
    )
  }

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(InfoPage);