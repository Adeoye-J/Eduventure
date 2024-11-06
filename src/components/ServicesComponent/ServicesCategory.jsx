import React, { useEffect, useState } from 'react'
import services_data from "../../data/servicedata.json"
import ServiceListing from './ServiceListing'
import { FaSearch } from 'react-icons/fa'

const ServicesCategory = () => {

    const [serviceData, setServiceData] = useState(services_data)
    const [serviceSearchInput, setServiceSearchInput] = useState(false)
    const [serviceInput, setServiceInput] = useState("")
    const [serviceCategoryQuery, setServiceCategoryQuery] = useState("All")

    const handleServiceCategory = (e) => {
        setServiceCategoryQuery(e.target.value)
    }

    const handleServiceSearch = (e) => {
        setServiceInput(e.target.value)
    }

    useEffect(() => {
        let filteredData = services_data;
    
        // Filter by category if it's not "All"
        if (serviceCategoryQuery !== "All") {
            filteredData = filteredData.filter((item) => item.ranking.toLowerCase() === serviceCategoryQuery.toLowerCase());
        }
    
        // Filter by search input if it's not empty
        if (serviceInput !== "") {
            // filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(serviceInput.toLowerCase()));
            filteredData = filteredData.filter((item) => item.category.find((c) => c.toLowerCase().includes(serviceInput.toLowerCase())));
        }
    
        // Set the filtered data to serviceData
        setServiceData(filteredData);
    }, [serviceInput, serviceCategoryQuery]);
    



    return (
        <div className='px-10 my-10'>
            <div className="flex flex-col gap-3 md:flex-row justify-between mb-5 items-center">
                <p className='font-bold text-lg'>{serviceData.length} result(s)</p>
                <div className="relative flex items-center gap-4">
                    <div className={`${serviceSearchInput && "bg-blue-900 text-white"} px-2 h-[40px] border-[2px] border-blue-900 rounded-md cursor-pointer text-blue-900 flex items-center justify-center`} onClick={() => setServiceSearchInput(!serviceSearchInput)}><FaSearch /></div>
                    <div className={`md:${serviceSearchInput ? "flex" : "hidden"}`}>
                        <input type="text" className='border-2 border-blue-900 rounded-md h-[40px] px-4' placeholder='Search For Skill...' onChange={handleServiceSearch} />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <p className='font-bold text-[1rem] text-nowrap'>Sort by:</p>
                    <select onChange={handleServiceCategory} className='w-full h-[40px] border-[2px] border-blue-900 rounded-md'>
                        <option value="All">All</option>
                        <option value="Best Service">Best Service</option>
                        <option value="Top Rated">Top Rated</option>
                        <option value="Level 2">Level 2</option>
                    </select>
                </div>
            </div>
            <div className="">
                <ServiceListing data={serviceData} />
            </div>
        </div>
    )
}

export default ServicesCategory