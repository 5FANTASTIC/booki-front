import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSelected1 from './components/BookSelected.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
import footer1 from './components/footer1.css';
class Footer extends React.Component {
  render() {
    return (
      <footer style={{ backgroundColor: " #022e57" }} class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6 class='h'>About</h6>
              <p class="text-justify">Booki.com <i>is an online bookstore, We believe that bookstores are essential to a healthy culture, As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.</i></p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6 class='h'>Categories</h6>
              <ul class="footer-links">

                <li>math</li>
                <li>history</li>
                <li>physics</li>
                <li>science</li>
                <li>computer science</li>
                <li>others</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6 class='h'>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="#">Contact Us</a></li>

              </ul>
            </div>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">


              <li><SocialIcon url="https://facebook.com/" /></li>
              <li><SocialIcon url="https://twitter.com/" /></li>
              <li><SocialIcon url="https://github.com/" /></li>
              <li><SocialIcon url="https://instagram.com/" /></li>
            </ul>
          </div>

          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">

              <p class="copyright-text">&copy; 2021 All Rights Reserved by <b>Booki</b> 
           
            </p>
            </div>

          </div>
        </div>
      </footer>

    )
  }
}

export default Footer;
