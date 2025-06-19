import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';

const TopBar = ({ hidden }) => {
  return (
    <div className={`top-bar${hidden ? ' topbar-hidden' : ''}`}>
      <div className="container">
        <div className="left-group">
          <span>Mon-Fri</span>
          <span>9:00 AM - 11:00 PM</span>
        </div>
        <div className="right-group topbar-absolute-right">
          <a href="https://twitter.com/yourlawfirm" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <Link href="/contact">
            <button className="appointment-btn">Get Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <TopBar hidden={hideTopBar} />
      <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${hideTopBar ? 'topbar-hidden' : ''}`}>
        {/* Main Bar */}
        <div className="header-main-bar">
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt="Kanun Law Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <nav className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
            <button
              className="close-menu-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/practice" onClick={() => setMenuOpen(false)}>Practice Areas</Link>
            <Link href="/attorneys" onClick={() => setMenuOpen(false)}>Attorneys</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
