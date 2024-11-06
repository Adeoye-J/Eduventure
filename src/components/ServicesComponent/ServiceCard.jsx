import React from 'react'
import service_data from "../../data/servicedata.json"

const ServiceCard = ({service_data}) => {
  return (
    <div className='cursor-pointer p-2 bg-blue-950 text-white rounded-lg w-full sm:w-[150px] md:w-[200px] h-[240px] flex flex-col justify-between items-center'>
        <h2 className='p-2 mb-2 text-center'>{service_data.title}</h2>
        <div className="h-[150px] w-full rounded-lg">
            <img src={service_data.cover_image} alt="" className='rounded-lg w-full h-full object-cover transition duration-500 hover:scale-105' />
        </div>
    </div>
  )
}

export default ServiceCard