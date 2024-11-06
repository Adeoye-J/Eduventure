import React from 'react'
import ProductFilter from '../components/ProductComponents/ProductFilter'
import ProductsHero from '../components/ProductComponents/ProductsHero'
import AdvancedFilter from '../components/ProductComponents/AdvancedFilter'
import ProductCategory from '../components/ProductComponents/ProductCategory'

const Products = () => {
  return (
    <div>   
      <ProductFilter />
      <ProductsHero />
      <AdvancedFilter />
      <div className="m-10">
        <ProductCategory />
      </div>
    </div>
  )
}

export default Products
