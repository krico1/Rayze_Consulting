import React from 'react';
import { withAuthorization } from '../../services/Session';
import BrandCardHeader from '../Cards';


const HomePage = () => (
  <div>
    <h1>Home</h1>
    <BrandCardHeader/>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);