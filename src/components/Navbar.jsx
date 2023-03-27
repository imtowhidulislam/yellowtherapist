import React from 'react'
import Clock from './Clock'
import Time from './Time'
import {Gi3DGlasses, GiConqueror}from "react-icons/gi"

const Navbar = () => {
  return (
    <div className='bg-emerald-400 px-4 md:px-8 xl:px-0 mb-20'>
        <div className='flex items-center justify-between py-2 container'>
            <div className='text-4xl font-bold'>
                <Gi3DGlasses />
            </div>
            <div className='flex items-center gap-4'>
                <div>
                    <p>Guest User</p>
                </div>
                <div>
                    <Clock />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar