import React,{useState,useEffect} from "react";
import "./Sucess.css"
const Stories=()=>{
    const [activeTestimonialSlide, setActiveTestimonialSlide] = useState(0);
    const testimonials = [
        {
          text: "After 40 years as a teacher, I thought my educating days were over. Through Retire&Give, I now tutor underprivileged children twice a week and it's the highlight of my retirement!",
          name: "Manoj J.",
          role: "Retired Teacher, 68",
          image: "https://png.pngtree.com/png-vector/20241030/ourmid/pngtree-old-man-teacher-png-image_14204305.png" ,
          actionimage:"https://thumbs.dreamstime.com/b/funny-cute-d-illustration-happy-senior-male-teacher-glasses-holding-book-copyspace-funny-cute-d-illustration-smiling-336248240.jpg"
        },
        {
          text: "I spent my career as a chef, and now I teach cooking classes at the community center. Seeing young people learn to prepare healthy meals brings me so much satisfaction.",
          name: "Robert T.",
          role: "Former Restaurant Owner, 72",
          image: "https://media.istockphoto.com/id/1390616702/vector/senior-man-avatar-smiling-elderly-man-with-beard-with-gray-hair-3d-vector-people-character.jpg?s=612x612&w=0&k=20&c=CwU892ELqQlY65Xrnmo2N-pb9AE4xEXcp5gAJ6WpKJg=" ,
           actionimage:"https://thumbs.dreamstime.com/b/elderly-asian-male-chef-wearing-white-hat-uniform-isolated-background-smiling-man-cook-concept-cooking-kitchen-322062729.jpg"
        },
        {
          text: "Retire&Give connected me with a local clothing drive where I mend donated items. My sewing skills are being put to good use, and I've made wonderful friends!",
          name: "Subhadra M.",
          role: "Retired Seamstress, 65",
          image: "https://st5.depositphotos.com/1311554/70915/v/450/depositphotos_709151596-stock-illustration-illustration-cheerful-senior-lady-grey.jpg" ,
           actionimage:"https://pics.craiyon.com/2024-09-19/_0xyDcf5TO-SHr3CapB0uQ.webp"
        },
        {
          text: "The mentorship program has given me purpose after retiring from my engineering career. Guiding young professionals and seeing them succeed is incredibly rewarding.",
          name: "David L.",
          role: "Retired Engineer, 70",
          image: "https://img.freepik.com/premium-vector/portrait-active-senior-man-exercising-white-background_1323048-27094.jpg?semt=ais_hybrid", 
           actionimage:"https://static.vecteezy.com/system/resources/previews/008/945/188/non_2x/cartoon-character-of-engineer-man-holding-plan-paper-vector.jpg"
        },
        {
          text: "I volunteer at the community garden twice a week. It keeps me active, connected to nature, and I've made amazing friends across all age groups.",
          name: "Padma K.",
          role: "Retired Accountant, 66",
          image: "https://img.freepik.com/premium-vector/beautiful-old-cartoon-style-lady-with-wrinkled-his-face-white-background_1174662-9707.jpg?w=360" ,
          actionimage:"https://thumbs.dreamstime.com/b/elderly-cute-female-sit-table-universal-image-various-occupations-accountant-auditor-manager-director-officer-secretary-143909432.jpg"
        }
      ];
      useEffect(() => {
        
        
        const testimonialInterval = setInterval(() => {
          setActiveTestimonialSlide(prev => (prev + 1) % testimonials.length);
        }, 4000);
        
        return () => {
         
          clearInterval(testimonialInterval);
        };
      }, [testimonials.length]);
    return(
        <div className="Landing">
 <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Success Stories</h2>
            <p>Hear from retirees who have found purpose and joy through Retire&Give.</p>
          </div>
          
          <div className="testimonial-carousel">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeTestimonialSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div className="carousel-slide" key={`testimonial-${index}`}>
                  <TestimonialCard 
                    text={testimonial.text}
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                    actionimage={testimonial.actionimage}
                  />
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {testimonials.map((_, index) => (
                <button 
                  key={`testimonial-indicator-${index}`}
                  className={`carousel-indicator ${index === activeTestimonialSlide ? 'active' : ''}`}
                  onClick={() => setActiveTestimonialSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    
        </div>
    )
}
export default Stories
function TestimonialCard({ text, name, role, image ,actionimage}) {
    return (
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">"{text}"</p>
          <div className="testimonial-author">
            <img src={image} alt={name} className="author-image" />
            <div className="author-info">
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-image-container">
          <img src={actionimage} alt="Volunteer in action" className="testimonial-action-image" />
        </div>
  
      </div>
      
    )
  }