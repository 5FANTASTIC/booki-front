import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer.js';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MyFavoriteBooks from './myFavoriteBooks'
import FirstPage from './FirstPage';
import Profile from './components/Profile.js';
import BookFormModal from './components/BookFormModal.js'
import BookSection from './components/BookSection';
import NavWebsite from './components/NavWebsite'




class App extends React.Component {
  constructor(props){
    super(props)
    this.sate={
      Bookdata:''
    }
  }

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return(
      <>
       
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            
              <Switch>
               <Route exact path="/">
                {/* {! this.props.auth0.isAuthenticated ? <firstPage/> : <firstPage/>}  */}
                <FirstPage/>
                </Route>
                {/* <Route exact path="/profile">
                {this.props.auth0.isAuthenticated ? <Profile/>  : <firstPage/>} 
                </Route> */}
                
                {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
