import React from 'react'

const Buttons = () => {
  return (
    <div>
        <div className='py-buttonContainerPadY'>
            <h2 className='text-buttonTitle font-bold pb-buttonPadX'>what are you looking for?</h2>
            <div className='flex gap-x-buttonPadX items-center justify-center'>
                <button className='capitalize text-buttonText border-2 border-buttonClr px-buttonPadX py-buttonPadY rounded-md bg-transparent hover:bg-buttonClr hover:border-transparent transition-colors duration-200 ease-out'>i need a therapist</button>
                <span>or,</span>
                <button className='capitalize text-buttonText bg-buttonClr px-buttonPadX py-buttonPadY border-2 border-transparent hover:border-buttonClr hover:bg-transparent rounded-md transition-colors duration-200 ease-out'>i am a therapist</button>
            </div>
        </div>
    </div>
  )
}

export default Buttons