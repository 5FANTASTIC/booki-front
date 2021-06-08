import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import myFavoriteBooks from './myFavoriteBooks.css';
import BookFormModal from './components/BookFormModal.js';
import UpdateBookForm from './components/UpdateBookForm.js';
import BookDetails from './components/BookDetails.js';
import Table from 'react-bootstrap/Table'



class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bookData: [],
      show: false,
      showAddModel: false,
      imageURL: '',
      bookName: '',
      description: '',
      updateFormShow: false,
      index: 0,
      valuesBeforeUpdateArray: [],
      showBookDetailModel:false,
      BookModelData:[],
      authorsBooksSuggestion:[],
      showAutherbook:false,
      comment:'',
      nameCat:'',
      relatedBooks:[],

    }

  }


  componentDidMount = async () => {
    try {
      let email = this.props.auth0.user.email
      let PORT = process.env.REACT_APP_PORT
      let locally = 'http://localhost:3020'
      let URL = `${PORT}/mybooks?email=${email}`
      let data = await axios.get(URL);
      if (data.data.length > 0) {
        this.setState({
          bookData: data.data,
          show: true
        })
        console.log(this.state.bookData)
      }

    } catch {
      this.setState({
        show: false
      })
    }
  }
  
  // show the remaining details

  showRemainDetails=(item,idx)=>{
    console.log(item)
    this.suggestAuthorsBooks(item);
    this.suggestMoreRelatedBooks(item.publishedDate)
    console.log(this.state.authorsBooksSuggestion)
    this.setState({
      showBookDetailModel:true,
      BookModelData:item,
      index:idx,
      nameCat:item.publishedDate,
      
      
    })
    console.log(this.state.BookModelData)
    console.log(this.state.showBookDetailModel)

  }
  // close the details munue once complete 
  closeDetail=e=>{
    this.setState({
      showBookDetailModel:false,


    })
    console.log('afterclick',this.state.showBookDetailModel)
  }
  // suggest more for auther 

  suggestAuthorsBooks=(item)=>{
    if(item.authors !='NAN'){
      this.setState({
        showAutherbook:true,
      })
    }
    let authersList=item.authors.split(',')
    console.log(authersList)
    let category='Engineering'
    let PORT = process.env.REACT_APP_PORT
    let locally = 'http://localhost:3020'
    let allAuthorsBooks=[];
    let promises=[];
    for(let i=0;i<authersList.length;i++){
      promises.push(           
              axios.get(`http://localhost:3020/autherpublications?author=${authersList[i]}`).then(result=>{
   
                  allAuthorsBooks.push(... result.data)
                  // console.log(collectionsData)        
              }        
              )   
      )
   }
   Promise.all(promises).then(() => {
     this.setState({
      authorsBooksSuggestion:allAuthorsBooks
     })
   });   

 };
 // suggest on same topic 
  suggestMoreRelatedBooks = async (nameCat) => {
    try {
        let collectionsName = nameCat
        let PORT = process.env.REACT_APP_PORT
        let locally = 'http://localhost:3020'
        console.log(collectionsName)
        let URL = `${PORT}/collectionsBooks?collectionsName=+subject:${collectionsName}`
        let data = await axios.get(URL);

        this.setState({
            relatedBooks: data.data[0].Books,
        })
        console.log(this.state.relatedBooks)
    } catch {
        console.log('I  have aproblem in suggestMoreRelatedBooks function ')
    }
 }

  // lab 013 functions forms+add Data to dataBase 
  // present the form 
  addform = e => {
    e.preventDefault();

    this.setState({
      showAddModel: true,
    })
    console.log('showAddModel', this.state.showAddModel)

  }
  // send to Backend to add the new comments/notes change 
  assignComment=(e)=>{
    e.preventDefault();
    this.setState({
      comment: e.target.value

    })
  } 

  // addToDataBase = async (event) => {
  //   event.preventDefault();
  //   let email = this.props.auth0.user.email
  //   let PORT = process.env.REACT_APP_PORT
  //   let locally = 'http://localhost:3020'
  //   let URL = `${PORT}/addBook`

  //   const formData = {
  //     email: this.props.auth0.user.email,
  //     imageURL: this.state.imageURL,
  //     bookName: this.state.bookName,
  //     description: this.state.description,
  //   }

  //   let x = await axios.post(URL, formData);
  //   console.log(x)
  //   this.setState({
  //     bookData: x.data,
  //     show: true,
  //     showAddModel: false,
  //   })

  // }

  // onchange 
  ImageURL = e => {
    e.preventDefault();
    let imageURLTarget = e.target.value
    this.setState({
      imageURL: imageURLTarget

    })
    console.log(this.state.imageURL)
  }
  Description = e => {
    e.preventDefault();
    let descriptionTarget = e.target.value
    this.setState({
      description: descriptionTarget

    })

  }

  BookName = e => {
    e.preventDefault();
    this.setState({
      bookName: e.target.value

    })
    console.log(this.state.bookName)

  }

  // lab 013 delete REST
  remove = async (index) => {
    let email = this.props.auth0.user.email
    let PORT = process.env.REACT_APP_PORT
    let locally = 'http://localhost:3020'
    let URL = `${PORT}/deleteBook`
    const details = {
      email: this.props.auth0.user.email,
      index: index
    }


    let bookDataAfterDelete = await axios.delete(URL, { params: details })
    this.setState({
      bookData: bookDataAfterDelete.data
    })

  }
  // lab 14 create the update button 
  update = (idx) => {
    const valuesBeforeUpdate = this.state.bookData.filter((i, index) => idx == index);
    this.setState({
      updateFormShow: true,
      valuesBeforeUpdateArray: valuesBeforeUpdate,
      index: idx
    })


  }

  updateComment = async e => {
    e.preventDefault();

    let PORT = process.env.REACT_APP_PORT;
    let locally = 'http://localhost:3020';
    let index = this.state.index;
    let URL = `${PORT}/updateComment/${index}`;
    
    const details = {
      email: this.props.auth0.user.email,
      title:this.state.bookData[this.state.index].title,
      authors: this.state.bookData[this.state.index].authors,
      description: this.state.bookData[this.state.index].description,
      publisher: this.state.bookData[this.state.index].publisher,
      publishedDate: this.state.bookData[this.state.index].publishedDate,
      imageLinks: this.state.bookData[this.state.index].imageLinks,
      previewLink: this.state.bookData[this.state.index].previewLink,
      buyLink: this.state.bookData[this.state.index].buyLink,
      note:this.state.comment,
    }

    console.log(details)

    let mongoData = await axios.put(URL, details);
    // const bookDataAfterUpdate=this.state.bookData.splice(this.state.index,1,mongoData.data)
    this.setState({
      bookData: mongoData.data,
      updateFormShow: false,


    })
    console.log(this.state.bookData)

  }


  render() {
    const { user, isAuthenticated } = this.props.auth0;
    console.log(isAuthenticated);
    console.log(this.state.bookData);
    // this.componentDidMount();
    
    return (
      <>  
        <div class='books'>
          {
            ! this.state.showBookDetailModel &&
            <>

              <Table striped bordered hover variant="dark" className='table'>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Book</th>
                      <th>Title</th>
                      <th>Authors</th>
                      <th>Delete</th>
                      <th>Details</th>
                      <th>My Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.state.bookData.map((item,index)=>{
                    return(
                      <>
                        <tr>
                          <td>{index+1}</td>
                          <td><a href={item.previewLink}><img  height='100' src={item.imageLinks != 'NAN' ? item.imageLinks : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg' } alt='Book'/> </a></td>
                          <td>{item.title}</td>
                          <td>{item.authors}</td>
                          <td><Button className='buttonC' onClick={() => this.remove(index)}>Delete</Button></td>
                          <td><Button className='buttonC' onClick={() => this.showRemainDetails(item,index)}>Details</Button></td>
                          <td class='notes'>{item.note}</td>
                        </tr>

                      </>

                    )
                  })}

                  </tbody>
              </Table>
            </>
          }
          
        </div> 
        {
            this.state.showBookDetailModel && 

            <BookDetails showBookDetailModel={this.state.showBookDetailModel} BookModelData={this.state.BookModelData} showAutherbook={this.state.showAutherbook} authorsBooksSuggestion={this.state.authorsBooksSuggestion} updateComment={this.updateComment} assignComment={this.assignComment} closeDetail={this.closeDetail} relatedBooks={this.state.relatedBooks}/>
            
          }


      </>
    )

  }
}

export default withAuth0(MyFavoriteBooks);
