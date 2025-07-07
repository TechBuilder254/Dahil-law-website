import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => (
  <a
    href="https://wa.me/254794006565"
    target="_blank"
    rel="noopener noreferrer"
    className="floating-whatsapp-btn"
    aria-label="Chat on WhatsApp"
  >
    <FaWhatsapp size={24} />
  </a>
);

export default FloatingWhatsAppButton; 