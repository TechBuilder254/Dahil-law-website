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
      image:"/images/rep.webp",
      
    },
    {
      name: 'John Kamau',
      title: 'Corporate & Finance Lawyer',
      bio: 'Specializes in commercial litigation and corporate compliance.',
      image:"/images/rep.webp",
    },
    {
      name: 'Lilian Ochieng',
      title: 'Family & Succession Lawyer',
      bio: 'Dedicated to resolving complex family law cases and mediation.',
      image:"/images/rep.webp",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative px-6 py-12 min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-b from-[#0a174e] via-[#101c3a] to-[#fff]">
          <h1 className="text-3xl font-bold text-gray-100 mb-12 text-center drop-shadow-lg animate-fade-in" data-aos="fade-up">
            Meet Our Legal Team
          </h1>
          <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl z-10">
            {team.map((attorney, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="flex justify-center">
                <AttorneyCard {...attorney} />
              </div>
            ))}
          </div>
          {/* Fading navy blue overlay at the bottom */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-[#0a174e] to-transparent z-0 animate-fade-in-slow"></div>
        </section>
        {/* Animated README section at the bottom */}
        <section className="w-full flex justify-center items-end py-10 readme-blend-bg">
          <div className="max-w-2xl w-full mx-auto rounded-2xl shadow-xl animate-color-shift animate-slide-up-fade-glow readme-hover relative border-4 border-orange-300 glow-border transition-all duration-300 p-8">
            <h2 className="text-2xl font-bold gradient-glow-text mb-2 drop-shadow about-underline">About Our Team</h2>
            <p className="text-lg text-orange-900 font-medium mb-2">We are a passionate group of legal professionals dedicated to providing exceptional service and building trust with every client. Our diverse expertise ensures you have the right advocate by your side, no matter your legal needs.</p>
            <p className="text-base text-orange-800">Contact us today to experience legal support with integrity, compassion, and results.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Attorneys;
