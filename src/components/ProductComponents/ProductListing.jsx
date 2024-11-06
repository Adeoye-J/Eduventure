import React, {useContext, useState} from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { SolutionContext } from '../../context/SolutionContext'

const ProductListing = ({data, visible}) => {

    const {setProductItem} = useContext(SolutionContext)

    const [visibleProducts, setVisibleProducts] = useState(visible)

    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts => prevVisibleProducts + visible))
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data.length > 0 &&
                    data.slice(0, visibleProducts).map((item) => (
                        <Link to={`/productdetails/${item.id}`} onClick={() => setProductItem(item)}>
                            <ProductCard key={item.id} imgSrc={item.image} price={item.cost} title={item.title} reviews={item.reviews} author={item.owner} />
                        </Link>
                    ))
                }
            </div>

            {
                data.length == 0 &&
                (
                    <div className="flex flex-col items-center justify-center mt-6 gap-2">
                        <img src="/images/productnotfound.png" alt="Product Not Found" />
                        <p className='text-lg font-bold text-center'>No Matched Product For Now. Try Searching Similar Items</p>
                    </div>
                )
            }

            {visibleProducts < data.length && (
                <div className="flex flex-col items-center justify-center mt-6 gap-2">
                    <p className='text-lg font-bold'>Continue exploring</p>
                    <button onClick={loadMore} className='text-sm font-bold h-10 px-3 bg-blue-950 text-white rounded-md hover:bg-orange-400 transition duration-500'>Load More</button>
                </div>
            )}
        </>
    )
}

export default ProductListing