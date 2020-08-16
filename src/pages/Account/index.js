import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../../services/Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../RegisterPages/PasswordChange';
import SignOutButton from "../RegisterPages/SignOut";
 
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>email: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <SignOutButton />

      </div>
    )}
  </AuthUserContext.Consumer>
);
 
// Protects Account Page for authenticated users only
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);