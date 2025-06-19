import React from "react";
import { FaQuoteLeft } from "react-icons/fa"; // Import quote icon

const testimonials = [
  {
    name: "Fatuma A.",
    feedback: "Dahir, Affey & Associates Advocates LLP helped me win custody of my children. They were compassionate, professional, and highly effective.",
  },
  {
    name: "James K.",
    feedback: "I was falsely accused in a criminal case. Their defense strategy cleared my name. I am forever grateful.",
  },
  {
    name: "Lucy W.",
    feedback: "Their legal advice saved my business from a lawsuit. Truly a team you can trust.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Clients Say</h2>
        <p className="testimonials-subtitle">Real stories. Real results.</p>

        <div className="testimonial-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">“{t.feedback}”</p>
              <p className="testimonial-name">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
