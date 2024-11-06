import React from 'react'

const DashboardProfile = () => {

    return (
        <div className='w-full flex flex-col gap-6 p-6'>
            <h2 className='font-bold text-xl'>Edit Profile Information</h2>
            <form className='flex flex-col gap-8 w-[90%]'>
                <label className="flex flex-col gap-2 font-bold text-lg">
                    Full Name:
                    <input className='text-sm font-semibold px-2 h-[45px] border-2 border-blue-900 w-full placeholder:text-sm' type="text" placeholder='Enter Your Full Name' />
                </label>
                <label className="flex flex-col gap-2 font-bold text-lg">
                    Email Address:
                    <input className='text-sm font-semibold px-2 h-[45px] border-2 border-blue-900 w-full placeholder:text-sm' type="email" placeholder='Enter Your Email' />
                </label>
                <label className="flex flex-col gap-2 font-bold text-lg">
                    Profession:
                    <input className='text-sm font-semibold px-2 h-[45px] border-2 border-blue-900 w-full placeholder:text-sm' type="text" placeholder='Enter Your Profession' />
                </label>
                <label className="flex flex-col gap-2 font-bold text-lg">
                    Location:
                    <input className='text-sm font-semibold px-2 h-[45px] border-2 border-blue-900 w-full placeholder:text-sm' type="text" placeholder='Enter Your Location' />
                </label>
                <label className='flex flex-col gap-2 font-bold text-lg'>
                    About You:
                    <textarea className='text-sm font-semibold p-3 min-h-32 border-2 border-blue-900 w-full placeholder:text-sm' placeholder='Describe what you do and the services you render if applicable'></textarea>
                </label>
                <button className='px-4 h-[40px] border-2 border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white'>Update Profile</button>
            </form>
        </div>
    )
}

export default DashboardProfile