import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex items-center justify-center min-h-[80vh] p-[2rem]'>
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
                <h1 className='mb-6 text-3xl font-bold text-orange-500'>Contact Us</h1>
                <form className='flex flex-col gap-6 w-full'>
                    <input type="text" placeholder='Name' className='px-4 outline-none border border-orange-500 h-[50px] w-full' />
                    <input type="email" placeholder='Email' className='px-4 outline-none border border-orange-500 h-[50px] w-full' />
                    <input type="number" placeholder='Phone Number' className='px-4 outline-none border border-orange-500 h-[50px] w-full' />
                    <textarea placeholder='Message' className='px-4 pt-2 h-[100px] border border-orange-500 outline-none'/>
                    <div className="text-center">
                        <button className='h-[45px] px-6 border border-orange-500 text-orange-500 font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white'>SEND</button>
                    </div>
                </form>
            </div>
            <div className="w-full md:w-1/2">
                <img src="/images/contactus.jpg" alt="Contact Us Image" className='w-full h-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default ContactUs