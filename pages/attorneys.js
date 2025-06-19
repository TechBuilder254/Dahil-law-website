// src/pages/Attorneys.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AttorneyCard from '../components/AttorneyCard';

const Attorneys = () => {
  const team = [
    {
      name: 'Amina Yusuf',
      title: 'Senior Criminal Lawyer',
      bio: '15+ years in criminal defense with high-profile trial experience.',
      image: '/assets/images/attorney1.jpg',
    },
    {
      name: 'John Kamau',
      title: 'Corporate & Finance Lawyer',
      bio: 'Specializes in commercial litigation and corporate compliance.',
      image: '/assets/images/attorney2.jpg',
    },
    {
      name: 'Lilian Ochieng',
      title: 'Family & Succession Lawyer',
      bio: 'Dedicated to resolving complex family law cases and mediation.',
      image: '/assets/images/attorney3.jpg',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="px-6 py-12 max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
            Meet Our Legal Team
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((attorney, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <AttorneyCard {...attorney} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Attorneys;
