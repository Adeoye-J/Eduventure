import React, { useEffect, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { RiHeart2Line, RiHeart3Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
// RiHeart3Line

const ServiceItem = ({content}) => {

    const [activeIndex, setActiveIndex] = useState(0)

    const { cover_image, cover_image1, cover_image2, cover_image3 } = content
    const images = [cover_image, cover_image1, cover_image2, cover_image3].filter(Boolean)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])
    
    return (
        <div className='flex flex-col gap-4'>
            <div className="relative">
                <div className='h-[200px] w-full flex items-center justify-center relative'>
                    <div className="w-full h-full relative text-white rounded-lg">
                        {
                            images.map((carousel, index) => (
                                <div 
                                    className={`rounded-lg absolute w-full h-full bg-cover bg-center bg-no-repeat object-contain bg-black/30 bg-blend-color flex items-center justify-center opacity-0 ${index === activeIndex && "opacity-100"}`} 
                                    key={index}
                                    style={{ backgroundImage: `url(${carousel})` }}
                                >
                                </div>
                            ))
                        }
                    </div>
                    <div className="absolute flex left-1/2 bottom-10 -translate-x-1/2 gap-4">
                        {
                            images.map((_, index) => (
                                <span
                                    key={index}
                                    className={`block w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? "bg-black" : "bg-white"}`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="absolute top-3 right-3 text-orange-600 cursor-pointer"><RiHeart3Line size={30} color='white' className='text-white' /></div>
            </div>
            <Link to={`/services/${content.id}`}>
                <div className="">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <img src={content.profile} alt="" className='w-[40px] h-[40px] rounded-full object-cover' />
                            <p className='font-semibold'>{content.owner}</p>
                        </div>
                        <p className='font-bold'>{content.ranking}</p>
                    </div>
                    <p>{content.title}</p>
                    <p className='flex items-center gap-2'><FaStar /><span className='font-bold'>{content.rating}</span>({content.noOfReviews})</p>
                    <div className="italic">Least Cost/Budget: <span className='font-semibold'>#{content.least_cost}</span></div>
                </div>
            </Link>
        </div>
    )
}

export default ServiceItem