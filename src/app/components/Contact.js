'use client'
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setMessage('');


    toast.success('Message sent successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  };

  return (
    <div className="mx-auto max-w-lg p-4 bg-gray-100 mb-5">
      <h1 className="text-2xl font-semibold mb-4 text-blue-sky">Contact us</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="first-name" className="text-sm text-blue-sky mb-2">
            First Name <span style={{ color: 'red' }}>*</span>
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
            Last Name <span style={{ color: 'red' }}>*</span>
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
          <label htmlFor="text" className="text-sm text-blue-sky mb-2">
            Message <span style={{ color: 'red' }}>*</span>
          </label>
          <textarea
            id="text"
            placeholder="Message here..."
            className="px-4 py-2 border rounded-lg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-beige-pink bg-opacity-100  hover:bg-opacity-80  text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
