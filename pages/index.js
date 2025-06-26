// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import PracticeAreas from '../components/PracticeAreas';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <HeroSection />
          <AboutUs />
          <PracticeAreas />
          <Testimonials />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
