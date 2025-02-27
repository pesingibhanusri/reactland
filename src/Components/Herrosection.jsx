import React from "react";
import "./Herosection.css"; // Make sure this filename matches your actual CSS file

const Hero = () => {
  return (
    <div className="hero-fullpage">
      <section className="hero">
        <div className="container">
          <h1>Share Your Experience, Make a Difference</h1>
          <div className="hero-description">
            <p>
              Connect with your community through meaningful service opportunities tailored for retirees.
              Put your skills to good use and enjoy your retirement years making a difference
            </p>
          </div>
          <h2>Serve, Share, Support - The Gift of Retirement</h2>
          <div className="hero-buttons">
            <button className="cta-button">Get Started Today</button>
            <button className="secondary-button">Learn More</button>
          </div>
          <div className="hero-image-container">
            <img 
              src="https://img.freepik.com/premium-vector/joyful-senior-friends-exiting-together_1138841-44580.jpg?semt=ais_hybrid"
              alt="Retirees volunteering and making a difference" 
              className="hero-image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;