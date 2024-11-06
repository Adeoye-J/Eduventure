import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';



const ProductCard = ({imgSrc, title, price, reviews, author}) => {

    return (
        <div className='w-full flex flex-col p-4 rounded-md shadow-2xl'>
            <div className="relative w-full h-2/3">
                <div className="w-full h-[200px]">
                    <img src={imgSrc} alt="item" className='w-full h-full object-cover hover:scale-110 duration-300 rounded-md' />
                </div>
                <div className='absolute right-4 top-4 rounded-full bg-orange-600 p-[8px] cursor-pointer'>
                    <FaHeart size={20} className='text-white'/>
                </div>
            </div>
            <div className='mt-3 h-1/3'> 
                <h2 className='font-bold text-lg text-center mb-4'>{title}</h2>   
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-center gap-2 h-full">
                            <div className="h-[40px] w-[40px]">
                                <img src="/images/avatar.png" alt="profile image" className='h-full w-full rounded-full' />
                            </div>
                            <p className='font-bold'>{author}</p>
                        </div>
                        <span className='flex items-center gap-1'>
                            {
                                [...Array(reviews)].map((_, index) => (
                                    <FaStar 
                                        key={index}
                                        size={15}
                                        className='cursor-pointer'
                                        color='gold'
                                    />
                                ))
                            }
                            {   reviews < 5 &&
                                [...Array(5 - reviews)].map((_, index) => (
                                    <FaStar 
                                        key={index}
                                        size={15}
                                        className='cursor-pointer'
                                    />
                                ))
                            }
                        </span>
                    </div>
                    <div className="">
                        <p className='mb-1 font-bold'>#{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard