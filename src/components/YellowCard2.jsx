import React from 'react'
import imageOne from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";

const YellowCard2 = () => {
  return (
    <div className='grid grid-cols-fluideLayout2 place-items-center'>
        <div className='text-left p-4 bg-[hsla(40,100%,90%,1)] relative h-52 rounded-md'>
            <h2 className='text-4xl mb-8'>A bridge between</h2>
            <p className='absolute bg-[#42ffdc9a] p-4 rounded-md drop-shadow-lg backdrop-blur-md left-8 right-8 top-20'>A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two.</p>
        </div>
        <div className='p-2 md:p-8 max-w-3xl'>
            <img src={Image2} alt="" />
        </div>
    </div>
  )
}

export default YellowCard2