import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {

    return (
        <div className='p-10 w-full space-y-6'>
            <h1 className='text-[40px] font-bold '>Welcome Back, <span className='text-gray-500'>Jeremiah</span></h1>
            <div className="flex justify-between items-start">
                <div className="w-2/3 space-y-7 py-4">
                    <p className='font-bold text-lg'>Username: <span className='text-gray-500 text-[1rem] font-semibold'>Jeremiah Bankole</span></p>
                    <p className='font-bold text-lg'>Profession: <span className='text-gray-500 text-[1rem] font-semibold'>Developer || Student</span></p>
                    <p className='font-bold text-lg'>Location: <span className='text-gray-500 text-[1rem] font-semibold'>Federal University of Technology, Owerri</span></p>
                    <p className='font-bold text-lg'>About Me: <span className='text-gray-500 text-[1rem] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas vitae minus dicta sapiente repellat architecto est odio adipisci eum, doloribus iure cupiditate voluptate minima fugit, consequuntur labore obcaecati ducimus.</span></p>
                </div>
                <div className="border-4 p-5 border-black">
                    <img src={"/images/dummy_image.png"} alt="" />
                </div>
            </div>
            <div className="flex gap-4">
                <Link to={"/products"}><button className='px-4 h-[40px] border border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white'>Explore Products</button></Link>
                <Link to={"/services"}><button className='px-4 h-[40px] border border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white'>Hire Entrepreneurs For Service</button></Link>
            </div>
        </div>
    )
}

export default DashboardHome