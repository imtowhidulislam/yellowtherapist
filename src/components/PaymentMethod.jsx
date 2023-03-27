import React from 'react'
import bkash from "../assets/bkash.png";
import dutch from "../assets/dutch.png";
import googlepay from "../assets/googlepay.png";
import mastercard from "../assets/mastercard.png";
import nagad from "../assets/nagad.png";
import visacard from "../assets/visacard.png";

const PaymentMethod = () => {
  return (
    <div className='py-20'>
        <h2 className='capitalize font-bold text-gray-500'>Secure and easy payment with wide range of checkout choices
        </h2>
        <div className='paymentContainer flex flex-wrap gap-4 items-center justify-center mt-8'>
            <h2 className='text-2xl capitalize font-bold text-gray-500'>pay with</h2>
            <div className='bg-gray-300 flex items-center justify-center rounded-md p-2 w-20 h-20'><img src={bkash} alt="" /></div>
            <div className='bg-gray-300 flex items-center justify-center rounded-md p-2 w-20 h-20'><img src={dutch} alt="" /></div>
            <div className='bg-gray-300 flex items-center justify-center rounded-md p-2 w-20 h-20'><img src={mastercard} alt="" /></div>
            <div className='bg-gray-300 flex items-center justify-center rounded-md p-2 w-20 h-20'><img src={nagad} alt="" /></div>
            <div className='bg-gray-300 flex items-center justify-center rounded-md p-2 w-20 h-20'><img src={visacard} alt="" /></div>
            <div className='w-32'><img className="object-cover" src={googlepay} alt="" /></div>
        </div>
    </div>
  )
}

export default PaymentMethod