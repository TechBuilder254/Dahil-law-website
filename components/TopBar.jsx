import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const TopBar = () => {
  return (
    <div className="top-bar w-full bg-blue-900 text-white text-xs py-2 px-2 flex items-center justify-between whitespace-nowrap" style={{fontSize: '0.85rem'}}>
      {/* Left: Twitter Icon */}
      <div className="flex items-center min-w-0">
        <a href="https://twitter.com/yourlawfirm" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors duration-200">
          <FaTwitter className="w-4 h-4 mr-2 inline-block align-middle" />
        </a>
      </div>
      {/* Center: Info */}
      <div className="flex-1 text-center min-w-0 truncate">
        Mon-Fri&nbsp;&nbsp;|&nbsp;&nbsp;0700021601
      </div>
      {/* Right: Book Appointment Button */}
      <div className="flex items-center min-w-0">
        <Link href="/contact">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs font-semibold whitespace-nowrap transition-colors duration-200" style={{fontSize: '0.85rem'}}>
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar; 