import React from 'react'
import About from '../components/About'
import Buttons from '../components/Buttons'
import DiscountCards from '../components/DiscountCards'
import PaymentMethod from '../components/PaymentMethod'
import Question from '../components/Question'
import YellowCard2 from '../components/YellowCard2'
import YellowCards from '../components/YellowCards'

const Homepage = () => {
  return (
    <div className='container px-2 md:px-0'>
        <DiscountCards />
        <Buttons />
        <YellowCards />
        <YellowCard2 />
        <PaymentMethod />
        <About />
        <Question />
    </div>
  )
}

export default Homepage