import React, { useState, useEffect, useRef } from 'react';
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
  const navRef = useRef(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest('.animated-toggle')
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <TopBar hidden={hideTopBar} />
      <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${hideTopBar ? 'topbar-hidden' : ''}`}>
        <div className="container">
          {/* Main Bar */}
          <div className="header-main-bar">
            <div className="header-logo">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="Kanun Law Logo"
                  width={150}
                  height={50}
                  priority
                />
              </Link>
            </div>

            {/* Animated Hamburger/X Button */}
            <button
              className={`menu-toggle animated-toggle${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              aria-expanded={menuOpen}
              aria-controls="main-nav"
            >
              <span className="bar top"></span>
              <span className="bar middle"></span>
              <span className="bar bottom"></span>
            </button>

            <nav
              id="main-nav"
              ref={navRef}
              className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}
              tabIndex={-1}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/practice" onClick={() => setMenuOpen(false)}>Practice Areas</Link>
              <Link href="/attorneys" onClick={() => setMenuOpen(false)}>Attorneys</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>
      {/* Inline styles for the animated hamburger/X */}
                  
    </>
  );
};

export default Header;