import React from 'react'
import { FaDesktop } from 'react-icons/fa'
import {MdOutlineDesignServices, MdOutlineVideoLibrary, MdOutlineLibraryMusic, MdOutlinePersonPin} from "react-icons/md"
import {SiCoinmarketcap} from "react-icons/si"
import {BsTranslate} from "react-icons/bs"
import {AiOutlinePicture} from "react-icons/ai"
import {GrGroup} from "react-icons/gr"

const ServiceSnippets = () => {

    const snippets = [
        {
            icon: <FaDesktop />,
            text: "Programming & Tech"
        },
        {
            icon: <MdOutlineDesignServices />,
            text: "Graphics & Design"
        },
        {
            icon: <SiCoinmarketcap />,
            text: "Digital Marketing"
        },
        {
            icon: <BsTranslate />,
            text: "Writing & Translation"
        },
        {
            icon: <MdOutlineVideoLibrary />,
            text: "Video & Animation"
        },
        {
            icon: <AiOutlinePicture />,
            text: "AI Services"
        },
        {
            icon: <MdOutlineLibraryMusic />,
            text: "Music & Audio"
        },
        {
            icon: <GrGroup />,
            text: "Business"
        },
        {
            icon: <MdOutlinePersonPin />,
            text: "Consulting"
        }
    ]

    return (
        <div className='flex items-center justify-center my-4 px-3 md:px-6 w-full'>
            <div className="flex flex-wrap gap-2 w-fit justify-center">
                {
                    snippets.map((item, index) => (
                        <div key={index} className="rounded-md p-4 h-[100px] shadow-md w-[100px] md:w-[120px] lg:w-[135px] transition duration-500 cursor-pointer shadow-black/50 hover:scale-105">
                            <div className="mb-3 text-xl">{item.icon}</div>
                            <p className='text-[12px] font-bold'>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServiceSnippets