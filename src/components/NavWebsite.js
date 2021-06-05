import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSection1 from './BookSection1.css'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

class NavWebsite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
    
          show: false,
          
        }
      }
    
       

    showNav = () => {
     let x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
            
        } else {
            x.style.display = "none";
        }
      }
      
    render() {
        return (

            <>
                
                    <Nav class="nav1" defaultActiveKey="/home" className="flex-column">
                        <Nav.Link href="/home">Main</Nav.Link>
                        <Nav.Link href="/home">Book Section</Nav.Link>
                        <Nav.Link  onClick={this.showNav}>Profile ᐁ</Nav.Link>
                        <div id="myDIV" style={{display:'none'}}>
                        <Nav.Link href="/home">Info</Nav.Link>
                        <Nav.Link href="/home">My favorite book</Nav.Link>
                        </div>
                        <Nav.Link href="/home">About us</Nav.Link>
                    </Nav>

            


            </>
        )
    }
}

export default NavWebsite;
