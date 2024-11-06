import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const handleClick = (getCurrentIndex) => {
        console.log("nothing")
    }

    console.log(...Array(10))

    return (
        <div className=''>
            {
                [...Array(noOfStars)].map((_, index) => (
                    <FaStar 
                        key={index}
                        onClick={handleClick}
                    />
                ))
            }
        </div>
    )
}

export default StarRating