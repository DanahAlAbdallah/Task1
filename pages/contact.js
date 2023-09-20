import React from 'react'
import ContactForm from '@/app/components/Contact'
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function contact() {
  return (
    <div>

      <div>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
        />
        <ContactForm />
        <Footer />
      </div>

    </div>
  )
}
