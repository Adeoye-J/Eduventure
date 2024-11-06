import React from 'react'
import avatar from "/images/avatar.png"
import camera from "/images/camera.jpg"
import sell from "/images/sell4.jpg"
import service from "/images/service1.jpg"
import buy from "/images/buy.jpg"
import show from "/images/skill.jpg"
import { Link } from 'react-router-dom'

const Offer = () => {

    const cards = [
        {
            id: 1,
            title: "Buy A Product",
            description: "Explore products from studentpreneurs. Shop directly from aspiring entrepreneurs and support their ventures.",
            cta: "Explore Products",
            image: buy,
            link: "/products"
        },
        {
            id: 2,
            title: "Sell A Product",
            description: "Have something to sell? Showcase your products and start making sales as a studentpreneur.",
            cta: "Start Selling",
            image: sell,
            link: "/"
        },
        {
            id: 3,
            title: "Hire For Work",
            description: "Need a skilled hand? Hire studentpreneurs for services ranging from design to tutoring.",
            cta: "Hire Now",
            image: service,
            link: "/services"
        },
        {
            id: 4,
            title: "Showcase Work",
            description: "Offer a service? Promote your skills and get hired by individuals and businesses seeking your expertise.",
            cta: "Showcase Your Service",
            image: show,
            link: "/"
        }
    ]

  return (
    <div className='flex flex-col items-center px-4 lg:px-8 py-20 gap-10'>
        <div className="text-center">
            <h3 className='text-xl text-orange-600 uppercase font-bold mb-10'>What we Offer</h3>
            <p className='text-3xl font-semibold'>Features at a glance</p>
        </div>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {
                cards.map((card) => (
                    <Link to={card.link}>
                        <div style={{ backgroundImage: `url(${card.image})` }} className={`relative h-[300px] cursor-default bg-no-repeat bg-center bg-cover group hover:bg-black/75 hover:bg-blend-color transition-all duration-500 p-4 hover:flex flex-col justify-center items-center gap-4 border border-orange-600 rounded-md`} key={card.id}>
                            <h4 className='group-hover:hidden absolute left-0 bottom-4 text-center p-3 bg-white font-bold w-full text-blue-700'>{card.title}</h4>
                            <h4 className='hidden transition-all duration-500 group-hover:flex text-center font-bold text-white text-lg'>{card.title}</h4>
                            <p className='hidden group-hover:flex text-white font-semibold text-lg text-center transition-all duration-500'>{card.description}</p>
                            <button className='hidden group-hover:flex bg-white p-3 rounded-md font-semibold transition-all duration-300 hover:bg-orange-700 hover:text-white'>{card.cta}</button>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Offer