import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ServiceHero = () => {
  return (
    <div className="bg-orange-500 text-white flex items-center justify-center py-12 px-4 pt-20">
        <div className="max-w-7xl w-full grid md:grid-cols-2 items-center gap-10 text-center md:text-left">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
                <h1 className="text-[2.1rem] md:text-[2.5rem] lg:text-[3rem] font-bold mb-4">
                    Empower Your Ideas <br />
                    <span className="text-blue-950 text-[1.2rem] md:text-[1.6rem] lg:text-[2.3rem]">With Student Entrepreneurs</span>
                </h1>
                <p className="text-lg mb-8 font-bold">
                    Find the right service you need, right away!
                </p>

                <div className="flex flex-col lg:flex-row items-center gap-4 mb-8">
                    {/* Search Bar */}
                    <div className="flex min-w-[200px] w-full lg:w-[60%]">
                        <input
                            type="text"
                            placeholder="What skill are you looking for?"
                            className="w-full px-4 py-3 rounded-l-lg text-black focus:outline-none"
                        />
                        <button className="bg-blue-950 text-white px-6 py-3 rounded-r-lg transition-colors duration-500 hover:bg-blue-800">
                            <FaSearch size={20} />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <p className="mr-4">Or</p>
                        <button className="bg-blue-950 text-white px-6 py-3 rounded-lg transition-colors duration-500 hover:bg-blue-800">
                            Showcase Skill
                        </button>
                    </div>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {['Data Entry', 'Graphic Design', 'Web Development', 'Design', 'Writing'].map((tag, index) => (
                    <span key={index} className="bg-gray-300 text-gray-800 py-1 px-4 rounded-lg text-sm">
                        {tag}
                    </span>
                    ))}
                </div>
            </div>

            {/* Right Content - Image */}
            <div className="hidden md:flex items-center h-[350px] justify-center">
                <img
                    src="/images/services/service_hero1.png"
                    alt="Freelancer"
                    className="w-full h-full object-contain rounded-lg"
                />
            </div>
        </div>
    </div>
  );
};

export default ServiceHero;
