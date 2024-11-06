import React, { useContext, useState } from 'react'
import { SolutionContext } from '../../context/SolutionContext'
import {RiDeleteBinFill} from "react-icons/ri"
import { Link } from 'react-router-dom'

const Carts = () => {
  
  // const [itemNo, setItemNo] = useState(1)

  const {cartItems, handleRemoveFromCart, setProductItem, numCost, handleIncrement, handleDecrement, getItemTotalCost, getTotalCost} =useContext(SolutionContext)

  return (
  <div className='pt-32 flex flex-col items-center'>
    <Link to={"/products"}><button>Back</button></Link>
    <h2 className='font-bold text-2xl w-[90%] text-center'>Shopping Cart</h2>
    <div className='w-full my-6 flex items-center justify-center'>
      <table className='w-[90%] border-collapse'>
        <thead className='hidden md:table-header-group w-full mb-8 bg-gray-200'>
          <tr className='mb-8'>
            <th className='shadow-md p-4'>Product</th>
            <th className='shadow-md p-4'>Quantity</th>
            <th className='shadow-md p-4'>Price (#)</th>
            <th className='shadow-md p-4'>Action</th>
          </tr>
        </thead>
        <tbody className=''>
          {
            cartItems.length > 0 && (
              cartItems.map((data, index) =>(
                <tr className='w-full flex flex-col gap-4 pb-4 md:table-row border-b-4' key={index} >
                  <td className='flex items-center justify-center gap-4 my-8'>
                    <div className='w-32 h-32'>
                      <img src={data.image} alt="item" className='w-full h-full object-cover' />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className='font-bold '>{data.title}</h2>
                      <p className='font-semibold'>#{data.cost}</p>
                      <Link to={`/productdetails/${data.id}`}><button onClick={() => setProductItem(data)} className='border border-orange-500 rounded-md w-[120px] h-[40px] font-semibold hover:bg-orange-500 hover:text-white'>View Details</button></Link>
                    </div>
                  </td>

                  <td className='md:min-h-40'>
                    <div className="flex items-center justify-center h-full m-0">
                      <div className='cursor-pointer bg-orange-600 w-[30px] h-[30px] rounded-md flex items-center justify-center font-bold text-lg subtract' onClick={() => handleDecrement(index)}>-</div>
                      <div className='w-[30px] h-[30px] rounded-md flex items-center justify-center font-bold text-lg number'>{numCost[index].count}</div>
                      <div className='cursor-pointer bg-orange-600 w-[30px] h-[30px] rounded-md flex items-center justify-center font-bold text-lg add' onClick={() => handleIncrement(index)}>+</div>
                    </div>
                  </td>

                  <td className='md:min-h-40'>
                    <div className="flex items-center justify-center h-full m-0">
                      <p>#{(getItemTotalCost(index)).toFixed(2)}</p>
                    </div>
                  </td>

                  <td className='md:min-h-40'>
                    <div className="flex items-center justify-center h-full m-0" onClick={() => handleRemoveFromCart(data.id)}>
                        <RiDeleteBinFill className='cursor-pointer' size={20}/>
                    </div>
                  </td>

                </tr>
              ) )
            )
          }
        </tbody>
      </table>
    </div>
    <div className="flex flex-col items-center justify-center">
      {
        cartItems.length <= 0 && (
          <div className='flex items-center justify-center'>
            <p className='font-bold text-3xl text-center my-10'>No Item here</p>
          </div>
        )
      }
      <Link to={"/products"}><button className='bg-blue-500 text-white px-4 py-2 mt-4 border border-blue-500 rounded hover:bg-blue-600 font-semibold'>Continue Shopping</button></Link>
    </div>

    <div className="w-[90%] p-6 shadow-xl border rounded-md flex flex-col gap-4 my-10">
      <div className="flex justify-between items-center">
        <p>{cartItems.length} item(s)</p>
        <p>#{(getTotalCost()).toFixed(2)}</p>
      </div>
      {
        cartItems.length > 0 ? 
        <Link to={"/shipping"}><button className='bg-blue-700 rounded-md py-3 w-full font-bold text-white text-lg transition-colors duration-300 hover:bg-blue-900'>Continue</button></Link>
        :<button className='bg-gray-700 disabled rounded-md py-3 w-full font-bold text-white text-lg transition-colors duration-300'>Continue</button>
      }
    </div>
  </div>
  )
}

export default Carts