import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Image, NavDropdown, Nav, Form, Button, FormControl,} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';
import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton';
import { IconContext } from "react-icons";
import { IoHome } from "react-icons/io5";
import { RiBook2Fill,RiTeamFill } from "react-icons/ri";
import { MdFavorite } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


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
        <div>
          <Navbar style={{ backgroundColor: " #022e57" }}>
            <Navbar.Brand href="/"><Image src="https://i.pinimg.com/originals/fe/b4/19/feb4198b5165a9813187f73c53eea76d.png" alt='LOGO' rounded width='150' /></Navbar.Brand>

            <Nav style={{ paddingLeft: "15%" }} className="mr-auto">
              <Link class="NavBarPart" style={{ textDecoration: 'none' }} to="/">
                <IconContext.Provider
                  value={{  size: '24', className: "homeItem" }}

                >
                  <span>
                    <IoHome />
                  </span>
                </IconContext.Provider>

                Home</Link>
              {/* <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/MyFavoriteBooks">My Favourite </Nav.Link> */}



              {isAuthenticated &&
                <>
                  <Link class="NavBarPart" style={{ textDecoration: 'none' }} to="/SelectBook">
                    <IconContext.Provider
                      value={{  size: '24', className: "homeItem" }}

                    >
                      <span>
                        <RiBook2Fill />
                      </span>
                    </IconContext.Provider>
                    Books</Link>
                  <Link class="NavBarPart" style={{ textDecoration: 'none' }} to="/MyFavoriteBooks">
                  <IconContext.Provider
                  value={{ size: '24', className: "homeItem" }}

                >
                  <span>
                      <MdFavorite />
                    </span>
                </IconContext.Provider>
                     Favourite </Link>
                  <Link class="NavBarPart" style={{ textDecoration: 'none' }} to="/Profile">
                  <IconContext.Provider
                  value={{  size: '24', className: "homeItem" }}

                >
                  <span>
                      <CgProfile />
                    </span>
                </IconContext.Provider>

                    Profile</Link>

                </>
              }
              <Link class="NavBarPart" style={{ textDecoration: 'none' }} to="/AboutUs">
              <IconContext.Provider
                  value={{  size: '24', className: "homeItem" }}

                >
                  <span>
                      <RiTeamFill />
                    </span>
                </IconContext.Provider>
                About Us</Link>

            </Nav>
            






            {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Navbar>


          <br />
        </div>



      </>
    )
  }
}

export default withAuth0(Header);

