import React from 'react';
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSelected1 from './BookSelected.css'
import NavWebsite from './NavWebsite';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// change the name to faviroue book 
class BookSelected extends React.Component {
  render() {
    return (
      
      <>



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

export default BookSelected;
