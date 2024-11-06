import React, { useState } from 'react'
import {TbCategoryPlus, TbCategoryMinus} from "react-icons/tb"
import ProductListing from './ProductListing';
import { RiCloseLine } from 'react-icons/ri';
import data from "../../data/productsdata.json"

const ProductFilter = () => {

    const [openCategory, setOpenCategory] = useState(false)
    const [category, setCategory] = useState("")
    const [categoryDialog, setCategoryDialog] = useState(false)

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    return (
        <div className='fixed w-full z-10 pt-20 bg-blue-700 text-white md:rounded-br-2xl md:rounded-bl-2xl h-36 flex justify-center gap-10 md:gap-20 items-center px-6'>
            <div className={`md:hidden border p-2 rounded-md cursor-pointer ${openCategory && "border-orange-600"}`} onClick={() => setOpenCategory(!openCategory)}>
                <div className="flex items-center gap-2">
                    {
                        openCategory 
                        ? <TbCategoryMinus size={28} className='text-orange-600' />
                        : <TbCategoryPlus size={28} />
                    }
                    <span className='font-bold'>Categories</span>
                </div>
            </div>
            <div className={`md:block overflow-x-auto ${openCategory ? "absolute top-36 z-10 bg-white text-blue-700 w-full py-6 block" : "hidden" }`}>
                <ul className={`flex items-center gap-8 text-lg font-semibold ${openCategory ? "flex-col" : "flex-row"}`}>
                    <li className='hover:text-orange-400 transition duration-500 cursor-pointer' onClick={() => {setCategory("men"); setCategoryDialog(true); setOpenCategory(false)}}>Men</li>
                    <li className='hover:text-orange-400 transition duration-500 cursor-pointer' onClick={() => {setCategory("women"); setCategoryDialog(true); setOpenCategory(false)}}>Women</li>
                    <li className='hover:text-orange-400 transition duration-500 cursor-pointer' onClick={() => {setCategory("beauty"); setCategoryDialog(true); setOpenCategory(false)}}>Beauty</li>
                    <li className='hover:text-orange-400 transition duration-500 cursor-pointer' onClick={() => {setCategory("food"); setCategoryDialog(true); setOpenCategory(false)}}>Food</li>
                    <li className='hover:text-orange-400 transition duration-500 cursor-pointer' onClick={() => {setCategory("stationeries"); setCategoryDialog(true); setOpenCategory(false)}}>Stationeries</li>
                </ul>
            </div>
            {
                categoryDialog &&
                <div style={{height: "100vh"}} className={`z-40 absolute ${openCategory ? "top-[460px]" : "top-[140px]"} md:top-[140px] right-0 w-full bg-gray-600 flex justify-center`}>
                    <div className="mt-2 absolute top-0 flex justify-end cursor-pointer z-30 rounded-md bg-white text-red-500 transition-colors duration-500 hover:text-white hover:bg-red-500"><RiCloseLine onClick={() => setCategoryDialog(false)} size={30} /></div>
                    <div className="fixed w-full h-full overflow-auto p-10">
                        <h2 className='font-bold text-2xl lg:text-2xl mb-3'>{capitalize(category)} Product(s)</h2>
                        <ProductListing data={data.filter((item) => item.category.find((c) => c === category))} visible={8} />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductFilter