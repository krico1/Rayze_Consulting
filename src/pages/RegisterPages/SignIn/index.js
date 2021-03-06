import React, { Component } from 'react';
import PropTypes from "prop-types";
import RayzeLogo from "../../../img/RayzeLogo.png";

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../../PasswordForget';
import { withFirebase } from '../../../services/Firebase';
import * as ROUTES from '../../../constants/routes';
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
 

export class PasswordInput extends Component {
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
          startAdornment: <LockIcon style={{ marginRight: "1rem" }} />,
        }}
      />
    );
  }
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  // value: PropTypes.func.isRequired,
};

// Styles for form
const useStyles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formIcon: {
    marginRight: "1rem",
  },
  linkText: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  linkTextBigScreen: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline",
      color: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  linkTextSmallScreen: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  errorText: {
    color: "red",
    marginTop: "1rem",
  },
  logo: {
    width: "21rem",
  },
});

const SignInPage = () => (
 <div>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
    </div>

);


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
    this.state = {
      pw: "",
    };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangePW = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
 
  render() {
    const { classes } = this.props;
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
 
    return (
     
      <Container maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <img src={RayzeLogo} className = {classes.logo} alt="Logo" /> 
        
          <form onSubmit={this.onSubmit} classeName={classes.form} noValidate>
          <TextField
          variant = "outlined"
          margin="normal"
          fullWidth
          name="email"
          label="Email Address"
          onChange={this.onChange}
          />
           <PasswordInput
                label="Password"
                name="password"
                value={password}
                onChange={this.onChangePW}
              />
        {error && <p>{error.message}</p>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          classes={classes.submit}
          disabled={isInvalid}
          >
            Sign In
          </Button>
          </form>
          </div>
        </Container>

    );
  }
}
// export {PasswordInput};
 
const SignInFormStyled = withStyles(useStyles)(SignInFormBase);

const SignInForm = compose(withRouter, withFirebase)(SignInFormStyled);

export default SignInPage;
 
export { SignInForm };