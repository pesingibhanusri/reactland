import React, { useEffect, useState } from "react";
import "./Featurecard.css";

const Feature = () => {
  const [activeFeatureSlide, setActiveFeatureSlide] = useState(0);
  
  const features = [
    {
      icon: "🍲",
      title: "Food Services",
      description: "Share your culinary skills by preparing meals for those in need or teaching cooking classes to the community.",
      color: "#C0A56E"
    },
    {
      icon: "👕",
      title: "Clothing Initiatives",
      description: "Help organize clothing drives, repair garments, or teach sewing and mending skills to the younger generation.",
      color: "#C0A56E"
    },
    {
      icon: "📚",
      title: "Education Support",
      description: "Tutor students, share your professional knowledge, or lead workshops in your area of expertise.",
      color: "#C0A56E"
    },
    {
      icon: "🏠",
      title: "Community Building",
      description: "Participate in neighborhood improvement projects and help strengthen your local community.",
      color: "#C0A56E"
    },
    {
      icon: "🤝",
      title: "Mentorship",
      description: "Guide young professionals with your years of experience and industry knowledge.",
      color: "#C0A56E"
    },
    {
      icon: "❤️",
      title: "Companionship",
      description: "Provide valuable social interaction to isolated individuals in your community.",
      color: "#C0A56E"
    }
  ];
  
  useEffect(() => {
    const featureInterval = setInterval(() => {
      setActiveFeatureSlide(prev => (prev + 1) % Math.ceil(features.length / 6));
    }, 5000);
    
    return () => {
      clearInterval(featureInterval);
    };
  }, [features.length]);
  
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Retire&Give?</h2>
          <p>Our platform makes it easy to find meaningful opportunities that match your skills and interests.</p>
        </div>
        
        <div className="features-row">
          {features.map((feature, index) => (
            <FeatureCard
              key={`feature-${index}`}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="feature-card" style={{ borderTop: `4px solid ${color}` }}>
      <div className="feature-icon" style={{ backgroundColor: `${color}20`, color: color }}>{icon}</div>
      <h3 style={{ color: color }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Feature;