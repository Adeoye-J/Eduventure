import React, { useEffect, useRef } from 'react';

const Reviews = () => {
  const reviewsContainerRef = useRef(null);
  let scrollAmount = 0;

  const reviews = [
    {
        profile: "/images/avatar.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/avatar.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/avatar.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/avatar.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/avatar.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
    {
        profile: "/images/profile.png",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        name: "Jane Doe",
    },
  ]

  const cloneReviews = [...reviews, ...reviews];

  useEffect(() => {
    const scrollReviews = () => {
      const cardWidth = reviewsContainerRef.current.querySelector('.review-card').offsetWidth;
      const totalWidth = reviewsContainerRef.current.scrollWidth;

      scrollAmount += cardWidth + 20; // Adding margin between cards
      if (scrollAmount >= totalWidth / 2) {
        scrollAmount = 0; // Loop back to start
        reviewsContainerRef.current.scrollLeft = 0;
    } 
        

      reviewsContainerRef.current.scroll({
        left: scrollAmount,
        behavior: 'smooth',
      });
    };

    const intervalId = setInterval(() => {
      scrollReviews();
    }, 3000); // Change reviews every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="text-center p-5">
      <h2 className='text-[24px]'>Customer's <span className='bg-orange-600 text-white px-2'>Review</span></h2>
      <div className="flex justify-center gap-5 py-10 mt-5 overflow-hidden relative w-full" ref={reviewsContainerRef}>
        {
            cloneReviews.map((review) => (
                <div className="review-card bg-white p-5 rounded-lg min-w-[300px] shadow-lg text-center">
                    <div className="w-[100px] h-[100px] mb-[15px] m-auto">
                        <img src={review.profile} alt="Customer 1" className="w-full h-full object-cover border border-black rounded-[50%] " />
                    </div>
                    <p className='text-[14px] text-[#666]'>{review.description}</p>
                    <h3>{review.name}</h3>
                    <div className="text-orange-700 text-[20px]">★★★★★</div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Reviews;
