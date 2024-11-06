import React from 'react'
import ServiceHero from '../components/ServicesComponent/ServiceHero'
import ServiceSnippets from '../components/ServicesComponent/ServiceSnippets'
import ServiceListing from '../components/ServicesComponent/ServiceListing'
import ServicesCategory from '../components/ServicesComponent/ServicesCategory'

const Services = () => {
  return (
    <div>
        <ServiceHero />
        <ServiceSnippets />
        <ServicesCategory />
    </div>
  )
}

export default Services