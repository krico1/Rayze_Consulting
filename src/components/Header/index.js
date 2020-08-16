import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    logo: {
      width: "3rem",
      height: "3rem",
      paddingRight: "0.5rem",
      [theme.breakpoints.up("sm")]: {
        marginLeft: "6.5rem",
      },
      // styles for mobile landscape
      [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
        marginLeft: "0",
      },
    },
 
    title: {
      color: "white",
      fontWeight: "bold",
      margin: "0",
    },
  }));

  const Header = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
              Rayze
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const SignInHeader = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
              Sign In
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const SignUpHeader = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
              Sign Up
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const HomeHeader = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
            Home
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const InfoHeader = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
             Info
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };

  const AccountHeader = () => {
    const classes = useStyles();
    return (
      <>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            {/* <SusLogo className={classes.logo} /> */}
            <Typography variant="h6" className={classes.title} noWrap>
              Account
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  };


  export default Header;

  export {HomeHeader, SignInHeader, SignUpHeader, InfoHeader, AccountHeader};
  