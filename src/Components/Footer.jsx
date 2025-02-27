import React from "react";
import "./Footer.css"
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom"
const Footer=()=>{
return(
    <div className="Landing">
          <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About Section */}
        <div className="footer-section">
          <img src={logo} alt="Retire&Give Logo" className="footer-logo" />
          {/* <span className="footer-title">Retire & Give</span> */}
          <p className="footer-text">
            Helping retirees give back to their communities through service.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <ul>
            <li><Link to="#">Food Services</Link></li>
            <li><Link to="#">Clothing Initiatives</Link></li>
            <li><Link to="#">Education Support</Link></li>
            <li><Link to="#">Community Building</Link></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Resources</h3>
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/stories">Success Stories</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section social-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Retire & Give. All rights reserved.
      </div>
    </footer>
   

        
    </div>
)
}


export default Footer

