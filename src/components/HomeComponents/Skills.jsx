import React from 'react'
import { FaStar } from 'react-icons/fa'

const data = [
  {
    id: 1,
    title: 'Design & Creative',
    rating: 5,
    total: '50 skills'
  },
  {
    id: 2,
    title: 'Writing & Translation',
    rating: 5,
    total: '120 skills'
  },
  {
    id: 3,
    title: 'Lessons & Tutoring',
    rating: 5,
    total: '50 skills'
  },
  {
    id: 4,
    title: 'Software Design',
    rating: 5,
    total: '18 skills'
  },
  {
    id: 5,
    title: 'Lifestyle & Personal',
    rating: 5,
    total: '126 skills'
  },
  {
    id: 6,
    title: 'Media',
    rating: 5,
    total: '31 skills'
  },
]



const Skills = () => {
  return (
    <section className='px-12 mt-[3rem]'>
        {/* <h1 className='text-2xl font-medium text-left'>Looking for a service to match your needs?</h1>
        <p>Browse Skills Set by Category</p> */}
        <h3 className='text-center text-xl text-orange-600 uppercase font-bold mb-10'>Browse Skills Set by Category</h3>
        <p className='text-center text-3xl font-semibold'>Looking for a service to match your needs?</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8'>
          {data.map((skills, index) => (
            <div key={index} className='flex flex-col font-normal items-start p-3 space-y-5 border rounded-xl border-orange-600'>
              <h3 className='text-base md:text-lg font-normal'>{skills.title}</h3>
              <div className='flex justify-between items-center w-full'>
                <div className="flex"> 
                  {/* {Array(skills.rating).fill().map((_, i) => (
                    <FaStar key={i} className="text-blue-600" />
                  ))} */}
                  {
                    [...Array(skills.rating)].map((_, index) => (
                      <FaStar 
                        key={index}
                        size={20}
                        className='cursor-pointer'
                        color='gold'
                      />
                    ))
                  }
                  { skills.rating < 5 &&
                    [...Array(5 - skills.rating)].map((_, index) => (
                      <FaStar 
                        key={index}
                        size={20}
                        className='cursor-pointer'
                      />
                    ))
                  }
                </div>
                <p className='mr-6'>{skills.total}</p>
              </div>

            </div>
          ))}

        </div>
    </section>
  )
}

export default Skills