import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { SocialIcon } from 'react-social-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutUs1 from './AboutUs1.css'


class AboutUs extends React.Component {
  render() {
    return (
      <>
        <body>

          <Container>
             <center><h3 class='AboutUsH3'>Our Team </h3></center>                                                   
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 5px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/80678655?v=4"  rounded/> */}
                  <Image src="https://avatars.githubusercontent.com/u/80678655?v=4" rounded />
                  <Card.Body>
                    <Card.Title><b><center>Zainab Alawneh</center></b></Card.Title>
                    <Card.Text>
                      My name is Zainab Alawneh, I studied computer science at the Hashemite University and love everything related to programming.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '5%' }}>
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://github.com/zienabalawneh" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.linkedin.com/in/zienabalawneh/" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://web.facebook.com/profile.php?id=100012007565206" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 4px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81591980?v=4" /> */}
                  <Image src="https://avatars.githubusercontent.com/u/81591980?v=4" rounded />
                  <Card.Body>
                    <Card.Title> <b><center>Amara Al Balkhi</center></b></Card.Title>
                    <Card.Text class='text'>
                      I am Amara and I graduated as a chemical engineer from the university of jordan I look forward to learn programming as much as I can.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '5%' }}>
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://github.com/Amara002" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.linkedin.com/in/amara-albakhi-ba819a190/" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.facebook.com/profile.php?id=100005598093632" />
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 4px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/81561894?v=4" /> */}
                  <Image src="https://avatars.githubusercontent.com/u/81561894?v=4" rounded />
                  <Card.Body>
                    <Card.Title><b><center>Ahmad Alsayed</center></b> </Card.Title>
                    <Card.Text>
                      I hold a BSc degree in civil engineering. I seek to advance my programming skills hoping to get a career position at the place that I can achieve fulfillment.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '5%' }}>
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://github.com/Ahmad-A92-3" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.linkedin.com/in/zienabalawneh/" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://web.facebook.com/profile.php?id=100012007565206" />
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 4px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/64347254?v=4" /> */}
                  <Image src="https://avatars.githubusercontent.com/u/64347254?v=4" rounded />
                  <Card.Body>
                    <Card.Title><b><center>Noor Hajbi</center></b></Card.Title>
                    <Card.Text>
                      A Computer Science Fresh Graduate, Passionate About Coding. I Hope To Become Full Stack Web Developer.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '5%' }}>
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://github.com/NoorHajbi" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.linkedin.com/in/noor-hajbi-9b53511a5/" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://web.facebook.com/noor.hajbi/" />
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 4px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/64347254?v=4" /> */}
                  <Image src="https://i.pinimg.com/originals/fe/b4/19/feb4198b5165a9813187f73c53eea76d.png" rounded />
                  <Card.Body>
                    <Card.Title><b><center>Fantastic 5</center></b></Card.Title>
                    <Card.Text>
                      <b>Booki.com</b> is an online bookstore, We believe that bookstores are essential to a healthy culture, As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '30%' }}>
                      <SocialIcon style={{ marginLeft: '10%' }} url="https://github.com/5FANTASTIC" />

                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card className='cardAboutUs' style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 4px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                  {/* <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/76748321?v=4" /> */}
                  <Image src="https://avatars.githubusercontent.com/u/76748321?v=4" rounded />
                  <Card.Body>
                    <Card.Title><b><center>Alaa Al-Abbas</center></b></Card.Title>
                    <Card.Text>
                      My Name is Alaa Al-Abbas, I studied software engineering, I'm taking programming courses to Become Full Stack Web Developer.
            </Card.Text>
                    <Card.Text style={{ marginLeft: '5%' }}>
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://github.com/alaa281997" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.linkedin.com/in/alaa-al-abbas-77045417a/" />
                      <SocialIcon style={{ marginLeft: '5%' }} url="https://www.facebook.com/alaa.abbas.54/" />
                    </Card.Text>

                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
          </Container>

        </body>
      </>

    )
  }
}

export default AboutUs;