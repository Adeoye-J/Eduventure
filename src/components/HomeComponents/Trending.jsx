import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // For linking to details page

const TrendingCarousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    let intervalId;

    const moveCarousel = () => {
      if (!isPaused) {
        scrollAmount += 1;
        if (carousel) {
          if (scrollAmount >= carousel.scrollWidth / 2) {
            scrollAmount = 0;
          }
          carousel.scrollLeft = scrollAmount;
        }
      }
    };

    intervalId = setInterval(moveCarousel, 10); // Adjust speed by changing interval

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Handlers to pause and resume carousel on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
        <div className="mt-20 px-10 font-semibold text-2xl">
            <h2>Trending Products</h2>
        </div>
        <div
        className="overflow-hidden w-full p-10"
        ref={carouselRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        <div className="flex w-max">
            
            {items.map((item, index) => (
            <Link
                key={index}
                to={item.link}
                className="flex-shrink-0 w-64 h-40 mx-2"
            >
                <img
                src={item.image}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                />
            </Link>
            ))}
            {/* Duplicating the items to create infinite scroll effect */}
            {items.map((item, index) => (
            <Link
                key={index + items.length}
                to={item.link}
                className="flex-shrink-0 w-64 h-40 mx-2"
            >
                <img
                src={item.image}
                alt={`Carousel item ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                />
            </Link>
            ))}
        </div>
        </div>
    </>
  );
};

export default TrendingCarousel;
