import React, { useContext, useState } from 'react'
import { SolutionContext } from '../../context/SolutionContext'
import { FaStar, FaVoicemail } from 'react-icons/fa';
import data from '../../data/productsdata.json';
import ProductListing from './ProductListing';
import ProductFilter from './ProductFilter';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { productItem, cartItems, handleCart} = useContext(SolutionContext)

    const similarData = data.filter((item) => item.title.toLowerCase().includes(productItem.title.toLowerCase()))

    if (!productItem) {
        return <div>Product not found!</div>
    }

    const { image, image2, image3, image4 } = productItem
    const images = [image, image2, image3, image4].filter(Boolean) // Filter out undefined or null images

    const [displayedImage, setDisplayedImage] = useState(images[0])
    const [value, setValue] = useState(1)

    const handleAdd = () => {
        setValue((prevValue) => prevValue + 1)
    }
    const handleSubtract = () => {
        if (value > 1) {
            setValue((prevValue) => prevValue - 1)
        }
    }

    

    return (
        <>
            {/* <ProductFilter /> */}
            <div className="flex md:flex-row flex-col items-center gap-4 min-h-[100vh] pt-24 mx-5 md:mx-10">
                <div className="w-full md:w-2/5 flex flex-col gap-1">
                    <div className="flex flex-col h-[500px]">
                        <div className="w-full h-4/5">
                            <img
                                src={displayedImage}
                                alt="product_image"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-wrap w-full h-1/5">
                            {images.map((imgSrc, index) => (
                                <div className={`w-1/4 h-full  ${displayedImage && "border border-red-500"}`}>
                                    <img
                                        key={index}
                                        src={imgSrc}
                                        alt={`product_image_${index + 1}`}
                                        onClick={() => setDisplayedImage(imgSrc)}
                                        className="cursor-pointer w-full h-full object-cover bg-center"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <span className='flex items-center gap-1'>
                            {
                                [...Array(productItem.reviews)].map((_, index) => (
                                    <FaStar 
                                        key={index}
                                        size={20}
                                        className='cursor-pointer'
                                        color='gold'
                                    />
                                ))
                            }
                            {   productItem.reviews < 5 &&
                                [...Array(5 - productItem.reviews)].map((_, index) => (
                                    <FaStar 
                                        key={index}
                                        size={20}
                                        className='cursor-pointer'
                                    />
                                ))
                            }
                        </span>
                    </div>
                </div>

                <div className="w-full md:w-2/5 flex flex-col gap-8">
                    <h2 className='text-3xl font-bold'>{productItem.title}</h2>
                    <p className='font-semibold text-xl'>Price: ${productItem.cost * value}</p>
                    <div className="flex gap-1 items-center">
                        <div className="cursor-pointer px-4 h-10 shadow-md rounded-md bg-gray-700 text-white flex items-center" onClick={handleSubtract}>-</div>
                        <div className="add px-4 h-10 flex items-center">{value}</div>
                        <div className="cursor-pointer px-4 h-10 shadow-md rounded-md bg-gray-700 text-white flex items-center" onClick={handleAdd}>+</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link to={"/shipping"}>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 border border-blue-500 rounded hover:bg-blue-600 font-semibold">
                                Buy Now
                            </button>
                        </Link>
                        <button className="bg-white text-blue-500 px-4 py-2 mt-4 border border-blue-500 rounded hover:bg-blue-600 hover:text-white font-semibold" onClick={handleCart}>
                            {cartItems.includes(productItem) ? "Remove From Cart" : "Add to Cart"}
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/5">
                    <h2 className='md:text-center text-left font-bold text-xl md:text-2xl mb-4 mt-4'>Product Owner</h2>
                    <div className="flex gap-2 items-center">
                        <div className="w-[70px] h-[70px]">
                            <img src="/images/avatar.png" alt="profile image" className='w-full h-full object-cover rounded-full' />
                        </div>
                        <div className="">
                            <h3 className='font-bold text-xl'>{productItem.owner}</h3>
                            <p className='flex gap-2 items-center cursor-pointer'><FaVoicemail /><span>Start Conversation</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-10 my-4 w-full md:w-4/5">
                <h2 className='text-xl md:text-2xl text-center md:text-left font-bold mb-2'>Item Specification / Description</h2>
                <p className='text-justify md:text-left text-gray-700 text-[16px] md:text-xl'>{productItem.description}</p>
            </div>
            <div className='mx-10 my-16'>
                <h2 className='font-bold text-2xl lg:text-2xl mb-3'>Similar Items</h2>
                <ProductListing data={similarData} />
            </div>
        </>
    )
}

export default ProductDetails
