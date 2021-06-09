import React from 'react';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { Row, Col, Container } from 'react-bootstrap';

import Button from "react-bootstrap/Button";
class BookModal extends React.Component {

  onHide = () => {
    this.props.onHide()
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.onHide} animation={true}>
        <ModalHeader closeButton>
          <ModalTitle>{this.props.modalCard.title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Container>
            <Row>
              <Card style={{ width: '29rem', height: '25rem' }}>
                <Card.Body>
                  <Col>
                  <Card.Text className='modalCardText'>
                    {this.props.modalCard.description}
                  </Card.Text>
                  </Col>
                </Card.Body>
              </Card>
            </Row>
            </Container>
        </ModalBody>
            <ModalFooter>
              <Button variant="secondary" onClick={this.onHide}>
                Close
              </Button>
            </ModalFooter>
      </Modal>
    );
  }

}
export default BookModal;