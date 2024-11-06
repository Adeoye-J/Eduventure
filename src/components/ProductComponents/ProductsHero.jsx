import React, { useEffect, useState } from 'react'
import pinkBag from '/images/pink_bag.jpg';
import perfumes from '/images/perfumes.jpg';
import redBag from '/images/red_bag.jpg';
import blackBag from '/images/black_bag.jpg';

const ProductsHero = () => {

    const carousels = [
        {
            id: 1,
            image: pinkBag,
            content: "Best Offer"
        },
        {
            id: 2,
            image: redBag,
            content: "Extra 5% Off"
        },
        {
            id: 3,
            image: blackBag,
            content: "Deal Zone"
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % carousels.length)
        }, 10000)

        return () => clearInterval(interval)
    }, [])   

    return (
        <div className='h-[80vh] w-full flex items-center justify-center relative md:px-10'>
            <div className="w-full h-full relative text-white">
                {
                carousels.map((carousel, index) => (
                    <div 
                        className={`absolute w-full h-full bg-cover bg-center bg-no-repeat object-contain bg-black/30 bg-blend-color flex items-center justify-center opacity-0 ${index === activeIndex && "opacity-100"}`} 
                        key={carousel.id}
                        style={{ backgroundImage: `url(${carousel.image})` }}
                    >
                        <div className="">
                            <h2 className='font-bold text-3xl text-center'>{carousel.content}</h2>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="absolute flex left-1/2 bottom-10 -translate-x-1/2 gap-4">
                {carousels.map((_, index) => (
                <span
                    key={index}
                    className={`block w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? "bg-black" : "bg-white"}`}
                    onClick={() => setActiveIndex(index)}
                />
                ))}
            </div>
        </div>
    )
}

export default ProductsHero