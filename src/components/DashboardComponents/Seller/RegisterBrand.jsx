import React from 'react'

const RegisterBrand = () => {



    return (
        <div className=''>
            <form className='flex flex-col gap-6'>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>What's your store / brand name?</p>
                        <span className='text-gray-700 text-sm'>Enter the name of your store as you want it to appear to your customer</span>
                    </div>
                    <input className='w-full md:w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='Full Name' required />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>What's your store address?</p>
                        <span className='text-gray-700 text-sm'>This is the address where your store is located. If you don't have a store yet, please fill in an address from which you will ship. your orders</span>
                    </div>
                    <div className="w-full md:w-1/2 space-y-7">
                        <input className='w-full px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='Address' required />
                        <div className="w-full flex justify-between">
                            <input className='w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='State' required />
                            <input className='w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='Zip/Postal Code' />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                    <div className="w-full md:w-1/2">
                        <p className='font-bold text-xl'>What Product will you be selling?</p>
                        <span className='text-gray-700 text-sm'>Seperate them out with a comma. For example - Snacks, Shoes, Bags</span>
                    </div>
                    <input className='w-full md:w-1/2 px-3 h-[50px] border-2 rounded-md focus:border-black border-gray-500 outline-none' type="text" placeholder='Bags, Shoes, NoteBooks, Food' />
                </div>
                <button className='px-4 h-[40px] border border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white mt-10'>Save Information</button>
            </form>
        </div>
    )
}

export default RegisterBrand