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
import BookSelected from './components/BookSelected';
import NavWebsite from './components/NavWebsite'

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
            <Route exact path="/">
              {/* {! this.props.auth0.isAuthenticated ? <firstPage/> : <firstPage/>}  */}
              <FirstPage />
            </Route>
            <Route exact path="/Info">
              {this.props.auth0.isAuthenticated ? <Info /> : <firstPage />}
            </Route>
            <Route exact path="/BookSelected">
              {this.props.auth0.isAuthenticated ? <BookSelected /> : <firstPage />}
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
