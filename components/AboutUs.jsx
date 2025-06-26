// components/AboutUs.jsx
import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div 
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="/images/rep.png"
              alt="Law firm office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <h2 
              className="text-3xl font-bold text-blue-800"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              About Dahil Affey & Associates
            </h2>
            <p 
              className="text-gray-600"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              We are a full-service law firm committed to providing exceptional legal services with integrity and professionalism. Our team of experienced attorneys specializes in various practice areas, ensuring comprehensive legal solutions for our clients.
            </p>
            <div 
              className="space-y-4"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Expert legal counsel</span>
              </div>
              <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Personalized attention</span>
              </div>
              <div className="flex items-center space-x-3 transform transition-all duration-500 hover:translate-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Proven track record</span>
              </div>
            </div>
            <Link 
              href="/about"
              className="inline-block mt-6"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
