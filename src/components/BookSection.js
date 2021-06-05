import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSection1 from './BookSection1.css'
import NavWebsite from './NavWebsite';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class BookSection extends React.Component {
    render() {
        return (


 <>  
          
                 <NavWebsite/>
                
            <Card style={{ width: '18rem' }} >
              <Card.Img variant="top" src="" />
           
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
             
                </Card.Text>
                <Button variant="primary" >DELETE</Button>
                <Button variant="primary">UPDATE</Button>
              </Card.Body>
            </Card>          

          </>

        )
    }
}

export default BookSection;
