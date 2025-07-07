'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="contact-wrapper">
          <div className="contact-columns">
            {/* Right side: Form first */}
            <div className="contact-form-side">
              <h2 className="contact-title">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Left side: Contact Info */}
            <div className="contact-info-side">
              <h2 className="contact-title">Contact Information</h2>
              <div className="info-text">
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@aadavocates.co.ke">info@aadavocates.co.ke</a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+254794006565">+254 794 006 565</a>
                </p>
                <p>
                  <strong>Office:</strong> 4th Floor, ABC Towers, Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Locations Section */}
          <div className="locations-wrapper">
            <h2 className="map-section-title">Our Locations</h2>
            <div className="maps-grid">
              <div className="location-map">
                <h3 className="location-title">WOOD AVENUE PLAZA</h3>
                <p className="location-address">
                  623 WOOD AVENUE PLAZA, 8th Floor, Kilimani, Nairobi
                </p>
                <a
                  href="https://www.google.com/maps/place/Wood+Avenue+Plaza,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-wrapper"
                >
                  <iframe
                    src="https://www.google.com/maps?q=Wood+Avenue+Plaza+Nairobi&output=embed"
                    className="map-iframe"
                    loading="lazy"
                    title="WOOD AVENUE PLAZA"
                  ></iframe>
                </a>
              </div>

              <div className="location-map">
                <h3 className="location-title">Business Bay Square (BBS)</h3>
                <p className="location-address">
                  Business Bay Square (BBS), Lower Ground, Office No. 77 & 78, Nairobi
                </p>
                <a
                  href="https://www.google.com/maps/place/Business+Bay+Square,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link-wrapper"
                >
                  <iframe
                    src="https://www.google.com/maps?q=Business+Bay+Square+Nairobi&output=embed"
                    className="map-iframe"
                    loading="lazy"
                    title="BBS Office"
                  ></iframe>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
