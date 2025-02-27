import React from "react";
import "./Opportunities.css"
const Oppor=()=>{
return(
    <div className="landing">
        
      <section className="featured-opportunities" id="featured-opportunities">
        <div className="container">
          <div className="section-title">
            <h2>Featured Opportunities</h2>
            <p>Discover some of our most popular volunteer positions currently available.</p>
          </div>
          <div className="opportunity-grid">
            <OpportunityCard 
              title="Cooking Class Instructor"
              organization="Community Center"
              location="Springfield, IL"
              commitment="2 hours/week"
              category="Food Services"
              description="Share your culinary expertise by teaching basic cooking and nutrition classes to families in need."
              image="https://media.istockphoto.com/id/1452473761/vector/senior-people-using-modern-technologies-grandmother-and-grandfather-watching-recipes-on.jpg?s=612x612&w=0&k=20&c=AOZoWYRM04g4COCFghqMP_0Gqbun7TIrLVyVUcUmn38="
            />
            <OpportunityCard 
              title="Reading Buddy"
              organization="Main Street Elementary"
              location="Riverside, CA"
              commitment="1-3 hours/week"
              category="Education"
              description="Read with young students to improve their literacy skills and foster a love of reading."
              image="https://www.shutterstock.com/image-vector/senior-retired-couple-reading-novels-260nw-2296127137.jpg"
            />
            <OpportunityCard 
              title="Technology Mentor"
              organization="Senior Living Center"
              location="Boston, MA"
              commitment="Flexible"
              category="Technology"
              description="Help fellow seniors learn to use smartphones, tablets, and computers to stay connected with loved ones."
              image="https://img.freepik.com/free-vector/hand-drawn-illustration-seniors-using-technology_52683-55000.jpg"
            />


         
          </div>
        </div>
      </section>

    </div>
)
}


function OpportunityCard({ title, organization, location, commitment, category, description, image }) {
    return (
      <div className="opportunity-card">
        <img src={image} alt={title} className="opportunity-image" />
        <div className="opportunity-category">{category}</div>
        <h3>{title}</h3>
        <div className="opportunity-details">
          <div className="detail-item">
            <span className="detail-label">Organization:</span>
            <span>{organization}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Location:</span>
            <span>{location}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Time Commitment:</span>
            <span>{commitment}</span>
          </div>
        </div>
        <p>{description}</p>
        <button className="opportunity-button">Learn More</button>
      </div>
    );
  }

export default Oppor