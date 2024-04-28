// for registration/contact details
// Step1.js

import React from 'react';

const Step1 = ({ formData, onChange, onNext }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleNextClick = () => {
    onNext();
  };

  return (
    <div>
      <h2>Step 1: Registration/Contact Details</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="emial">Email:</label>
        <input type="email" id="emal" name="emial" value={formData.email} onChange={handleChange} required />
        <label htmlFor="contactno">Contact no.:</label>
        <input type="number" id="contact" name="contact" value={formData.contactno} onChange={handleChange} required />
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
        {/* Add other form fields for contact details */}
      </form>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Step1;
