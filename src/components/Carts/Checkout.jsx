import React, { useContext } from 'react'
import { SolutionContext } from '../../context/SolutionContext'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const {getTotalCost, setCartItems} = useContext(SolutionContext)

    const shippingCost = 2000
    const overallCost = Number((getTotalCost()).toFixed(2)) + shippingCost

    return (
        <div className='pt-32 w-full flex flex-col items-center justify-center min-h-full'>
            <h1 className='font-bold text-2xl mb-4'>CheckOut Details</h1>
            <div className="flex flex-col md:flex-row w-full md:w-[90%] gap-10 justify-between">
                <div className="w-full md:w-[60%] shadow-gray-700 shadow-md rounded-md">
                    <div className="p-4 flex justify-between">
                        <div className="w-[150px] h-[150px]">
                            <img src={"/images/mastercard.png"} alt="mastercard logo" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-[150px] h-[150px]">
                            <img src={"/images/visa.png"} alt="visa logo" className='w-full h-full object-contain' />
                        </div>
                        <div className="w-[150px] h-[150px]">
                            <img src={"/images/paypal.png"} alt="paypal logo" className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <form className='flex flex-col justify-between gap-4 p-4 '>
                        <h2 className='font-bold text-xl text-center mb-4'>Shipping Information</h2>
                        <label className='flex flex-col items-start gap-1 font-bold'>
                            CardHolder Name
                            <input type="text" placeholder='CardHolder Name' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                        </label>
                        <label className='flex flex-col items-start gap-2 font-bold'>
                            Card Number
                            <input type="number" placeholder='Card Number' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                        </label>
                        <div className="flex gap-4">
                            <label className='flex flex-col items-start gap-2 font-bold w-[50%]'>
                                Expiry Date
                                <input type="date" placeholder='Expiry Date' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                            <label className='flex flex-col items-start gap-2 font-bold w-[50%]'>
                                CVC
                                <input type="number" placeholder='CVC' className='w-full h-[50px] px-2 text-base font-normal rounded-md border-[2px] border-gray-500 focus:border-orange-600' />
                            </label>
                        </div>
                        <Link to={"/"}><button className='w-full min-w-40 bg-blue-700 rounded-md py-3 font-bold text-white text-lg'>CheckOut</button></Link>
                    </form>
                </div>
                <div className="w-full md:w-[20%] shadow-gray-700 shadow-md rounded-md h-fit flex flex-col justify-between gap-4 p-4">
                    <h1 className='font-bold text-xl text-center mb-4'>Order Summary</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            <p className='italic font-semibold'>SubTotal</p>
                            <span className='font-bold'>#{(getTotalCost()).toFixed(0)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='italic font-semibold'>Transport Cost</p>
                            <span className='font-bold'>#{shippingCost}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className='italic font-semibold'>Discount</p>
                            <span className='font-bold'>#0</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <h3 className='text-xl font-bold'>Total</h3>
                            <span className='font-bold text-xl'>#{overallCost}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
