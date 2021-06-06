import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './login.css';
import LoginButton from './components/LoginButton.js';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';
import BookSelected1 from './components/BookSelected.css'
import NavWebsite from './components/NavWebsite';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class FirstPage extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (

      <>
        {/* If user Login the navbar will show */}
        <>
          { isAuthenticated && (
            <NavWebsite />
          )}
        </>

        {/* slide Img for first page */}
        <>
          <div class="CarouselHome">
            <Carousel style={{ width: '100%', height:'100%' }}
            >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80"
                  alt="First slide"
                  width="100"
                  height="400"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1441&q=80"
                  alt="Third slide"
                  width="100"
                  height="400"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=785&q=80"
                  alt="First slide"
                  width="100"
                  height="400"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>


          <div class="PartAboutus">

            <Jumbotron fluid >
              <Container>
                <Row>
                  <Col>
                    <h1>Fluid jumbotron</h1>
                    <p>
                      This is a modified jumbotron that occupies the entire horizontal space of
                      its parent.
                  </p>
                  </Col>

                  <Col>
                    <Image src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/4b/40/0d/4b400df2-a297-fc95-2fe8-aedca602e3e6/source/512x512bb.jpg" thumbnail />
                  </Col> </Row>
              </Container>
            </Jumbotron>

          </div>
          <section class="service">
            <div class="services-box">
              <div class="box">
                <h2>01</h2>
                <h3>Service One</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aspernatur ut, voluptas dignissimos! Dignissimos tenetur, sunt quasi necessitatibus labore nemo possimus eos est fuga tempore corporis, culpa ipsam magni quibusdam.</p>
              </div>
              <div class="box">
                <h2>02</h2>
                <h3>Service Two</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aspernatur ut, voluptas dignissimos! Dignissimos tenetur, sunt quasi necessitatibus labore nemo possimus eos est fuga tempore corporis, culpa ipsam magni quibusdam.</p>
              </div>
              <div class="box">
                <h2>03</h2>
                <h3>Service Three</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aspernatur ut, voluptas dignissimos! Dignissimos tenetur, sunt quasi necessitatibus labore nemo possimus eos est fuga tempore corporis, culpa ipsam magni quibusdam.</p>
              </div>
            </div>
          </section>
        </>

      </>
    )
  }
}

export default withAuth0(FirstPage);
