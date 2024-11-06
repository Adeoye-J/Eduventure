import React from 'react'
import {  FaRegCaretSquareRight, FaShoppingCart, FaUserCircle } from "react-icons/fa"
import Button from '../ReUsables/Button'

const cardData = [
    { id: 1,
      icon: <FaShoppingCart/>,
      title: 'Order From Shop',
      paragraph: 'Order product directly from your favorite brand and get it delivered for free to your door step'
    },
    { id: 2,
      icon: <FaUserCircle/>,
      title: 'Hire Skilled Entrepreneur',
      paragraph: 'Discover reliable professionals by exploring their portfolio and immersing yourself in the feedback shared on their profiles.'
    },
    { id: 3,
      title: 'Get Started',
      paragraph: 'Hey creative entrepreneurs ready to stop doing business alone? Lets guide you.'
    }
]

const Card = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10 lg:flex-row px-1 md:px-12 mt-8 md:-mt-[6rem]'>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col justify-between items-center p-6 h-[280px] border border-orange-400 bg-white rounded-tl-[40px] w-[300px] xl:w-[400px] text-center space-y-3">
          <span className="text-2xl block text-orange-600 ">{cardData[0].icon}</span>
          <h2 className="text-lg font-bold">{cardData[0].title}</h2>
          <p className="text-gray-600">{cardData[0].paragraph}</p>
          <h4 className='text-orange-800 cursor-pointer'><FaRegCaretSquareRight size={24}/></h4>
        </div>
        <div className="flex flex-col justify-between items-center h-[280px] p-6 border border-blue-400 bg-white rounded-br-none md:rounded-br-[40px] w-[300px]  xl:w-[400px] text-center space-y-3">
          <span className="text-2xl block text-blue-600">{cardData[1].icon}</span>
          <h2 className="text-lg font-bold">{cardData[1].title}</h2>
          <p className="text-gray-600">{cardData[1].paragraph}</p>
          <h4 className='text-blue-800 cursor-pointer'> <FaRegCaretSquareRight size={24}/></h4>
        </div>
      </div>

      {/* last card */}
      <div className="h-[280px] flex flex-col justify-between p-6 text-white bg-blue-600 rounded-tl-none lg:rounded-tl-[40px] rounded-br-[40px] w-[300px] xl:w-[400px] space-y-3">
        <div className="placeholder hidden lg:block lg:text-2xl"></div>
        <h2 className="text-lg lg:text-xl font-bold">{cardData[2].title}</h2>
        <p className="text-white mb-4">{cardData[2].paragraph}</p>
        <Button className="bg-white border text-blue-600 rounded-md w-full max-w-[244px] p-2 font-bold">Get Started</Button>
      </div>
    </section>
  )
}

export default Card