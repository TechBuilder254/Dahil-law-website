import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBalanceScale, FaGavel, FaBriefcase, FaLandmark, FaUniversity, FaRegBuilding } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link'; // Make sure this is at the top

const SectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Dahir Affey Associates Advocates LLP</title>
        <meta name="description" content="Learn about Dahir Affey Associates Advocates LLP, our mission, values, and commitment to providing expert legal services in Kenya." />
      </Head>
      <Header />
      <main>
        {/* SECTION ONE: Hero Header */}
        <section className="about-hero">
          <div className="herro-overlay">
            <div className="herro-content" data-aos="fade-up">
              <h1 className="firm-name">Dahir Affey & Associates Advocates LLP</h1>
              <p className="tagline">Trusted Legal Solutions. Proven Results.</p>
              <p className="intro-text">
                At Dahir Affey & Associates, we deliver client-focused legal advocacy with professionalism, integrity, and a passion for justice.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION TWO: Our Story */}
        <section className="our-story-section">
          <div className="story-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left: Text */}
              <div className="story-text" data-aos="fade-right">
                <h2>Our Story</h2>
                <p>
                  Dahir Affey & Associates Advocates LLP was founded with a singular mission: to provide dedicated legal counsel that is ethical, strategic, and aligned with our clients' best interests.
                </p>
                <p>
                  What began as a vision to bring justice and fairness to underserved communities has grown into a respected law firm trusted by individuals, businesses, and institutions across the country.
                </p>
                <p>
                  We uphold the values of integrity, professionalism, and transparency—combining in-depth legal knowledge with a personalized approach that makes every client feel heard and protected.
                </p>
              </div>
              {/* Right: Image */}
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl border-4 border-white" data-aos="fade-left">
                <img
                  src="/images/rep.webp"
                  alt="Law firm office"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: 'center 70%' }}
                />
              </div>
            </div>
          </div>
        </section>

       

        
        {/* SECTION SIX: Client Testimonials */}
        <section className="client-testimonials">
          <div className="testimonials-container">
            <h2 data-aos="fade-up">What Our Clients Say</h2>
            <p className="testimonial-intro" data-aos="fade-up" data-aos-delay="100">
              Hear directly from clients who have experienced our dedication, professionalism, and results-driven approach to legal service.
            </p>

            <div className="testimonial-grid">
              <div className="testimonial-box" data-aos="fade-up" data-aos-delay="0">
                <p className="testimonial-text">
                  "I was facing a complicated land dispute and didn't know where to turn. Dahir Affey & Associates handled my case with professionalism and got me justice."
                </p>
                <p className="client-name">— James W., Nairobi</p>
              </div>

              <div className="testimonial-box" data-aos="fade-up" data-aos-delay="100">
                <p className="testimonial-text">
                  "The lawyers are kind, honest, and transparent. They explained every step of my divorce process. I highly recommend them."
                </p>
                <p className="client-name">— Aisha M., Mombasa</p>
              </div>

              <div className="testimonial-box" data-aos="fade-up" data-aos-delay="200">
                <p className="testimonial-text">
                  "Their legal advice helped my business avoid a costly mistake. They're not just lawyers—they're trusted advisors."
                </p>
                <p className="client-name">— Brian K., Kisumu</p>
              </div>
            </div>
          </div>
        </section>
       

      


       
        {/* SECTION ELEVEN: Call to Action */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help you achieve your legal objectives</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Schedule a Consultation</a>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SectionOne;
