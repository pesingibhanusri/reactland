import React from "react";
import "./how.css"
const How=()=>{
    return(
        <div className="Landing">
    <section className="how-it-works" id="how-it-works">
    <div className="container">
      <div className="section-title">
        <h2>How Retire&Give Works</h2>
        <p>Getting started is easy - follow these simple steps to begin your journey.</p>
      </div>
      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number"><img src="https://www.shutterstock.com/image-vector/cute-cartoon-illustration-senior-couple-260nw-2147349841.jpg" className="circular-img"></img></div>
          <h3>Create Your Profile</h3>
          <p>Sign up and tell us about your skills, interests, and availability. Our platform is designed to be user-friendly for all levels of tech experience.</p>
        </div>
        <div className="step-card">
          <div className="step-number"><img src="https://img.freepik.com/premium-photo/3d-rendering-search-icon-cartoon-character-holds-large-lens-with-magnifying-glass-clip-art-business-science-highlighted-white-background_728202-1233.jpg" className="circular-img"></img></div>
          <h3>Browse Opportunities</h3>
          <p>Explore service opportunities in your community that match your skills and interests. Filter by category, location, and time commitment.</p>
        </div>
        <div className="step-card">
          <div className="step-number"><img src="https://img.freepik.com/premium-vector/seniors-idea-old-people-couple-have-idea-elderly-senior-thinking-issue-grandfather-grandmother-cartoon-illustration_102902-919.jpg" className="circular-img"></img></div>
          <h3>Connect and Contribute</h3>
          <p>Reach out to organizations or individuals seeking your skills. Arrange your schedule and begin making a difference.</p>
        </div>
        <div className="step-card">
          <div className="step-number"><img src="https://static.vecteezy.com/system/resources/thumbnails/010/927/058/small_2x/joyful-positive-old-couple-running-with-fitness-tracker-isolated-on-a-white-background-smart-watch-for-senior-people-concept-active-old-age-vector.jpg" className="circular-img"></img></div>
          <h3>Track Your Impact</h3>
          <p>See the tangible difference you're making in your community through our impact dashboard and testimonials.</p>
        </div>
      </div>
    </div>
  </section>
  </div>)
}
export default How