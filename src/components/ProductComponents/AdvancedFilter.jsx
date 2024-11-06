import React, { useContext, useState } from 'react'
import { SolutionContext } from '../../context/SolutionContext'
import { FaSearch } from 'react-icons/fa'

const AdvancedFilter = () => {

    const {handleProductCategory, handleProductOrder, handleProductSearch} = useContext(SolutionContext)
    const [searchInput, setSearchInput] = useState(false)

    return (
        <div className='flex md:flex-row flex-col gap-4 justify-between mt-8 mx-10 px-5 shadow-[2xl] min-h-[80px]'>
            <div className="flex items-center justify-center">
                <p className='text-lg md:text-2xl font-semibold'>Filter Products By:</p>
            </div>
            <div className="flex flex-col  md:flex-row items-center gap-6">
                <div className="hidden md:block relative">
                    <div className={`${searchInput && "bg-blue-900 text-white"} px-2 h-[40px] border-[2px] border-blue-900 rounded-md cursor-pointer text-blue-900 flex items-center justify-center`} onClick={() => setSearchInput(!searchInput)}><FaSearch /></div>
                    {
                        searchInput && (
                            <div className="absolute right-full">
                                <input type="text" className='border-2 border-blue-900 rounded-md h-[45px] px-4' placeholder='Search Product...' onChange={handleProductSearch} />
                            </div>
                        )
                    }
                </div>
                <div className="md:hidden">
                    <input type="text" className='border-2 border-blue-900 rounded-md h-[45px] px-4' placeholder='Search Product...' onChange={handleProductSearch} />
                </div>
                <div className="w-[150px]">
                    <select className='w-full h-[40px] border-[2px] border-blue-900 rounded-md' onChange={handleProductCategory}>
                        <option value="All">All</option>
                        <option value="Trending">Trending</option>
                        <option value="Popular">Popular</option>
                        <option value="Official">Official</option>
                        <option value="Latest">Latest</option>
                    </select>
                </div>
                <div className="w-[150px]">
                    <select className='w-full h-[40px] border-[2px] border-blue-900 rounded-md' onChange={handleProductOrder}>
                        <option value="oldtonew">Old - New</option>
                        <option value="newtoold">New - Old</option>
                        <option value="atoz">A - Z</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AdvancedFilter