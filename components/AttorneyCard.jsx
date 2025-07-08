// src/components/AttorneyCard.jsx
import React, { useState } from 'react';
import Image from 'next/image';

const AttorneyCard = ({ name, title, bio, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition flex flex-col items-center" style={{ minHeight: '420px', minWidth: '320px' }}>
        <div className="relative w-full h-80 mb-4 cursor-pointer group" onClick={() => setOpen(true)}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          {/* Navy blue gradient overlay appears only on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-2/3 rounded-b-md pointer-events-none bg-gradient-to-t from-[#0a174e] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700 animate-fade-in-img"></div>
          {/* Read More label lower, near the bottom of the image */}
          <div className="absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '7%' }}>
            <span className="px-4 py-1 bg-white bg-opacity-80 text-blue-900 text-base font-semibold rounded-full shadow-md border border-blue-200 group-hover:scale-110 transition-transform duration-300">Read More</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-800 text-center">{name}</h3>
        <p className="text-sm text-blue-700 mb-1 text-center">{title}</p>
        <p className="text-gray-600 text-sm text-center line-clamp-2">{bio}</p>
      </div>
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
            <button onClick={() => setOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-blue-700 text-2xl font-bold">&times;</button>
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4">
                <Image src={image} alt={name} fill className="object-cover rounded-full border-4 border-blue-200" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-blue-700 font-semibold mb-2">{title}</p>
              <p className="text-gray-700 mb-4 text-center">{bio}</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6 text-blue-900 text-sm">
                <span className="font-semibold">Why trust {name}?</span><br/>
                {name} is dedicated to providing exceptional legal service, with a proven track record of success and a commitment to client care. You can be confident your case will be handled with expertise and integrity.
              </div>
              <button
                onClick={() => { window.location.href = '/contact'; }}
                className="mt-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AttorneyCard;
