import React from 'react'
import profile from "/images/profile.png"

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 2,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 3,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 4,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 5,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 6,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 7,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 8,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 9,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        },
        {
            id: 10,
            name: "Josephine Taylor",
            image: profile,
            role: "Web Developer",
            comment: "There's never been a better site that enables an all in one flexibility for earning and selling with ease."
        }
    ]

    return (
        <div>
            {
                testimonials.map((testimonial) => (
                    <div className=""></div>
                ))
            }
        </div>
    )
}

export default Testimonials