import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    image: '/images/background1.webp',
    heading: 'GUIDING BUSINESSES TO SUCCESS',
    // SEO-friendly subheading options:
    // subheading: 'Your Trusted Legal Partners in Business Growth',
    // subheading: 'Expert Corporate Legal Solutions for Every Stage',
    // subheading: 'Empowering Businesses with Proven Legal Expertise',
    // subheading: 'Legal Excellence for Ambitious Enterprises',
    subheading: 'Corporate legal solutions designed for growth and compliance.',
    buttonText: 'EXPLORE SERVICES',
    link: '/practice'
  },
  {
    image: '/images/rep.webp',
    heading: 'Guiding Businesses to Success',
    text: 'Corporate legal solutions designed for growth and compliance.',
    buttonText: 'EXPLORE SERVICES',
    link: '/practice'
  },
  {
    image: '/images/rep.webp',
    heading: 'Protecting Families, Securing Futures',
    text: 'Compassionate legal assistance in family and succession matters.',
    buttonText: 'GET LEGAL HELP',
    link: '/contact'
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  let touchStartX = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Remove animation briefly
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setAnimate(true); // Reapply animation when new content loads
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle swipe gestures
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (touchEndX - touchStartX > 50) {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section 
      className="hero-section relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-background">
        <Image
          src={slides[currentIndex].image}
          alt={slides[currentIndex].heading}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className={`hero-content ${animate ? 'animate' : ''}`}>
        <h1>{slides[currentIndex].heading}</h1>
        <p style={{ color: 'rgba(255,255,255,0.92)', fontWeight: 500, fontSize: '1.25rem', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          {slides[currentIndex].subheading}
        </p>
        <Link href={slides[currentIndex].link} className="hero-btn">
          {slides[currentIndex].buttonText}
        </Link>
      </div>

      {/* Circular indicators */}
      <div className="indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">SCROLL TO EXPLORE</div>
        <div className="scroll-arrow">
          <svg
            className="animate-bounce"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
