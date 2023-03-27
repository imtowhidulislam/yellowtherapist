import React from 'react'
import {AiOutlineCopyright} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='grid place-content-center py-4'>
        <div className='flex items-center  justify-center gap-4 mb-1'>
            <p className='flex items-center gap-2 capitalize text-gray-400'><div><AiOutlineCopyright /></div> the yellow therapist</p>
            <p className=' capitalize text-gray-400'>all rights reserved</p>
        </div>
        <div className='flex items-center gap-4'>
            <a href='#' className='footerLinks footerLink1 capitalize text-gray-400'>terms and condition</a>
            <a href='#' className=' footerLinks footerLink2 capitalize text-gray-400'>privacy policy</a>
            <a href='#' className=' footerLinks footerLink3 capitalize text-gray-400'>contact us</a>
        </div>
    </div>
  )
}

export default Footer