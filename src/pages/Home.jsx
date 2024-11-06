import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/HomeComponents/Card'
import Skills from '../components/HomeComponents/Skills'
import Section1 from '../components/HomeComponents/Section1'
import TrendingCarousel from '../components/HomeComponents/Trending'
// import Section2 from '../components/HomeComponents/Section2'
import Offer from '../components/HomeComponents/Offer'
import Reviews from '../components/HomeComponents/Reviews'
import Newsletter from '../components/HomeComponents/Newsletter'
import ContactUs from '../components/HomeComponents/ContactUs'

const Home = () => {

  const trending_items = [
    {
      image: "/images/cap.jpg",
      link: "/"
    },
    {
      image: "/images/shirt.jpg",
      link: "/"
    },
    {
      image: "/images/shoe.jpg",
      link: "/"
    },
    {
      image: "/images/phone.jpg",
      link: "/"
    },
    {
      image: "/images/trousers.jpg",
      link: "/"
    },
    {
      image: "/images/wristwatch.jpg",
      link: "/"
    },
    {
      image: "/images/popcorn.jpg",
      link: "/"
    }
  ]

  return (
    <>
      <Hero/>
      <Offer />
      <Section1 />
      <Skills/>
      <TrendingCarousel items={trending_items} />
      <Reviews />
      <Newsletter />
      <ContactUs />
    </>
  )
}

export default Home