import React, { Component } from 'react';
// import { FirebaseContext } from '../Firebase';
import { withFirebase } from '../../../services/Firebase';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { PasswordInput } from "../SignIn";
import PropTypes from "prop-types";


// Material UI Imports
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

import * as ROUTES from '../../../constants/routes';


// Used for PasswordTwo data - Material UI
class PasswordInput2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      passwordIsMasked: true,
    };
  }

  togglePasswordMask = () => {
    this.setState((prevState) => ({
      passwordIsMasked: !prevState.passwordIsMasked,
    }));
  };

  render() {
    const { passwordIsMasked } = this.state;

    return (
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        type={passwordIsMasked ? "password" : "text"}
        {...this.props}
        // Toggle for password display
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableFocusRipple
                disableRipple
                style={{ backgroundColor: "transparent" }}
                aria-label="toggle password visibility"
                onClick={this.togglePasswordMask}
                edge="end"
              >
                {passwordIsMasked ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: <LockOpenIcon style={{ marginRight: "1rem" }} />,
        }}
      />
    );
  }
}

PasswordInput2.propTypes = {
  onChange: PropTypes.func.isRequired,
};





 
// Main Page - Sign Up
const SignUpPage = () => (
  <div>
    {/* <h1>SignUp</h1> */}
    <SignUpForm />
  </div>
);
 
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
    // Creates user
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Creates a user in Firebase realtime database
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // Redirects now signed in users to home page
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
 
  // Captures user data
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;
 
    // Invalid entries for signing up when the following
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    // Initial sign up form (will be designed later)
    return (
      <form onSubmit={this.onSubmit}
      styles={{ width: "100%", marginTop: "1rem" }}
      
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="First Name"
          name="username"
          autoComplete="name"
          onChange={this.onChange}
        />
        <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={this.onChange}
        />
           <PasswordInput2
              label="Password"
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
            />
            <PasswordInput
              label="Password"
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
            />
        <button type="submit">Sign Up</button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
 

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);
 
export default SignUpPage;
 
export { SignUpForm, SignUpLink };