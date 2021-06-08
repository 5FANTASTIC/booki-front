import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import BookSelectedCSS  from './BookDetails.css'

class BookDetails extends React.Component {
    constructor(props){
        super(props)
        this.state={
            showDetail:this.props.showBookDetailModel,
            handleClose:false

        }
    }
    handleClose=()=>{
        this.serState({
            handleClose:true

        })
    }
    

    render(){
        console.log(this.props.showBookDetailModel)
        console.log(this.state.showDetail)
        console.log(this.props.authorsBooksSuggestion)
        return(
            <div className='bookde'>
            { this.props.showBookDetailModel && 
                
                <>
                <div class='container'> 

                   <Modal.Dialog classname='detials'>
                        <Modal.Header >
                            <img src={this.props.BookModelData.imageLinks }/>
                            {this.props.BookModelData.title}
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        

                        <Modal.Body>
                        Title: {this.props.BookModelData.title}
                        </Modal.Body>
                        <Modal.Body>
                        Authors: {this.props.BookModelData.authors}
                        </Modal.Body>
                        <Modal.Body>
                        Publisher: {this.props.BookModelData.publisher}
                        </Modal.Body>
                        <Modal.Body>
                        publishedDate: {this.props.BookModelData.publishedDate}
                        </Modal.Body>
                        <Modal.Body>
                        Description: {this.props.BookModelData.description}
                        </Modal.Body>
                        <Modal.Body>
                         <a href={this.props.BookModelData.previewLink}>preview Link </a>
                        </Modal.Body>
                        <Modal.Body>
                        <a href={this.props.BookModelData.buyLink}>Buy Link</a>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                        
                    </Modal.Dialog>
                     <Form onSubmit={e=>  this.props.updateComment(e)}>
                                {/* <Form.Group>
                                    <Form.Label> Write your notes/Reviews</Form.Label>
                                    <Form.Control type="text" placeholder={this.props.BookModelData.note} onChange={e=> this.props.assignComment(e)} />
                                </Form.Group> 
                                                                  */}
                                    {/* <text type='text' value='{this.props.BookModelData.note}' maxlength='1000' contentEditable="true" /> */}
                                    <textarea  onChange={e=> this.props.assignComment(e)}>{this.props.BookModelData.note}</textarea>
                                    {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder={this.props.BookModelData.note} />
                                    </Form.Group> */}

                                <Button variant="primary" type="submit"  >
                                    Submit
                                </Button>

                            </Form>
                </div>    
{/*                     
                    <Carousel classname='Carousel'>
                        {
                            this.props.authorsBooksSuggestion.map(item=>{

                                return(
                                    

                                    <Carousel.Item class='carouselItems'>
                                       
                                        <img width='150'  src={ item['imageLinks'] != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg'} alt="Cover Book"/>
                                        <Carousel.Caption>
                                        { <h3>{item.title}</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                        
                                    

                                )
                            }


                            )
                        }
                        </Carousel> */} 
                    


    
                </>
            }
            </div>

        )
    }
    


}

export default BookDetails