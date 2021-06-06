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
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  updateShow = () => {
    this.setState({
      show: true
    })
  }

  render() {
    const { user, isAuthenticated } = this.props.auth0;


    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"><Image src="https://i.pinimg.com/originals/fe/b4/19/feb4198b5165a9813187f73c53eea76d.png" alt='LOGO' rounded width='150' /></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/FirstPage">Home</Nav.Link>
            {/* <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/MyFavoriteBooks">My Favourite </Nav.Link> */}


            <Nav.Link href="/BookSelected"> Selected Book</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>


            {
              isAuthenticated &&
              <>
                <Nav.Link href="/Profile">Profile</Nav.Link>
                <Nav.Link href="/MyFavoriteBooks">My Favourite </Nav.Link>

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
