import React from 'react'

const DashboardSettings = () => {



    return (
        <div className='p-10 flex flex-col gap-10 w-full'>
            <h1 className='font-bold text-2xl'>Manage Preference</h1>
            <div className="flex items-center gap-3 font-bold">
                Mode:
                <select className='h-[45px] font-semibold rounded-md border-2 border-blue-900'>
                    <option value="Light Mode">Light Mode</option>
                    <option value="Dark Mode">Dark Mode</option>
                </select>
            </div>
            <div className="flex items-center gap-3 font-bold">
                Language:
                <select className='h-[45px] font-semibold rounded-md border-2 border-blue-900'>
                    <option value="English">English</option>
                </select>
            </div>
            <button className='font-bold px-4 h-[45px] border-2 border-blue-900 text-blue-900 transition duration-500 hover:bg-blue-900 hover:text-white'>Save Preference</button>
        </div>
    )
}

export default DashboardSettings