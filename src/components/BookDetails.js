import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Card, ListGroup } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import BookSelectedCSS from './BookDetails.css';

class BookDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDetail: this.props.showBookDetailModel,
            handleClose: false

        }
    }
    handleClose = () => {
        this.serState({
            handleClose: true

        })
    }

    addBookFavirote = async (item) => {
        let email = this.props.auth0.user.email
        let PORT = process.env.REACT_APP_PORT
        let locally = 'http://localhost:3020'
        let URL = `${PORT}/addBook`
        console.log(item)

        const formData = {
            email: this.props.auth0.user.email,
            title: item.title != undefined ? item.title : 'NAN',
            authors: item.authors != undefined ? item.authors[0] : 'NAN',
            publisher: item.publisher != undefined ? item.publisher : 'NAN',
            publishedDate: item.publishedDate != undefined ? item.categories[0] : 'NAN',
            description: item.description != undefined ? item.description : 'NAN',
            imageLinks: item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'NAN',
            previewLink: item.previewLink != undefined ? item.previewLink : 'NAN',
            buyLink: item.buyLink != undefined ? item.buyLink : 'NAN',

        }
        console.log(formData)

        let x = await axios.post(URL, formData);
        // ADD ALERT HERE LATER ON TO INFORM THE USER OF SUCESSFULL ADDING THE BOOK TO FAVIROUE 
        // console.log(x)
        this.setState({
            booksFavirouteData: x.data,
            showAlert: true,
            //   show: true,
            //   showAddModel: false,
        })
        console.log(this.state.booksFavirouteData)
        console.log(this.state.showAlert)

    }

    render() {
        console.log(this.props.showBookDetailModel)
        console.log(this.state.showDetail)
        console.log(this.props.authorsBooksSuggestion)
        return (
            <>
                { this.props.showBookDetailModel &&

                    <>

                        <div class='container1'>

                            <div class='detials' >
                                <Modal.Header >
                                    <img src={this.props.BookModelData.imageLinks} />
                                    <Form onSubmit={e => this.props.updateComment(e)}>

                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" cols='70' onChange={e => this.props.assignComment(e)}>{this.props.BookModelData.note}</textarea>
                                        <Button className='buttonC' type="submit"  >  Save   </Button>

                                    </Form>
                                </Modal.Header>


                                <Modal.Body className='unit'>
                                    <span class='boltFont'>Title: </span> {this.props.BookModelData.title}
                                </Modal.Body>
                                <Modal.Body className='unit'>
                                    <span class='boltFont'> Authors: </span> {this.props.BookModelData.authors}
                                </Modal.Body>
                                <Modal.Body className='unit'>
                                    <span class='boltFont'> Publisher: </span>  {this.props.BookModelData.publisher}
                                </Modal.Body>
                                <Modal.Body className='unit'>
                                    <span class='boltFont'> Category: </span> {this.props.BookModelData.publishedDate}
                                </Modal.Body>
                                <Modal.Body className='unit'>
                                    <span class='boltFont'> Description: </span> {this.props.BookModelData.description}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className='buttonC' ><a href={this.props.BookModelData.previewLink}>Preview</a> </Button>
                                    <Button className='buttonC' ><a href={this.props.BookModelData.buyLink}>Buy </a> </Button>
                                    <Button className='buttonC' onClick={() => this.props.closeDetail()}>Back </Button>
                                </Modal.Footer>

                            </div>
                            <div class='conatiner2'>


                                {this.props.showAutherbook &&
                                    <>
                                        <h3> Author's other works</h3>

                                        <Carousel className='Carousel' >
                                            {
                                                this.props.authorsBooksSuggestion.map(item => {

                                                    return (


                                                        <Carousel.Item className='carouselItems'>

                                                            <Col >
                                                                <Card className='moreBooksCard' key={this.idx} style={{ height: '21em', width: '17rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 5px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                                                                    <div><center>
                                                                        <Card.Img style={{marginBottom:'1em'}} class='cardImg' variant="top" src={item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg'} />
                                                                    </center>
                                                                        <h4><center>{item.title}</center></h4>
                                                                        <p id='container'> {item.authors}(Author)</p>
                                                                        
                                                                        {/* <p id='container'> {item.description}</p> */}
                                                                    </div>
                                                                </Card>
                                                                <ListGroup horizontal className='listDetailBook'>
                                                                            <ListGroup.Item className='listItem' variant="info">  <a href={item.previewLink}> Preview</a></ListGroup.Item>
                                                                            <ListGroup.Item className='listItem' variant="info">  <a href={item.buyLink}> Buy</a></ListGroup.Item>
                                                                            <ListGroup.Item className='listItem' variant="info" onClick={() => this.addBookFavirote(item)}>  <a href={'#'}>Add</a> </ListGroup.Item>
                                                                        </ListGroup>
                                                            </Col>



                                                        </Carousel.Item>





                                                    )
                                                }


                                                )
                                            }
                                        </Carousel>
                                        <br />
                                        <br />
                                    </>
                                }
                                <h3> Related Books</h3>

                                <Carousel className='Carousel'>
                                    {
                                        this.props.relatedBooks.map(item => {

                                            return (


                                                <Carousel.Item className='carouselItems'>

                                                    <Col >
                                                        <Card className='moreBooksCard' key={this.idx} style={{ height: '21em', width: '17rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 5px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                                                            <div>
                                                                <center>
                                                                    <Card.Img style={{marginBottom:'1em'}}class='cardImg' variant="top" src={item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg'} />
                                                                </center>
                                                                <h4><center>{item.title}</center></h4>
                                                                <p id='container'> {item.authors}(Author)</p>
                                                               
                                                                {/* <p id='container'> {item.description}</p> */}
                                                            </div>
                                                           
                                                        </Card>
                                                        <ListGroup horizontal className='listDetailBook'>
                                                                    <ListGroup.Item className='listItem' variant="info">  <a href={item.previewLink}> Preview</a></ListGroup.Item>
                                                                    <ListGroup.Item className='listItem' variant="info">  <a href={item.buyLink}> Buy</a></ListGroup.Item>
                                                                    <ListGroup.Item className='listItem' variant="info" onClick={() => this.addBookFavirote(item)}>  <a href={'#'}>Add</a> </ListGroup.Item>
                                                                </ListGroup>
                                                    </Col>



                                                </Carousel.Item>





                                            )
                                        }


                                        )
                                    }
                                </Carousel>
                            </div>



                        </div>

                        <br />
                        <br />


                    </>
                }
            </>

        )
    }



}

export default withAuth0(BookDetails)