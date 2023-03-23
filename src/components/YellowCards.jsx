import React from 'react'
import imageOne from "../assets/image1.svg";
import Image2 from "../assets/image2.svg";
import Image3 from "../assets/image3.svg";

const YellowCards = () => {
  return (
    <div className='grid grid-cols-fluideLayout2 place-items-center'>
        <div className='p-2 md:p-8 max-w-3xl'>
            <img src={imageOne} alt="" />
            {/* <imageOne /> */}
        </div>
        <div className='text-left p-4'>
            <h2 className='text-4xl mb-8'>A bridge between</h2>
            <p>A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two.</p>
        </div>
    </div>
  )
}

export default YellowCards