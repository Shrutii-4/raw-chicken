import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-9">
      <div className="flex justify-between">
        <div className="text-5xl font-bold font-serif align-text-bottom">
          <h1 className="text-3xl ml-16">Say Hello!</h1>
          <div className='flex justify-evenly gap-5'>
            <FaFacebook className='mt-20' />
            <FaInstagramSquare className='mt-20' />
            <FaLinkedinIn className='mt-20' />
            <FaYoutube className='mt-20' />
          </div>
        </div>  
        <div className='text-2xl mt-24 text-right flex flex-col items-end'>
          <p>California, Us</p>
          <p className='text-gray-400 mt-17'>+1 786 878 9457</p>
        </div>
        <div className="text-right w-94">
          <div className="flex space-x-14">
            <div className="flex flex-col space-y-6">
              <div className="text-base flex flex-col">
                <h1><b>First name</b></h1>
                <p className='font-serif text-gray-400'>Enter your first name</p>
                <div className="border-b border-white mt-1"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-x"><b>Last name</b></h1>
                <p className='font-serif text-gray-400'>Enter your last name</p>
                <div className="border-b border-white mt-1"></div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col">
                <h1 className="text-x"><b>Email</b></h1>
                <p className='font-serif text-gray-400'>Enter your Email id</p>
                <div className="border-b border-white mt-1"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-x"><b>Mobile No</b></h1>
                <p className='font-serif text-gray-400'>Enter your mobile number</p>
                <div className="border-b border-white mt-1"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-x"><b>Message</b></h1>
                <p className='font-serif text-gray-400'>Enter your message</p>
                <div className="border-b border-white mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
