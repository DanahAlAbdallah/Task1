import React from 'react'
import RegisterSession from '@/app/components/Register'
import NavBar from '@/app/components/navbar'
import Footer from '@/app/components/footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function register() {
  return (
    <div>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <RegisterSession />
      <Footer />

    </div>
  )
}
