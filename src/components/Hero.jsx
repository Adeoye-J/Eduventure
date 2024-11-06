import React from 'react'
// import Button from './ReUsables/Button'

const Hero = () => {
  return (
    <section style={{backgroundImage: "url('/images/hero.jpg')"}} className='pt-20 py-5 w-full bg-no-repeat bg-cover bg-black/60 bg-right bg-blend-color h-[420px] text-white flex flex-col justify-center pl-5 md:items-center md:text-center'>
      <h1 className='font-bold uppercase md:capitalize text-[1.3rem] md:text-4xl lg:text-5xl tracking-tight mb-4'>Empower Your Student Venture</h1>
      <p className='text-base w-3/4 lg:w-3/5'>Whether you're launching a side hustle or sharpening your skills, we'll help you grow your ventures and connect with a supportive community.</p>
      <a className="cursor-pointer underline max-w-[344px] mt-5 font-semibold text-xl hover:text-orange-600 hover:translate-x-5 md:hover:translate-x-0 md:hover:translate-y-2 transition-all duration-500">Start Your Journey</a>
    </section>
  )
}

export default Hero