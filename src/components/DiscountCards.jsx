import React from 'react'

const DiscountCards = () => {
  return (
    <div className='grid grid-cols-fluideLayout gap-4'>
        <div className='border-2 border-blue-400 flex items-center flex-col md:flex-row gap-4 w-full rounded-md p-6'>
            <div className='w-full md:w-1/2 '><img src="https://unsplash.it/500/500?image=445" alt="randomimage" /></div>
            <div className='w-full md:w-1/2 text-left text-yellow-400'>
                <h3 className='text-gray-500'>TYT for Students</h3>
                <h1 className='text-4xl font-bold mt-6 mb-4 capitalize'>Get up to 50% off!</h1>
                <p className='capitalize'>are you a member of our partner student club?</p>
            </div>
        </div>
        <div className='border-2 border-blue-400 flex items-center md:flex-row flex-col gap-4 w-full rounded-md p-6'>
            <div className='w-full md:w-1/2 '><img src="https://unsplash.it/500/500?image=445" alt="randomimage" /></div>
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