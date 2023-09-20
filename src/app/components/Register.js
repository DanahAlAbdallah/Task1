'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');
  };



  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 ml-5 mb-5 mr-5">
        <img src="/safe.jpg" className="w-full" alt="Office" />
      </div>

      <div className="md:w-1/2 mx-auto max-w-lg p-4 bg-gray-100 mb-5">
        <h1 className="text-2xl font-semibold mb-4 text-blue-sky">Register a session</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="first-name" className="text-sm text-blue-sky mb-2">
              First name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="First name"
              className="px-4 py-2 border rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name" className="text-sm text-blue-sky mb-2">
              Last name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Last name"
              className="px-4 py-2 border rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-blue-sky mb-2">
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-blue-sky mb-2">
              Therapist <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id="message"
              className="px-4 py-2 border rounded-lg text-blue-sky"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
              <option value="" disabled>Select a therapist </option>
              <option value="Option 1">Therapist 1</option>
              <option value="Option 2">Therapist 2</option>
              <option value="Option 3">Therapist 3</option>
              <option value="Option 3">Therapist 4</option>
              <option value="Option 3">Therapist 5</option>
              <option value="Option 3">Therapist 6</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button
            type="submit"
            className="bg-beige-pink bg-opacity-100 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
