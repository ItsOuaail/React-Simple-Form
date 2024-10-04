// src/EmployeeForm.js
import React, { useState } from 'react';

const EmployeeForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', position: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (formData.name && formData.email && formData.position) {
      // Simulate form submission success
      setShowPopup(true);
      setPopupMessage('Form submitted successfully!');
      setIsError(false);
    } else {
      // Simulate error
      setShowPopup(true);
      setPopupMessage('Please fill all the fields!');
      setIsError(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Employee Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700">Position</label>
          <input 
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div 
          className={`mt-4 p-4 rounded-md ${isError ? 'bg-red-500' : 'bg-green-500'} text-white`}
        >
          {popupMessage}
          <button 
            onClick={() => setShowPopup(false)}
            className="ml-4 text-sm underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
