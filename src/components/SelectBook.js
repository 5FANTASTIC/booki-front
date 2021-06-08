import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Navbar, Image, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import SelectbookCSS from './selectbook.css';
import { withAuth0 } from '@auth0/auth0-react';
import AlertB from './Alert';
import { IconContext } from "react-icons";
import {Row, Col,Container } from 'react-bootstrap';
import { GiArchiveResearch } from "react-icons/gi";
// import {FcSearch}  from "react-icons/fc";

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

        }

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
                showHistory: true
            })
        } catch {
            this.setState({
                show: false
            })
        }
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
            publishedDate: item.publishedDate != undefined ? item.publishedDate : 'NAN',
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
    /// Alert messages


    render() {
        console.log(this.props.auth0)
        return (
            <>
                <div className='buttons'>


                    <ListGroup horizontal>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:history')} className='CatList'>History</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Engineering')} className='CatList'>Engineering</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:programming')} className='CatList'>Programming</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Computer')} className='CatList'>Computer Science</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Medicine')} className='CatList'>Medicine</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Literature')} className='CatList'>Literature</ListGroup.Item>
                        <ListGroup.Item variant="info" onClick={() => this.renderCollection('+subject:Science')} className='CatList'>Science</ListGroup.Item>
                    </ListGroup>

                    <Form inline className='searchForm'>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => this.researchBarContent(event)} />

                        <IconContext.Provider onClick={() => this.renderCollection(this.state.researchBarValue)}
                            value={{ color: "#917624bd", size: '50', className: "global-class-name" }}>
                            <div>
                                <GiArchiveResearch />
                            </div>
                        </IconContext.Provider>
                        {/* <p onClick={() => this.renderCollection(this.state.researchBarValue)} ><GiArchiveResearch className='iconSearch' size={60} value={{ color: 'blue' }}></GiArchiveResearch></p> */}
                    </Form>
                </div>
                {  this.state.showHistory &&

                    <div classname='renderBooks'>
                        
                        <Container>
                                        <br />
                                        <br />
                                        <br />
                                        <Row>
                        {this.state.dataHistory.map((item, idx) => {
                            return (
                                <>



                                            <Col >
                                                <Card className='mycard' key={this.idx} style={{ width: '18rem', background: 'linear-gradient(#D9C68F, #5C6087)', boxShadow: '0 5px 8px 0 #6D77CF, 0 6px 20px 0 #6D77CF' }}>
                                                    <div>
                                                        <Card.Img class='cardImg' variant="top" src={item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg'} />
                                                        <h4><center>{item.title}</center></h4>
                                                        <p id='container'> {item.authors}(Author)</p>
                                                        <ListGroup horizontal className='listBook'>
                                                            <ListGroup.Item className='listItem' variant="info">  <a href={item.previewLink}> Preview</a></ListGroup.Item>
                                                            <ListGroup.Item className='listItem' variant="info">  <a href={item.buyLink}> Buy</a></ListGroup.Item>
                                                            <ListGroup.Item className='listItem' variant="info" onClick={() => this.addBookFavirote(item)}>  <a href={'#'}>Add</a> </ListGroup.Item>
                                                        </ListGroup>
                                                        {/* <p id='container'> {item.description}</p> */}
                                                    </div>
                                                </Card>
                                            </Col>
                                        

                                    <AlertB showAlert={this.state.showAlert} />



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