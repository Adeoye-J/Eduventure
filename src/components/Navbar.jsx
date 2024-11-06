import React, { useContext, useState } from 'react'
import {FaSearch, FaCartPlus, FaCaretDown} from "react-icons/fa"
import {RiMenu3Line, RiCloseLine, RiProfileFill} from "react-icons/ri"
import profile_placeholder from "/images/dummy_image.png"
import { Link } from 'react-router-dom'
import { SolutionContext } from '../context/SolutionContext'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const {setHide, setAuthType, loggedIn, setLoggedIn, cartItems} = useContext(SolutionContext)

  return (
    <>
      <div className='fixed w-full max-w-[1700px] flex flex-row justify-center h-20 bg-blue-950 text-white z-50'>
        <nav className='w-full px-4 lg:px-8 flex flex-row items-center justify-between relative'>
          <div className="w-14 h-14 border border-orange-500">
            <img src="/images/SPLogo.webp" alt="logo" className='w-full h-full object-cover' />
          </div>
          <ul className="hidden md:flex items-center gap-4">
            <Link to={"/"}><li className='text-sm hover:text-orange-400 transition-all duration-500 font-bold cursor-pointer'>HOME</li></Link>
            <Link to={"/products"}><li className='text-sm hover:text-orange-400 transition-all duration-500 font-bold cursor-pointer'>PRODUCTS</li></Link>
            <Link to={"/services"}><li className='text-sm hover:text-orange-400 transition-all duration-500 font-bold cursor-pointer'>SERVICES</li></Link>
          </ul>
          <div className="search-con flex items-center rounded-sm h-10">
            <div className="hidden search-icon sm:flex items-center justify-center h-full px-4 bg-orange-500 rounded-l-sm">
              <FaSearch className='icon text-white'/>
            </div>
            <input type="text" placeholder='Search Everywhere...' className="hidden text-[15px] sm:flex pl-2 h-full rounded-r-sm text-black w-40 lg:w-80" />
          </div>
          <div className='flex items-center justify-center gap-4'>
            {
            loggedIn 
            ? <ul className="action flex items-center gap-4">
                <li className='hidden text-sm hover:text-orange-400 transition-all font-bold cursor-pointer lg:flex items-center gap-2'>HELP <FaCaretDown/></li>
                <Tippy content="Cart">
                  <Link to={"/carts"} className='relative cursor-pointer'>
                    <FaCartPlus className='text-xl font-bold' />
                    {cartItems.length > 0 && <div className="item-no absolute -top-[10px] left-[10px] flex items-center justify-center text-center text-[.6rem] text-white font-bold border border-white bg-red-700 w-[20px] h-[20px] rounded-full">{cartItems.length}</div>}
                  </Link>
                </Tippy>
                <Tippy content="Dashboard">
                  <Link to={"/dashboard"} onClick={() => setHide(true)}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full">
                      <img src={profile_placeholder} alt="profile-dummy" className='w-full h-full rounded-full object-cover' />
                    </div>
                  </Link>
                </Tippy>
                <button className='hidden md:block text-sm hover:text-orange-400 transition-all duration-500 font-bold'>LOG OUT</button>
              </ul>
            : <div className="action flex items-center gap-4">
                <Tippy content="Cart">
                  <Link to={"/carts"} className='relative cursor-pointer'>
                    <FaCartPlus className='text-xl font-bold' />
                    {cartItems.length > 0 && <div className="item-no absolute -top-[10px] left-[10px] flex items-center justify-center text-center text-[.6rem] text-white font-bold border border-white bg-red-700 w-[20px] h-[20px] rounded-full">{cartItems.length}</div>}
                  </Link>
                </Tippy>
                <Link to="/auth"><button onClick={() => setAuthType("login")} className='text-sm hover:text-orange-400 transition-all duration-500 font-bold'>LOG IN</button></Link>
                <Link to="/auth"><button onClick={() => setAuthType("signup")} className='text-sm font-bold h-10 px-2 bg-white text-black rounded-md hover:bg-orange-400 transition duration-500'>SIGN UP</button></Link>
              </div>
            }
              <div className="nav md:hidden">
              {
                showMenu 
                ? <RiCloseLine className='text-xl font-bold cursor-pointer transition-all' onClick={() => setShowMenu(false)} size={25} />
                : <RiMenu3Line className='text-xl font-bold cursor-pointer transition-all' onClick={() => setShowMenu(true)} size={25} />
              }
              </div>
          </div>
        </nav>
      </div>
      {
        showMenu && 
        <div className='fixed right-0 top-20 bg-blue-900 w-5/6 h-full text-white z-50 md:hidden'>
          <ul className="gap-6 items-start p-8">
            <Link to={"/"} onClick={() => setShowMenu(false)}><li className='text-md border-b-2 hover:text-orange-400 hover:translate-x-2 transition-all duration-500 font-bold cursor-pointer px-4 py-6'>HOME</li></Link>
            <Link to={"/products"} onClick={() => setShowMenu(false)}><li className='text-md border-b-2 hover:text-orange-400 hover:translate-x-2 transition-all duration-500 font-bold cursor-pointer px-4 py-6'>PRODUCTS</li></Link>
            <Link to={"/services"} onClick={() => setShowMenu(false)}><li className='text-md border-b-2 hover:text-orange-400 hover:translate-x-2 transition-all duration-500 font-bold cursor-pointer px-4 py-6'>SERVICES</li></Link>
            <Link to={"/"} onClick={() => setShowMenu(false)}><li className='text-md border-b-2 hover:text-orange-400 hover:translate-x-2 transition-all duration-500 font-bold cursor-pointer px-4 py-6'>HELP</li></Link>
          </ul>

          {
            loggedIn && 
            <div className="flex justify-center">
              <button className='text-sm font-bold h-10 px-2 bg-white text-black rounded-md hover:bg-orange-400 transition duration-500'>LOG OUT</button>
            </div>
          }
        </div>
      }
    </>
  )
}

export default Navbar