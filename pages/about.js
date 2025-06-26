import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaBalanceScale, FaGavel, FaBriefcase, FaLandmark, FaUniversity, FaRegBuilding } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
              <h1 className="firm-name">Dahil Affey & Associates Advocates LLP</h1>
              <p className="tagline">Trusted Legal Solutions. Proven Results.</p>
              <p className="intro-text">
                At Dahil Affey & Associates, we deliver client-focused legal advocacy with professionalism, integrity, and a passion for justice.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION TWO: Our Story */}
        <section className="our-story-section">
          <div className="story-container">
            <div className="story-text" data-aos="fade-right">
              <h2>Our Story</h2>
              <p>
                Dahil Affey & Associates Advocates LLP was founded with a singular mission: to provide dedicated legal counsel that is ethical, strategic, and aligned with our clients' best interests.
              </p>
              <p>
                What began as a vision to bring justice and fairness to underserved communities has grown into a respected law firm trusted by individuals, businesses, and institutions across the country.
              </p>
              <p>
                We uphold the values of integrity, professionalism, and transparency—combining in-depth legal knowledge with a personalized approach that makes every client feel heard and protected.
              </p>
            </div>
            <div className="story-image" data-aos="fade-left">
              <img src="/images/rep.png" alt="Lawyers at work" />
            </div>
          </div>
        </section>

        {/* SECTION THREE: Mission, Vision, and Core Values */}
        <section className="mission-vision-values">
          <div className="mvv-container">
            <div className="mvv-box" data-aos="fade-up" data-aos-delay="0">
              <h3>Our Mission</h3>
              <p>
                To provide high-quality legal representation with a client-centered approach that ensures justice, fairness, and ethical outcomes in every case.
              </p>
            </div>
            <div className="mvv-box" data-aos="fade-up" data-aos-delay="100">
              <h3>Our Vision</h3>
              <p>
                To be a leading law firm in East Africa, known for our unwavering commitment to justice, legal innovation, and impactful advocacy for individuals and businesses alike.
              </p>
            </div>
            <div className="mvv-box" data-aos="fade-up" data-aos-delay="200">
              <h3>Core Values</h3>
              <ul>
                <li>Integrity</li>
                <li>Client Focus</li>
                <li>Excellence</li>
                <li>Accountability</li>
                <li>Confidentiality</li>
                <li>Diversity & Inclusion</li>
              </ul>
            </div>
          </div>
        </section>
        {/* SECTION FOUR: Why Choose Us */}
        <section className="why-choose-us">
          <div className="choose-container">
            <h2 data-aos="fade-up">Why Choose Us</h2>
            <p className="choose-intro" data-aos="fade-up" data-aos-delay="100">
              At Dahil Affey & Associates, we go beyond legal advice. We offer you a partnership built on trust, experience, and results.
            </p>
            <div className="choose-grid">
              <div className="choose-card" data-aos="fade-up" data-aos-delay="0">
                <i className="fas fa-gavel"></i>
                <h4>Expertise Across Practice Areas</h4>
                <p>
                  Our attorneys bring deep knowledge in immigration, family law, criminal defense, business law, and civil litigation.
                </p>
              </div>
              <div className="choose-card" data-aos="fade-up" data-aos-delay="100">
                <i className="fas fa-handshake"></i>
                <h4>Client-Centered Advocacy</h4>
                <p>
                  We prioritize your goals and communicate clearly, so you're always informed and empowered throughout your case.
                </p>
              </div>
              <div className="choose-card" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-shield-alt"></i>
                <h4>Proven Results</h4>
                <p>
                  Our firm has a track record of successful outcomes for clients across a wide range of legal challenges.
                </p>
              </div>
              <div className="choose-card" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-users"></i>
                <h4>Diverse & Inclusive</h4>
                <p>
                  We proudly serve clients from all backgrounds and cultures, with respect, dignity, and cultural sensitivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION FIVE: Leadership Team */}
        <section className="leadership-team">
          <div className="team-container">
            <h2 data-aos="fade-up">Meet Our Leadership Team</h2>
            <p className="team-intro" data-aos="fade-up" data-aos-delay="100">
              Our team of experienced legal professionals is united by a shared passion for justice, ethics, and delivering results for our clients.
            </p>

            <div className="team-grid">
              <div className="team-member" data-aos="fade-up" data-aos-delay="0">
                <img src="/images/rep.png" alt="Dahil Affey - Managing Partner" />
                <h4>Dahil Affey</h4>
                <p className="title">Managing Partner</p>
                <p>
                  With over 15 years in legal practice, Dahil leads the firm with a strong vision, deep knowledge in civil and human rights law, and an unwavering commitment to client service.
                </p>
              </div>
              <div className="team-member" data-aos="fade-up" data-aos-delay="100">
                <img src="/images/rep.png" alt="Amina Yusuf - Senior Advocate" />
                <h4>Amina Yusuf</h4>
                <p className="title">Senior Advocate</p>
                <p>
                  Amina specializes in family law and dispute resolution. She is known for her compassionate yet firm approach in achieving fair outcomes for her clients.
                </p>
              </div>
              <div className="team-member" data-aos="fade-up" data-aos-delay="200">
                <img src="/images/rep.png" alt="Joseph Otieno - Head of Litigation" />
                <h4>Joseph Otieno</h4>
                <p className="title">Head of Litigation</p>
                <p>
                  Joseph brings exceptional courtroom experience, handling high-profile criminal and civil litigation cases with strategic insight and sharp advocacy.
                </p>
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
                  "I was facing a complicated land dispute and didn't know where to turn. Dahil Affey & Associates handled my case with professionalism and got me justice."
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
       

        {/* SECTION SEVEN: Core Values & Client Promise */}
        <section className="core-values-section">
          <div className="values-container">
            <h2 data-aos="fade-up">Our Core Values & Client Promise</h2>
            <div className="values-wrapper">
              <div className="values-column left">
                <div className="value-card" data-aos="fade-right" data-aos-delay="0">
                  <a href="/practice/family-succession-law">
                    <div className="practice-icon"><FaBalanceScale /></div>
                    <h3>Family & Succession Law</h3>
                    <p>Legal expertise in divorce, custody, inheritance, and estate planning.</p>
                  </a>
                </div>
                <div className="value-card" data-aos="fade-right" data-aos-delay="100">
                  <a href="/practice/criminal-law">
                    <div className="practice-icon"><FaGavel /></div>
                    <h3>Criminal Law</h3>
                    <p>Strategic defense for individuals facing criminal charges and investigations.</p>
                  </a>
                </div>
                <div className="value-card" data-aos="fade-right" data-aos-delay="200">
                  <a href="/practice/commercial-law">
                    <div className="practice-icon"><FaBriefcase /></div>
                    <h3>Commercial Law</h3>
                    <p>Legal support for businesses, contracts, trade regulations, and compliance.</p>
                  </a>
                </div>
              </div>
              <div className="values-column right">
                <div className="value-card" data-aos="fade-left" data-aos-delay="0">
                  <a href="/practice/corporate-law">
                    <div className="practice-icon"><FaRegBuilding /></div>
                    <h3>Corporate Law</h3>
                    <p>Guiding businesses through structuring, governance, and compliance.</p>
                  </a>
                </div>
                <div className="value-card" data-aos="fade-left" data-aos-delay="100">
                  <a href="/practice/conveyancing">
                    <div className="practice-icon"><FaLandmark /></div>
                    <h3>Conveyancing</h3>
                    <p>Expert legal guidance in property transactions and land transfers.</p>
                  </a>
                </div>
                <div className="value-card" data-aos="fade-left" data-aos-delay="200">
                  <a href="/practice/public-interest-litigation">
                    <div className="practice-icon"><FaUniversity /></div>
                    <h3>Public Interest Litigation</h3>
                    <p>Advocating for social justice, environmental conservation, and human rights.</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION EIGHT: Success Stories */}
        <section className="success-stories">
          <div className="stories-container">
            <h2>Notable Success Stories</h2>
            <div className="stories-grid">
              <div className="story-card">
                <div className="story-content">
                  <h3>Landmark Property Rights Case</h3>
                  <p>Successfully represented a community in a landmark property rights case, securing compensation and land rights for over 200 families.</p>
                  <span className="result">Result: Complete Victory</span>
                </div>
              </div>
              <div className="story-card">
                <div className="story-content">
                  <h3>Corporate Merger</h3>
                  <p>Led a complex merger between two major East African companies, navigating regulatory challenges and ensuring smooth transition.</p>
                  <span className="result">Value: $50M+</span>
                </div>
              </div>
              <div className="story-card">
                <div className="story-content">
                  <h3>Human Rights Victory</h3>
                  <p>Successfully defended a high-profile human rights case, setting a precedent for similar cases across the region.</p>
                  <span className="result">Impact: Nationwide</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION NINE: Community Impact */}
        <section className="community-impact">
          <div className="impact-container">
            <h2>Our Community Impact</h2>
            <div className="impact-grid">
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h3>Pro Bono Services</h3>
                <p>We dedicate 10% of our practice to pro bono work, ensuring access to justice for those who need it most.</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Legal Education</h3>
                <p>Regular workshops and seminars to educate communities about their legal rights and responsibilities.</p>
              </div>
              <div className="impact-card">
                <div className="impact-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h3>Environmental Initiatives</h3>
                <p>Active participation in environmental protection cases and community clean-up programs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION TEN: Timeline */}
        <section className="firm-timeline">
          <div className="timeline-container">
            <h2>Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="year">2010</div>
                <div className="content">
                  <h3>Foundation</h3>
                  <p>Established with a vision to provide accessible legal services</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2015</div>
                <div className="content">
                  <h3>Expansion</h3>
                  <p>Opened our second office and expanded practice areas</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2018</div>
                <div className="content">
                  <h3>Recognition</h3>
                  <p>Awarded "Law Firm of the Year" by East African Legal Association</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="year">2023</div>
                <div className="content">
                  <h3>Today</h3>
                  <p>Leading full-service law firm with nationwide presence</p>
                </div>
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
              <a href="/services" className="cta-button secondary">Explore Our Services</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SectionOne;
