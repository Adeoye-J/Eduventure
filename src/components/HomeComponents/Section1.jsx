import React, {useState, useEffect} from 'react'
import cool_glasses from "/images/cool_glasses.jpg"
import cap from "/images/cap.jpg"
import camera from "/images/camera.jpg"
import fashion_bag from "/images/fashion_bag.jpg"
import google_glasses from "/images/google_glasses.jpg"
import black_stylish_bag from "/images/black_stylish_bag.jpg"

const Section1 = () => {

    const image_carousel = [
        {
            image: cool_glasses
        },
        {
            image: cap
        },
        {
            image: camera
        },
        {
            image: fashion_bag
        },
        {
            image: google_glasses
        },
        {
            image: black_stylish_bag
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % image_carousel.length)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='flex flex-col md:flex-row'>
            <div className="flex flex-col items-center justify-center h-[400px] p-12">
                <h1 className='text-center italic font-bold mb-4 text-2xl'>All Your Needs</h1>
                <p className='text-center text-xl'>It's all here. From supplies to tutorials to tech, we have everything you'll ever need for a smooth student-work-life balance.</p>
            </div>
            <div className='h-[400px] w-full flex items-center justify-center relative'>
                <div className="w-full h-full relative text-white">
                    {
                    image_carousel.map((carousel, index) => (
                        <div 
                            className={`absolute w-full h-full bg-cover bg-center bg-no-repeat object-contain bg-black/30 bg-blend-color flex items-center justify-center opacity-0 ${index === activeIndex && "opacity-100"}`} 
                            key={carousel.id}
                            style={{ backgroundImage: `url(${carousel.image})` }}
                        >
                        </div>
                    ))
                    }
                </div>
                <div className="absolute flex left-1/2 bottom-10 -translate-x-1/2 gap-4">
                    {image_carousel.map((_, index) => (
                    <span
                        key={index}
                        className={`block w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? "bg-black" : "bg-white"}`}
                        onClick={() => setActiveIndex(index)}
                    />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section1