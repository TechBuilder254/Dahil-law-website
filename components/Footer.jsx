import React from "react";
import Link from "next/link";
import { FaChevronRight, FaInfoCircle, FaBriefcase, FaUsers, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa"; // ✅ Import icons

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Firm Details */}
        <div className="footer-brand">
          <h3>DAHIR, AFFEY & ASSOCIATES ADVOCATES LLP</h3>
          <p>Professional legal services tailored to individuals, businesses, and institutions.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><FaInfoCircle className="footer-icon" /> <Link href="/about">About Us</Link></li>
            <li><FaBriefcase className="footer-icon" /> <Link href="/practice">Practice Areas</Link></li>
            <li><FaUsers className="footer-icon" /> <Link href="/attorneys">Our Team</Link></li>
            <li><FaEnvelope className="footer-icon" /> <Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt className="footer-icon" /> Phone: +254794006565</p>
          <p>
            <FaEnvelope className="footer-icon" /> 
            E-mail: <a href="mailto:info@aadavocates.co.ke" className="email-link">info@aadavocates.co.ke</a>
          </p>
          <p><FaMapMarkerAlt className="footer-icon" /> Address: 623 WOOD AVENUE PLAZA, 8th Floor, Wood Avenue, Kilimani, Nairobi</p>
          <p><FaMapMarkerAlt className="footer-icon" /> Address: Business Bay Square (BBS) lower ground office no 77$78, Nairobi</p>
        </div>
     
      </div>

      {/* Copyright & Developer Credit */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dahir, Affey & Associates Advocates LLP.</p>
        <p>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/techbuilder254/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link"
          >
            TechBuilder254
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
