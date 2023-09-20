import React from 'react';
import 'tailwindcss/tailwind.css';

export default function AboutComponent() {
  return (
    <div className="bg-gray-100 py-12 mt-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg lg:max-w-xl lg:mr-6">
          <h1 className="text-3xl font-semibold text-blue-sky text-center lg:text-left mb-6">About Us</h1>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-500">
              At 'Euphorica', we are dedicated to spreading mental health awareness and providing support to individuals facing mental health challenges. Our mission is to create a safe and compassionate space where people can find information, resources, and community to help them on their mental health journey.
            </p>

            <h2 className="mt-6 text-xl font-semibold text-blue-sky">Our Vision</h2>
            <p className="text-gray-500">
              We envision a world where mental health is destigmatized, where seeking help is encouraged, and where every individual can access the support they need to thrive emotionally and mentally. We believe that mental health is just as important as physical health and should be treated with the same care and respect.
            </p>

            <p className="mt-6 text-gray-500">
              Thank you for visiting Euphorica. Together, we can make a positive impact on mental health awareness and support.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 md:ml-16">
          <img src='/mentalhealth.jpg' alt="Mental Health" className="rounded-lg " />
        </div>
      </div>
    </div>


  );
}
