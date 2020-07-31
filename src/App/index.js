import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { withFirebase } from '../services/Firebase';
import { AuthUserContext } from '../services/Session';


import Navigation from '../components/Navigation';
import LandingPage from '../components/Landing';
import SignUpPage from '../pages/RegisterPages/SignUp';
import SignInPage from '../pages/RegisterPages/SignIn';
import PasswordForgetPage from '../components/PasswordForget';
import HomePage from '../pages/Home';
import AccountPage from '../pages/Account';
// import AdminPage from '../Admin';
 
import * as ROUTES from '../constants/routes';
 
import { withAuthentication } from '../services/Session';

const App = () => (
  <Router>
    <div>
      <Navigation />
 
      <hr />
 
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </div>
  </Router>
);
 
export default withAuthentication(App);
