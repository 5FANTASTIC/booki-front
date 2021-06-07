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
import { FcAddressBook, FcOk, FcFinePrint } from "react-icons/fc";


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
          <body>
            <div class="CarouselHome">
              <Carousel style={{ width: '100%', height: '100%' }}>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1453&q=80"
                    alt="First slide"
                    width="100"
                    height="700"
                  />
                  <Carousel.Caption>
                    <h3 class="firstH3">BOOKI</h3>

                  </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1567168544230-d5a9401299a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="Third slide"
                    width="100"
                    height="700"
                  />
                  {/* <Carousel.Caption>
                    <p class="firstP">A book is like a garden,<br /> carried in the pocket</p>
                  </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1530538987395-032d1800fdd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                    alt="First slide"
                    width="100"
                    height="700"
                  />
                  {/* <Carousel.Caption>
                    <p class="firstP">Books and friends should be few but good</p>
                  </Carousel.Caption> */}
                </Carousel.Item>


                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1522100566122-761ddcf1db3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80https://images.unsplash.com/photo-1522100566122-761ddcf1db3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
                    alt="First slide"
                    width="100"
                    height="700"
                  />
                  {/* <Carousel.Caption>

                    <p class="firstP" style={{ fontSize: '90px' }}> If a fool borrows a book cut off his hand; but cut off both hands of the fool who brings it</p>
                  </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1556885673-252a5231cac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt="First slide"
                    width="100"
                    height="700"
                  />
                  {/* <Carousel.Caption>
                    <p class="firstP" style={{ marginTop: '-1000' }}>we eat to feed our body, we  read to feed our brain</p>
                  </Carousel.Caption> */}
                </Carousel.Item>
              </Carousel>

            </div>
         
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <div class="PartAboutus">

              <Jumbotron fluid >
                <Container>
                  
                  <Row>
                    <Col>
                      <h1 style={{ color: '#917524', textAlign: 'center', textShadow: '2px 4px #293b5f' }}>BOOKI</h1> 
                      <h2  style={{ color: '#917524', textAlign: 'center',fontFamily:'serif'  }}> A book is like a garden,<br /> carried in the pocket</h2>
                      <p style={{ color: '#293b5f', textAlign: 'justify', fontSize: '20px', textIndent: '20px', lineHeight: '1.8', letterSpacing: '0.5px',fontFamily:'serif'  }}>
                        A book is a medium for recording information in the form of writing or images.
                        But with the advancement of technology, reading on paper has become less and less common and a new term has entered our lives, which is electronic book, also known as an e-book or eBook, is a book publication made available in digital form, consisting of text, images, or both, readable on the flat-panel display of computers or other electronic devices.
                        Our website is your library to search about any book you need from any category, you can have your own ebooks and read them any time you need using your account.
                        So, don't forget joining us, you are very welcome.
                  </p>
                    </Col>
                    {/* https://img.pngio.com/open-old-book-transparent-png-stickpng-books-no-background-2650_1987.png */}

                    <Col>
                      <Image src="https://images.unsplash.com/photo-1529590003495-b2646e2718bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80" thumbnail />
                    </Col>
                  </Row>
                </Container>
              </Jumbotron>

            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <h2  style={{ color: '#917524', textAlign: 'center',marginBottom:'-65px',fontWeight:'bolder',fontSize:'38px',fontFamily:'serif',opacity:'0.9' }}>Our Services </h2>
            <section class="service">
              <div class="services-box">
                <div class="box">
                  <h2><FcAddressBook></FcAddressBook></h2>
                  <h3 style={{ color: '#917524', textAlign: 'center',fontWeight:'bolder',fontFamily:'serif',opacity:'0.9' }}>Service </h3>
                  <p>You can search about any book you need from any category, such as Engineering, Computer, Maths, etc..</p>
                </div>

                <div class="box">
                  <h2><FcFinePrint></FcFinePrint></h2>
                  <h3 style={{ color: '#917524', textAlign: 'center',fontWeight:'bolder',fontFamily:'serif',opacity:'0.9' }}>More features</h3>
                  <p>You just need to join us by creating a new account so that you can get benefit from our features by having your own books in your library for an unlimited period and create notes .</p>
                </div>

                <div class="box">
                  <h2><FcOk></FcOk></h2>
                  <h3 style={{ color: '#917524', textAlign: 'center',fontWeight:'bolder',fontFamily:'serif',opacity:'0.9' }}>For free</h3>
                  <p>You can get a preview of any book with all categories Books on different topics for free.</p>
                </div>
              </div>
            </section>
          </body>
        </>

      </>
    )
  }
}

export default withAuth0(FirstPage);
