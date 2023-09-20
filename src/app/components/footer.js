import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-blue-sky h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-5xl pb-6 mt-10">
              Euphoria
            </p>
          </ul>
        </div>


        <div className="p-5">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Contact Us</p>
            <li className="text-beige-pink text-md pb-2 font-semibold hover:text-beige-pink cursor-pointer">
              <Link href='mailto:'>
                euphoria@gmail.com
              </Link>
            </li>
            <li className="text-beige-pink text-md pb-2 font-semibold hover:text-beige-pink cursor-pointer">
              +961 000000
            </li>
            <li className="text-beige-pink text-md pb-2 font-semibold hover:text-beige-pink cursor-pointer">
              Lebanon
            </li>

          </ul>
        </div>


        <div className="p-5">
          <p className="text-white font-bold text-2xl pb-4">Keep in touch</p>
          <ul className="flex items-center pr-2">
            <li className="mr-4">
              <Link href='https://instagram.com/esabusinessschool?igshid=NzZhOTFlYzFmZQ=='>
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" style={{ color: "#DAB692" }} />
              </Link>
            </li>
            <li className="mr-4">
              <Link href='https://twitter.com/ESABeirut'>
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: "#DAB692" }} />
              </Link>
            </li>
            <li className="mr-4">
              <Link href='https://www.linkedin.com/school/esa-business-school/'>
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: "#DAB692" }} />
              </Link>
            </li>
            <li className="mr-4">
              <Link href='https://youtube.com/@ESABusinessSchool?si=JIVzOaHHZPMsYdLg'>
                <FaYoutube className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: "#DAB692" }} />
              </Link>
            </li>
            <li className="mr-4">
              <Link href='https://www.facebook.com/ESABeirutOfficial'>
                <FaFacebook className="text-2xl cursor-pointer hover:text-blue-600" style={{ color: "#DAB692" }} />
              </Link>
            </li>

          </ul>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023-2024 All rights reserved | Developed by Danah Al-Abdallah

        </h1>
      </div>
    </>
  );
}

export default Footer;