import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';

import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile';
import BookSection from './components/BookSection';
import AboutUs from './components/AboutUs'


class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;


    return(
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Booki</Navbar.Brand>
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
     </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);
