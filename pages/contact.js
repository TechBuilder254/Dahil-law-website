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
    // Handle form submission here
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
    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Info + Map */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-blue-800" data-aos="fade-right">Contact Information</h2>

              <div className="space-y-4 text-gray-700" data-aos="fade-right" data-aos-delay="100">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:info@yourlawfirm.com" className="text-blue-600 underline">
                    info@yourlawfirm.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{' '}
                  <a href="tel:+254712345678" className="text-blue-600 underline">
                    +254 712 345 678
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Office:</span> 4th Floor, ABC Towers, Nairobi, Kenya
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-64 rounded-md overflow-hidden shadow-md" data-aos="fade-right" data-aos-delay="200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.027337263987!2d36.8219461!3d-1.2920651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e7d54d4f7d%3A0x3e1d56ed8b06e2e9!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1680000000000"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800" data-aos="fade-left">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
