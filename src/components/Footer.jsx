import React from 'react'
import {FaTwitter, FaFacebook, FaPinterest, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[2rem] min-h-[70vh] py-[4rem] px-[1rem] bg-blue-950 text-white section-spacing'>
        <div className="p-4 flex items-start justify-between w-[90%] flex-wrap gap-8">
          <div className="flex flex-col gap-4 w-[250px] border border-white p-4">
              <div className="flex items-center justify-start">
                  <h1 className='text-[1.5rem] text-orange-300 font-semibold'><span className='text-blue-900 text-[1.7rem]'></span>StudentPreneur</h1>
              </div>
              <div className="flex flex-col items-start gap-4">
                  <p>343 Locale Port</p>
                  <p>Drive FL 33458 USA</p>
                  <p>+0000 123 456 789</p>
                  <p>info@example.com</p>
              </div>
          </div>
          <div className="flex flex-col items-start gap-4 w-[220px]">
            <h1 className="w-full text-[1.5rem]">Help</h1>
            <ul className='flex flex-col items-start gap-4'>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Search</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Help</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Information</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Privacy Policy</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Shipping Information</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 w-[220px]">
            <h1 className="w-full text-[1.5rem]">Support</h1>
            <ul className='flex flex-col items-start gap-4'>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Search Terms</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Advanced Search</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Helps and Faqs</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Store Location</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Orders and Returns</li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4 w-[220px]">
            <h1 className="w-full text-[1.5rem]">Information</h1>
            <ul className='flex flex-col items-start gap-4'>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Contact</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">About</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Careers</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Refund and Returns</li>
              <li className="transition-all duration-500 cursor-pointer hover:translate-x-[10px] hover:text-orange-600">Deliveries</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-center cursor-pointer">
            <FaTwitter className='text-[1.5rem]' />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <FaFacebook className='text-[1.5rem]' />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <FaPinterest className='text-[1.5rem]' />
          </div>
          <div className="flex items-center justify-center cursor-pointer">
            <FaInstagram className='text-[1.5rem]' />
          </div>
        </div>
    </div>
  )
}

export default Footer