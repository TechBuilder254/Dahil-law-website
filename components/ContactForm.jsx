import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Thank you! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[60vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Info (Card) */}
          <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center items-start border border-blue-100">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 w-full text-center relative">
              Contact Information
              <span className="block mx-auto w-24 h-1 bg-blue-700 mt-3 rounded"></span>
            </h2>
            <div className="space-y-4 text-lg w-full">
                <div>
                <span className="font-bold text-gray-800">Email: </span>
                <a href="mailto:info@aadavocates.co.ke" className="text-blue-700 hover:underline break-all">info@aadavocates.co.ke</a>
                </div>
                <div>
                <span className="font-bold text-gray-800">Phone: </span>
                <a href="tel:+254794006565" className="text-blue-700 hover:underline">+254 794 006 565</a>
                </div>
                <div>
                <span className="font-bold text-gray-800">Office: </span>
                <span className="text-gray-600">4th Floor, ABC Towers, Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Right Side: Book Appointment Button */}
          <div className="flex flex-col items-center justify-center h-full">
            <button
              onClick={() => window.location.href = '/contact'}
              className="relative inline-block px-10 py-5 font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-xl overflow-hidden group focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ minWidth: '260px' }}
            >
              <span className="absolute inset-0 w-full h-full bg-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative z-10">Book Appointment With Us</span>
              </button>
            <p className="mt-8 text-gray-500 text-center text-base max-w-xs">Click the button above to schedule your consultation!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
