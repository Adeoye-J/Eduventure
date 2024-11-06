import React, {useContext} from 'react'
import { SolutionContext } from '../../context/SolutionContext'
import { Link } from 'react-router-dom'

const Shipping = () => {

    const {cartItems, numCost, getItemTotalCost} = useContext(SolutionContext)

    return (
        <div className='pt-32 w-full flex flex-col items-center justify-center min-h-full'>
            <h1 className='font-bold text-2xl mb-4'>Shipping Details</h1>
            <div className="flex flex-col md:flex-row w-full md:w-[90%] gap-10 justify-between">
                <div className="w-full md:w-[60%] shadow-gray-700 shadow-md rounded-md">
                    <form className='flex flex-col justify-between gap-4 p-4 h-full '>
                        <div className="flex flex-col gap-4">
                            <h2 className='font-bold text-xl text-center mb-4'>Shipping Information</h2>
                            <label className='flex flex-col items-start gap-1 font-bold'>
                                Full Name
                                <input type="text" placeholder='Full Name' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                            <label className='flex flex-col items-start gap-2 font-bold'>
                                Address
                                <input type="text" placeholder='Address' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                            <label className='flex flex-col items-start gap-2 font-bold'>
                                City
                                <input type="text" placeholder='City' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                            <label className='flex flex-col items-start gap-2 font-bold'>
                                State
                                <input type="text" placeholder='State' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className='font-bold text-xl text-center mb-4'>Contact Information</h2>
                            <label className='flex flex-col items-start gap-1 font-bold'>
                                Email
                                <input type="email" placeholder='Email' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                            <label className='flex flex-col items-start gap-1 font-bold'>
                                Phone Number
                                <input type="number" placeholder='Phone Number' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-[20%] shadow-gray-700 shadow-md rounded-md h-fit flex flex-col justify-between gap-4 p-4">
                    <h1 className='font-bold text-xl text-center mb-4'>Your Order</h1>
                    <div className="flex flex-col gap-3">
                    {
                        cartItems.map((item, index) => (
                            <div className="flex items-center gap-2">
                                <div className="w-[90px] h-[90px]">
                                    <img src={item.image} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className="">
                                    <h2 className='font-semibold text-sm'>{item.title}</h2>
                                    <p className='font-medium text-sm italic'>{numCost[index].count} item(s)</p>
                                    <p className='font-semibold text-sm'>#{(getItemTotalCost(index)).toFixed(2)}</p>
                                </div>
                            </div>
                        ))
                    }
                    <Link to={"/checkout"}><button className='w-full min-w-40 bg-blue-700 rounded-md py-3 font-bold text-white text-lg'>Continue</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shipping