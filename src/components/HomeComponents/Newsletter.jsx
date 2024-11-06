import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-orange-400 p-4 md:p-8 lg:p-24 flex items-center justify-center w-full min-h-[80vh]'>
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
                <img src="/images/newsletter.jpg" alt="Newsletter Image" className='w-full h-full object-cover' />
            </div>
            <div className="md:w-1/2 p-8">
                <h1 className='text-[1.8rem] md:text-[2.4rem] mb-8 text-white font-bold text-center md:text-left'>Subscribe to Our Newsletter</h1>
                <input type="text" placeholder='Enter Your Email' className='w-full p-3 outline-none border border-white text-lg mb-8' />
                <div className="text-center">
                    <button className='h-[45px] px-6 border border-white text-white font-bold transition-all duration-300 hover:bg-white hover:text-orange-400'>Subscribe Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter