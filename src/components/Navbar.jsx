import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-emerald-400 px-4 md:px-8 xl:px-0'>
        <div className='flex items-center justify-between py-2 container'>
            <div className='w-12 aspect-square overflow-hidden cursor-pointer'>
                <img className='object-cover rounded-full' src="https://unsplash.it/500/500?image?=656" alt="Logo" />
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <p>Guest User</p>
                </div>
                <h2>Time Area</h2>
            </div>
        </div>
    </div>
  )
}

export default Navbar