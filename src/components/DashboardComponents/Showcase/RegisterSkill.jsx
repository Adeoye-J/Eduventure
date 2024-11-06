import React from 'react'

const RegisterSkill = () => {



    return (
        <div className=''>
            <form className='flex flex-col gap-6'>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>Service Title</p>
                        {/* <span className='text-gray-700 text-sm'>Enter the name of your store as you want it to appear to your customer</span> */}
                    </div>
                    <input className='w-full md:w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='My Expertise is....' required />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>Service Description</p>
                        <span className='text-gray-700 text-sm'>Briefly describe your service with keywords that employers would likely use to search</span>
                    </div>
                    <textarea className='w-full md:w-1/2 p-5 h-[180px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='Describe your skills with hashtags keywords' required ></textarea>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>Tools Used</p>
                        {/* <span className='text-gray-700 text-sm'>Enter the name of your store as you want it to appear to your customer</span> */}
                    </div>
                    <input className='w-full md:w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='State tools used for your service' required />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>Service Cost/hr</p>
                        {/* <span className='text-gray-700 text-sm'>Enter the name of your store as you want it to appear to your customer</span> */}
                    </div>
                    <input className='w-full md:w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='State your least service cost per hour' required />
                </div>
                <button className='px-4 h-[40px] border border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white mt-10'>Save Information</button>
            </form>
        </div>
    )
}

export default RegisterSkill