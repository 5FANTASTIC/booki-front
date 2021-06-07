import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import BookSelected1 from './components/BookSelected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons';
class Footer extends React.Component {
  render() {
    return (
      <footer style={{ backgroundColor: " #022e57" }} class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">Booki.com <i>is an online bookstore, We believe that bookstores are essential to a healthy culture, As more and more people buy their books online, we wanted to create an easy, convenient way for you to get your books and support bookstores at the same time.</i></p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
              
                <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li><a href="http://scanfcode.com/about/">About Us</a></li>
                <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">&copy; 2021 All Rights Reserved by
           <a href="#">Booki</a>.
            </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
             
              
                <li><SocialIcon url="https://facebook.com/" /></li>
                <li><SocialIcon url="https://twitter.com/" /></li>
                <li><SocialIcon url="https://github.com/" /></li>
                <li><SocialIcon url="https://instagram.com/" /></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export default Footer;
