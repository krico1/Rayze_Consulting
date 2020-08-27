import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../../services/Session';
import SignOutButton from '../../pages/RegisterPages/SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InfoIcon from '@material-ui/icons/Info';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    left:0,
    width: "100%",
    zIndex:5,
    color: "secondary",
  },
}));

function Navigation() {
  
  return(
    <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
  );
  
}
 

function NavigationAuth() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        label="Home" 
        icon={<RestoreIcon />} 
        component={Link}
        to="/home"
        />

      
        
        <BottomNavigationAction 
        label="Info" 
        icon={<InfoIcon />} 
        component={Link}
        to="/info"
        /> 
        
         <BottomNavigationAction 
        label="Account" 
        icon={<PersonOutlineIcon />} 
        component={Link}
        to="/account"
        /> 

        {/* <BottomNavigationAction 
        label="Sign Out" 
        icon={<ExitToAppIcon />} 
        component={<SignOutButton/>}
        />  */}
        
        
    </BottomNavigation>
  );
 
}


function NavigationNonAuth() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
        label="Rayze" 
        icon={<FlightLandIcon />} 
        component={Link}
        to='/'
        />

       <BottomNavigationAction 
        label="SignIn" 
        icon={<AccountBoxIcon />} 
        component={Link}
        to="/signin"
        /> 
    </BottomNavigation>
  );
}

export default Navigation;

