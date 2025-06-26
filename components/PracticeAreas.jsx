// src/components/PracticeAreas.jsx
import React from "react";
import Link from "next/link";
import { FaBalanceScale, FaGavel, FaBriefcase, FaLandmark, FaUniversity, FaRegBuilding, FaHospital, FaBook, FaMoneyBill, FaUserShield, FaLightbulb } from "react-icons/fa";

const practiceAreas = [
  {
    id: 'conveyancing',
    title: 'Conveyance Law',
    description: 'Professional legal services for property transactions and transfers.',
    icon: <FaLandmark className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'commercial-law',
    title: 'Commercial Law',
    description: 'Comprehensive legal support for businesses and commercial transactions.',
    icon: <FaBriefcase className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'public-interest-litigation',
    title: 'Public Interest Litigation',
    description: 'Advocating for social justice and environmental protection.',
    icon: <FaUniversity className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'constitutional-law',
    title: 'Constitutional Law',
    description: 'Safeguarding fundamental rights and ensuring constitutional justice.',
    icon: <FaBook className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    description: 'Expert guidance in corporate governance and business structuring.',
    icon: <FaRegBuilding className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Strategic defense for individuals facing criminal charges.',
    icon: <FaGavel className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'family-succession-law',
    title: 'Family & Succession Law',
    description: 'Expert legal services in family matters, inheritance, and estate planning.',
    icon: <FaBalanceScale className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'personal-injury-law',
    title: 'Personal Injury Law',
    description: 'Legal representation for victims of accidents, malpractice, and negligence.',
    icon: <FaHospital className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'banking-finance-law',
    title: 'Banking & Finance Law',
    description: 'Legal assistance in financial transactions, loan agreements, and investment law.',
    icon: <FaMoneyBill className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'general-law',
    title: 'General Law',
    description: 'Comprehensive legal solutions covering a wide range of legal matters for individuals and businesses.',
    icon: <FaUserShield className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  },
  {
    id: 'intellectual-property-law',
    title: 'Intellectual Property Law',
    description: 'Safeguarding copyrights, trademarks, patents, and creative rights.',
    icon: <FaLightbulb className="mx-auto text-blue-600 w-12 h-12 mb-4" />
  }
];

const PracticeAreas = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-center text-blue-800 mb-12"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          Our Practice Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Link
  href={`/practice/${area.id}`}
  key={area.id}
  className="block h-full"
>
  <div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer border border-gray-100 transform hover:-translate-y-2 practice-card group flex flex-col justify-between h-full text-center"
    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
    data-aos-delay={index * 100}
    data-aos-duration="1200"
    data-aos-easing="ease-out-cubic"
  >
    <div>
      {area.icon}
      <h3 className="text-xl font-semibold mb-2 text-blue-800">{area.title}</h3>
      <p className="text-gray-600 mb-6">{area.description}</p>
    </div>
    <div className="mt-auto flex justify-center">
      <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-medium text-sm shadow hover:bg-blue-700 transition-colors duration-200">
        Learn More
        <svg 
          className="w-4 h-4 ml-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </div>
  </div>
</Link>

          ))}
        </div>
        <div 
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <Link href="/practice">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              View All Practice Areas
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
