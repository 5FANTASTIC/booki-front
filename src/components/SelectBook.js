import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Navbar, Image, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import SelectbookCSS from './selectbook.css';
import { withAuth0 } from '@auth0/auth0-react';
import AlertB from './Alert';
import { IconContext } from "react-icons";
import { Row, Col, Container } from 'react-bootstrap';
import { GiArchiveResearch } from "react-icons/gi";
import { RiHeartAddLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiShowAlt } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import BookModal from './BookModal'
import axios from 'axios';



class SelectBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksFavirouteData: [],
            dataHistory: [],
            showHistory: false,
            researchBarValue: '',
            showAlert: false,
            show: false,
            modalCard: [],
            showModal: false,
        }
    }
    onHide = () => {
        this.setState({
            showModal: false,
        });
    }

    researchBarContent = (event) => {
        event.preventDefault();
        //   console.log(event.target)
        let nameOfCatagory = event.target.value;
        this.setState({
            researchBarValue: nameOfCatagory

        })
        console.log(this.state.researchBarValue)

    }
    //   renderResearchBar=()=>{
    //       let researchContent={this.state.researchBarValue}
    //       this.renderCollection(this.state.researchBarValue)


    //   }


    renderCollection = async (nameCat) => {
        try {
            let collectionsName = nameCat
            let PORT = process.env.REACT_APP_PORT
            let locally = 'http://localhost:3020'
            let URL = `${PORT}/collectionsBooks?collectionsName=${collectionsName}`
            let data = await axios.get(URL);

            this.setState({
                dataHistory: data.data[0].Books,
                showHistory: true,
            })
        } catch {
            this.setState({
                show: false
            })
        }
    }
    displayModal = (item) => {

        this.setState({
            showModal: true,
            modalCard: item
        });
    }
    componentDidMount = () => {
        this.renderCollection('+subject:programming')

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
            // I used this to hold the category I need it as I have an issue in adding new object item
            publishedDate: item.categories != undefined ? item.categories[0] : 'NAN',
            description: item.description != undefined ? item.description : 'NAN',
            imageLinks: item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'NAN',
            previewLink: item.previewLink != undefined ? item.previewLink : 'NAN',
            buyLink: item.buyLink != undefined ? item.buyLink : 'NAN',
            category: item.categories != undefined ? item.categories[0] : 'NAN',

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
    /// Alert messages
    displayBookModal = (item) => {
        this.setState({
            showModal: true,
            modalCard: item,

        })
    }

    render() {
        console.log(this.props.auth0)
        return (
            <>

                <ListGroup horizontal className='catGroup'>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:history')} className='CatList'>History</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Engineering')} className='CatList'>Engineering</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:programming')} className='CatList'>Programming</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Computer')} className='CatList'>Computer Science</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Medicine')} className='CatList'>Medicine</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Literature')} className='CatList'>Literature</ListGroup.Item>
                    <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Science')} className='CatList'>Science</ListGroup.Item>
                </ListGroup>
                <Form inline className='searchForm'>
                    <div class='searchBackground'>
                        <FormControl type="text" placeholder="Search" className="mr-sm" onChange={(event) => this.researchBarContent(event)} />
                        <Button variant="light" className='searchButton' onClick={() => this.renderCollection(this.state.researchBarValue)}>
                            <IconContext.Provider
                                value={{ color: "#917624bd", size: '50', className: "global-class-name" }} >
                                <div>
                                    <GiArchiveResearch />
                                </div>
                            </IconContext.Provider>
                        </Button>
                    </div>
                    <IconContext.Provider
                        value={{ color: "#917624bd", size: '40', className: "helpIcon" }}
                    >
                        <div class='helpTool'>
                            < IoIosHelpCircleOutline />
                            <span class="tooltiptext">Click On Book, For Details</span>
                        </div>

                    </IconContext.Provider>
                </Form>

                {  this.state.showHistory &&

                    <div>


                        <Container>
                            <br />
                            <br />
                            <br />
                            <Row className='cardRow'>

                                {this.state.dataHistory.map((item, idx) => {
                                    return (
                                        <>
                                            <Col>
                                                <div class='cardButton'>
                                                    <Card className='booksPageCard' key={this.idx} style={{ width: '16rem', height: '14.3rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 5px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}
                                                        onClick={() => this.displayBookModal(item)}>
                                                        <div class="firstRow">
                                                            <Card.Img class='cardImg' variant="top" src={item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg'} />

                                                            <div class="secondCol">
                                                                <b >{item.title}</b>
                                                                <p id='container'> {item.authors} (Author)</p>
                                                            </div>

                                                        </div>
                                                        {/* <p id='container'> {item.description}</p> */}

                                                    </Card>
                                                    <ListGroup horizontal className='listBook'>
                                                        <ListGroup.Item className='listItem' variant="info">
                                                            <a target='_blank' href={item.previewLink}>
                                                                <IconContext.Provider
                                                                    value={{ color: "#917624bd", size: '44.9', className: "cardItems" }}

                                                                >
                                                                    <div class='myShowIcon'>
                                                                        <span>
                                                                            <BiShowAlt />
                                                                        </span>
                                                                    </div>
                                                                </IconContext.Provider></a>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item className='listItem' variant="info">  <a target='_blank' href={item.buyLink}>
                                                            <IconContext.Provider
                                                                value={{ color: "#917624bd", size: '44.9', className: "cardItems" }}

                                                            >
                                                                <div class='myShopIcon'>
                                                                    <span>
                                                                        <AiOutlineShoppingCart />
                                                                    </span>
                                                                </div>
                                                            </IconContext.Provider>
                                                        </a></ListGroup.Item>
                                                        <ListGroup.Item className='listItem' variant="info" onClick={() => this.addBookFavirote(item)}>  <a href={'#'}><IconContext.Provider
                                                            value={{ color: "#917624bd", size: '44.9', className: "cardItems" }}

                                                        >
                                                            <div class='myHeartIcon'>
                                                                <span>
                                                                    <RiHeartAddLine />
                                                                </span>
                                                            </div>
                                                        </IconContext.Provider></a> </ListGroup.Item>

                                                    </ListGroup>

                                                </div>

                                            </Col>


                                            <AlertB showAlert={this.state.showAlert} />

                                            <BookModal show={this.state.showModal} onHide={this.onHide} modalCard={this.state.modalCard} />

                                        </>



                                    )


                                })


                                }

                            </Row>

                        </Container>

                    </div>




                }



            </>



        )


    }




}
export default withAuth0(SelectBook)