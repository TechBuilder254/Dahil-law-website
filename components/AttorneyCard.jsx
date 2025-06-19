// src/components/AttorneyCard.jsx
import React from 'react';
import Image from 'next/image';

const AttorneyCard = ({ name, title, bio, image }) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow hover:shadow-md transition">
      <div className="relative w-full h-56 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  );
};

export default AttorneyCard;
