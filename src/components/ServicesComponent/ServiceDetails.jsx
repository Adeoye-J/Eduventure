import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import service_data from "../../data/servicedata.json"
import { FaStar } from 'react-icons/fa'

const ServiceDetails = () => {

    const {serviceId} = useParams()
    const service = service_data.find((item) => item.id === Number(serviceId))

    const [activeIndex, setActiveIndex] = useState(0)

    const { cover_image, cover_image1, cover_image2, cover_image3 } = service
    const images = [cover_image, cover_image1, cover_image2, cover_image3].filter(Boolean)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='pt-32 pb-10 flex flex-col md:flex-row justify-between gap-4 px-10'>
            <div className="flex flex-col gap-10 w-full md:w-3/6">
                <Link to={"/services"}><button className='px-4 h-[40px] bg-blue-900 text-white transition-colors duration-500 hover:bg-blue-800'>Go Back</button></Link>
                <div className='h-[350px] w-full flex items-center justify-center relative'>
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
                <div className="border p-4 space-y-5">
                    <p>Primary Language: English</p>
                    <hr className='bg-black h-1' />
                    <p>{service.about}</p>
                </div>
            </div>
            <div className="w-full md:w-2/6 static right-0 space-y-4 mt-10">
                <p className='font-semibold text-lg'>Get to Know {service.owner}</p>
                <div className="flex items-center gap-3">
                    <img src={service.profile} alt={`${service.owner} image`} className='h-[100px] w-[100px] rounded-full object-cover' />
                    <div className="">
                        <p>{service.owner}</p>
                        <p>{service.title}</p>
                        <p className='flex items-center gap-1'><span className='flex items-center gap-1 font-bold'><FaStar /> {service.rating}</span> ({service.noOfReviews}) <i>|</i> <span className='font-semibold'>{service.ranking}</span></p>
                    </div>
                </div>
                <div className="flex items-center gap-4 justify-left">
                    <button className='font-bold text-blue-900 border border-blue-900 px-4 h-[40px] transition-colors duration-500 hover:bg-blue-900 hover:text-white'>Contact Me</button>
                    <button className='font-bold text-blue-900 border border-blue-900 px-4 h-[40px] transition-colors duration-500 hover:bg-blue-900 hover:text-white'>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails