import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Image, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';

import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton'
import Profile from './components/Info';
import BookSelected from './components/BookSelected';
import AboutUs from './components/AboutUs'


class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;


    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"><Image src="https://i.pinimg.com/originals/fe/b4/19/feb4198b5165a9813187f73c53eea76d.png" alt='LOGO' rounded width='150' /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Profile</Nav.Link>
            {/* <NavDropdown title="Selected Books" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="./components/BookSelected.js">Selected Books</Nav.Link>
            <Nav.Link href="#home">About us</Nav.Link>
            {
              this.props.isAuthenticated &&
              <>
                <Nav.Link href="#home">My Favourite Books</Nav.Link>
                <Nav.Link href="#home">Profile</Nav.Link>

              </>
            }
        
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar>
        <br />

      </>
    )
  }
}

export default withAuth0(Header);
