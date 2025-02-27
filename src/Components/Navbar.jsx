import React from "react"
import "./Navbar.css"
import logo from "../assets/logo.jpg"
const Navbar=()=>{

    return(
    <div className="Landing">
    <header>
      <div className="container">
        <nav>
          <div className="logo-container">
            <img src={logo} alt="Retire&Give Logo" className="logo-image" />
          </div>
          <div className="nav-links">
          <a href="#features">Features</a>
<a href="#how-it-works">How It Works</a>
<a href="#testimonials">Success Stories</a>
<a href="#featured-opportunities">Featured Opportunities</a>

          </div>
          <div className="auth-buttons">
            <button className="login-button">Log In</button>
            <button className="signup-button">Sign UP</button>
          </div>
         
        </nav>
      </div>
    </header>
    </div>
    )
}
export default Navbar