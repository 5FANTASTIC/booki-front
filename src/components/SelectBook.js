import React from 'react';
import Card from 'react-bootstrap/Card';
import { Navbar, Image, NavDropdown, Nav, Form, Button, FormControl } from 'react-bootstrap';
import SelectbookCSS from './selectbook.css';
import { withAuth0 } from '@auth0/auth0-react';
import AlertB from './Alert'



import axios from 'axios';



class SelectBook extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      booksFavirouteData:[],      
      dataHistory:[],
      showHistory:false,
      researchBarValue:'',
      showAlert:false,

    }

  }
  researchBarContent=(event)=>{
      event.preventDefault();
    //   console.log(event.target)
      let nameOfCatagory=event.target.value;
      this.setState({
          researchBarValue:nameOfCatagory

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
      title:item.title !=undefined ? item.title : 'NAN'    ,
      authors:item.authors !=undefined ? item.authors[0] : 'NAN',
      publisher:item.publisher !=undefined ? item.publisher : 'NAN',
      publishedDate:item.publishedDate !=undefined ? item.publishedDate : 'NAN',
      description:item.description !=undefined ? item.description : 'NAN' ,
      imageLinks:item.imageLinks.smallThumbnail !=undefined ? item.imageLinks.smallThumbnail : 'NAN',
      previewLink:item.previewLink !=undefined ? item.previewLink : 'NAN',
      buyLink:item.buyLink !=undefined ? item.buyLink : 'NAN',     
     
    }
    console.log(formData)

    let x = await axios.post(URL, formData);
    // ADD ALERT HERE LATER ON TO INFORM THE USER OF SUCESSFULL ADDING THE BOOK TO FAVIROUE 
    // console.log(x)
    this.setState({
      booksFavirouteData: x.data,
      showAlert:true,
    //   show: true,
    //   showAddModel: false,
    })
    console.log(this.state.booksFavirouteData)
    console.log(this.state.showAlert)

  }
  /// Alert messages
  

render(){
    console.log(this.props.auth0)
    return(
        <>
        <div classname='buttons'>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:history')}>History</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:Engineering')}>Engineering</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:programming')}>Programming</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:Computer')}>Computer Science</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:Medicine')}>Medicine</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:Literature')}>Literature</Button>
            <Button variant="primary" onClick={() => this.renderCollection('+subject:Science')}>Science</Button>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(event) => this.researchBarContent(event)} />
            <Button variant="outline-info" onClick={() => this.renderCollection(this.state.researchBarValue)} >Search</Button>
            </Form>
        </div>
         {  this.state.showHistory &&

         <div classname='renderBooks'>
         {this.state.dataHistory.map((item,idx)=>{
             return(
                 <>
                 <div class='mycard'>

                    <div key={this.idx} class='card'>
                        <Card.Img class='cardImg' variant="top" src={item.imageLinks != undefined ? item.imageLinks.smallThumbnail : 'https://breastfeedinglaw.com/wp-content/uploads/2020/06/book.jpeg' } />
                        <div class='box'>
                            <h3>{item.title}</h3>
                            <p id='container'> {item.authors}(Author)</p>
                        
                            <a href={item.previewLink}><Button variant="primary" >Preview</Button></a>
                            <a href={item.buyLink}><Button variant="primary" >Buy</Button></a>
                                                
                        </div>
                    </div>

                    <p id='container'> {item.description}</p>
                    <Button variant="primary" onClick={() => this.addBookFavirote(item)}>Add</Button>
                </div>
                {/* <>
                <Alert variant="danger"  dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
                </> */}
                <AlertB showAlert={this.state.showAlert}/>
            

                 
                 </>



             )


         })
         
         
         }

         </div>



         }

        

        </>



    )


}




}
export default withAuth0(SelectBook)