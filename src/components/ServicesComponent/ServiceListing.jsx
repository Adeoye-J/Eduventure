import React, { useState } from 'react'
import ServiceItem from './ServiceItem'

const ServiceListing = ({data}) => {

    const [visibleServices, setVisibleServices] = useState(12)

    const loadMore = () => {
        setVisibleServices((prevVisibleServices => prevVisibleServices + 4))
    }

    return (
        <div className='mb-10'>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10">
                {
                    data.length > 0 && 
                    data.slice(0, visibleServices).map((item, index) => (
                        <ServiceItem content={item} key={index} />
                    ))
                }
            </div>

            {
                data.length == 0 &&
                (
                    <div className="flex flex-col items-center justify-center mt-6 gap-2">
                        <img src="/images/productnotfound.png" alt="Product Not Found" />
                        <p className='text-lg font-bold text-center'>No Matched Service For Now. Try Searching Similar Services</p>
                    </div>
                )
            }

            {visibleServices < data.length && (
                <div className="flex flex-col items-center justify-center mt-6 gap-2">
                    <p className='text-lg font-bold'>Continue exploring</p>
                    <button onClick={loadMore} className='text-sm font-bold h-10 px-3 bg-blue-950 text-white rounded-md hover:bg-orange-400 transition duration-500'>Load More</button>
                </div>
            )}
        </div>
    )
}

export default ServiceListing
