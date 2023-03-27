import React from 'react'
import Image3 from "../assets/image3.svg"
import Image5 from "../assets/image5.svg"

const DiscountCards = () => {
  return (
    <div className='grid grid-cols-fluideLayout gap-4'>
        <div className='DiscountCard'>
            <div className='w-full max-w-sm md:w-1/2'>
                <img className='object-cover' src={Image3} alt="randomimage" />
            </div>
            <div className='w-full md:w-1/2 text-left text-yellow-400'>
                <h3 className='text-gray-500'>TYT for Students</h3>
                <h1 className='text-4xl font-bold mt-6 mb-4 capitalize'>Get up to 50% off!</h1>
                <p className='capitalize'>are you a member of our partner student club?</p>
            </div>
        </div>
        <div className='DiscountCard'>
            <div className='w-full max-w-sm md:w-1/2'><img className='object-cover' src={Image5} alt="randomimage" /></div>
            <div className='w-full md:w-1/2 text-left text-yellow-400'>
                <h3 className='text-gray-500'>TYT for Students</h3>
                <h1 className='text-4xl font-bold mt-6 mb-4 capitalize'>Get up to 50% off!</h1>
                <p className='capitalize'>are you a member of our partner student club?</p>
            </div>
        </div>
    </div>
  )
}

export default DiscountCards