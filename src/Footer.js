import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSection1 from './components/BookSection1.css'
class Footer extends React.Component {
  render() {
    return(
      <div class="footerpage">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>&copy; Best Books</Navbar.Brand>
     </Navbar>
      </div>
     
    )
  }
}

export default Footer;
