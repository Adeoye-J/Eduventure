import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceListing = () => {

    const service_cards = [
        {
            "title": "Website Development",
            "cover_image": "/images/services/web_development.jpg" 
        },
        {
            "title": "Logo Design",
            "cover_image": "/images/services/logo.png"
        },
        {
            "title": "SEO",
            "cover_image": "/images/services/seo.jpg"
        },
        {
            "title": "Architecture & Interior Design",
            "cover_image": "/images/services/architecture.png"
        },
        {
            "title": "Social Media Marketing",
            "cover_image": "/images/services/social.png"
        },
        {
            "title": "Voice Over",
            "cover_image": "/images/services/voice_over.png"
        }
    ]

    return (
        <div className='px-6 space-y-4 my-10'>
            <h1 className='font-bold text-3xl'>Popular Services</h1>
            <div className="flex gap-4 flex-wrap">
                {
                    service_cards.map((item, index) => (
                        <ServiceCard service_data={item} key={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceListing