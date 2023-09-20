

import React from 'react';
import Layout from '../src/app/layout';
import AboutComponent from '../src/app/components/About';
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export default function About() {
  return (
    <div>
      <NavBar />
      <AboutComponent />
      <Footer />
    </div>
  );
}
