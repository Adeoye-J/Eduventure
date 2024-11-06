import React from 'react'
import data from "../../data/productsdata.json"
import ProductListing from './ProductListing'

const AllProducts = () => {
  return (
    <div>
        <div className='mb-20'>
            <h2 className='font-bold text-2xl lg:text-2xl mb-3'>All Products</h2>
            <ProductListing data={data} visible={8} />
        </div>
    </div>
  )
}

export default AllProducts