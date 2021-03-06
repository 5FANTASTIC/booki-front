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
import Info from './components/Info.js';
import BookFormModal from './components/BookFormModal.js'
import SelectBook from './components/SelectBook';
import NavWebsite from './components/NavWebsite';
import Profile from './Profile.js';
import AboutUs from './components/AboutUs.js';
import LoginButton from './components/LoginButton';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.sate = {
      Bookdata: ''
    }
  }

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <>

          
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
          {/* <Route exact path="/">
              <FirstPage />
              
            </Route> */}

            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <FirstPage /> : <FirstPage />}
            
            </Route>
            <Route exact path="/SelectBook">
             <SelectBook /> 
            
            </Route>

            <Route exact path='/Profile'>
            <Profile />
              {/* {this.props.auth0.isAuthenticated ?
                <Profile /> : <FirstPage />} */}
              {/* {!this.props.auth0.isAuthenticated ?
                <LoginProfile /> : <Profile />} */}
                {/* {isAuthenticated &&
                <Profile />} */}
            </Route>

            <Route exact path='/MyFavoriteBooks'>
            <MyFavoriteBooks />
              {/* {this.props.auth0.isAuthenticated ?
                <Profile /> : <FirstPage />} */}
              {/* {!this.props.auth0.isAuthenticated ?
                <LoginProfile /> : <MyFavoriteBooks />} */}
            </Route>


            <Route exact path='/AboutUs'>
              <AboutUs />
            </Route>


          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    )
  }
}

export default withAuth0(App);