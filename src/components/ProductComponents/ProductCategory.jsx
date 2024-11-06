import React, { useContext, useEffect, useState } from 'react'
import ProductListing from './ProductListing'
import data from "../../data/productsdata.json"
import { SolutionContext } from '../../context/SolutionContext'

const ProductCategory = () => {

    const {categoryQuery, searchQuery, order} = useContext(SolutionContext)

    const [categoryData, setCategoryData] = useState(data)

    useEffect(() => {
        let new_data;

        if (categoryQuery === "All") {
            new_data = data
            setCategoryData(new_data)
        } else {
            new_data = data.filter((item) => item.section === categoryQuery.toLowerCase())
            setCategoryData(new_data)
        }

        if (order === "oldtonew") {
            setCategoryData(new_data)
        } else if (order === "newtoold") {
            setCategoryData(prevCategoryData => prevCategoryData.slice().reverse())
        } else if (order === "atoz") {
            setCategoryData(prevCategoryData => prevCategoryData.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' })))
        }

        if (searchQuery !== "") {
            const filtered_data = categoryData.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
            setCategoryData(filtered_data)
        }
    }, [categoryQuery, order, searchQuery])

    return (
        <div className='mb-20'>
            <h2 className='font-bold text-center md:text-left text-xl lg:text-2xl mb-3'>{searchQuery !== "" ? searchQuery : categoryQuery} Product(s)</h2>
            <ProductListing data={categoryData} visible={8} />
        </div>
    )
}

export default ProductCategory