import React from 'react'
import About from '../components/About'
import Buttons from '../components/Buttons'
import DiscountCards from '../components/DiscountCards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PaymentMethod from '../components/PaymentMethod'
import Question from '../components/Question'
import Rununa from '../components/Rununa'
import Tyt from '../components/Tyt'
import YellowCard2 from '../components/YellowCard2'
import YellowCards from '../components/YellowCards'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='container px-2 md:px-12'>
          <DiscountCards />
          <Buttons />
          <YellowCards />
          <YellowCard2 />
          <PaymentMethod />
          <About />
          <Question />
          <Footer />
          <Rununa />
          <Tyt />
      </div>
    </>
  )
}

export default Homepage