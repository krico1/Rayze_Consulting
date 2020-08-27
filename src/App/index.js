import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import { withFirebase } from '../services/Firebase';
// import { AuthUserContext } from '../services/Session';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../components/MUITheme/theme.js';
import ProgressCircle from "../components/ProgressCircle";

import Header from "../components/Header";
import { HomeHeader, SignInHeader, SignUpHeader, InfoHeader, AccountHeader } from "../components/Header";

// import AdminPage from '../Admin';

import * as ROUTES from '../constants/routes';

import { withAuthentication } from '../services/Session';

const Navigation = lazy(() => import('../components/Navigation'));
const LandingPage = lazy(() => import('../components/Landing'));
const SignUpPage = lazy(() => import('../pages/RegisterPages/SignUp'));
const SignInPage = lazy(() => import('../pages/RegisterPages/SignIn'));
const PasswordForgetPage = lazy(() => import('../pages/PasswordForget'));
const HomePage = lazy(() => import('../pages/Home'));
const AccountPage = lazy(() => import('../pages/Account'));
const InfoPage = lazy(() => import('../pages/Info'));

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/account"
            component={AccountHeader}
          />
          <Route
            exact
            path="/home"
            component={HomeHeader}
          />
          <Route
            exact
            path="/info"
            component={InfoHeader}
          />
          <Route
            exact
            path="/landing"
            component={Header}
          />
          <Route
            exact
            path="/signin"
            component={SignInHeader}
          />
          <Route
            exact
            path="/signout"
            component={SignUpHeader}
          />
        </Switch>
       
        
        <Navigation />

    
      
          <Suspense
            fallback={
              <ProgressCircle />
            }>
              <Switch>

                 
              <Route exact path={ROUTES.LANDING} component={LandingPage} />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              <Route path={ROUTES.SIGN_IN} component={SignInPage} />
              <Route
                path={ROUTES.PASSWORD_FORGET}
                component={PasswordForgetPage}
              />
              <Route path={ROUTES.HOME} component={HomePage} />
              <Route path={ROUTES.ACCOUNT} component={AccountPage} />
              <Route path={ROUTES.INFO} component={InfoPage} />
              </Switch>
          </Suspense>


      
          
      </div>
    </Router>
  </ThemeProvider>

);

export default withAuthentication(App);
