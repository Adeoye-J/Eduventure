import React, { useContext, useState } from 'react'
import { MdCancel } from 'react-icons/md'
import { SolutionContext } from '../../context/SolutionContext'
import { Link } from 'react-router-dom'

const DashboardMenu = () => {

    const {hide, setHide} = useContext(SolutionContext)

    return (
        <div style={{ height: "calc(100vh - 5rem)" }} className={`${!hide && "hidden"} relative w-[300px] pt-12 bg-blue-950 border-t-2 border-b-2 border-orange-400`}>
            <div className={`absolute top-3 right-3 cursor-pointer`}><MdCancel onClick={() => setHide(false)} size={30} color='white' /></div>
            <div className="flex items-center gap-3 pl-10 mb-4">
                <img src="/images/dummy_image.png" alt="profile-dummy" className='w-20 h-20 rounded-full object-cover' />
                <p className='font-bold text-lg text-white'>Hello, Jeremiah</p>
            </div>
            <div className="mt-8 flex justify-center">
                <ul className='flex flex-col gap-7 w-[190px]'>
                    <Link to={"home"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Home</li></Link>
                    <Link to={"profile"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Edit Profile</li></Link>
                    <Link to={"/carts"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>View Carts</li></Link>
                    <Link to={"/"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Chats/Messages</li></Link>
                    <Link to={"/"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Notifications</li></Link>
                    <Link to={"settings"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Settings and Preference</li></Link>
                    <Link to={"/"}><li className='font-bold text-white hover:text-orange-700 transition duration-500 uppercase text-[.8rem]'>Help</li></Link>
                </ul>
            </div>
            <div className="flex items-center gap-2 justify-center mt-9">
                <Link to={"seller"}><p className='font-bold text-white underline text-sm'>Become a Seller</p></Link>
                <span className='text-white'>||</span>
                <Link to={"showcase"}><p className='font-bold text-white underline text-sm'>Showcase your skill</p></Link>
            </div>
        </div>
    )
}

export default DashboardMenu