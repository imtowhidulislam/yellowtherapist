import React, { useEffect, useMemo, useRef, useState } from 'react'
import About from '../components/About'
import Buttons from '../components/Buttons'
import Clock from '../components/Clock'
import Day from '../components/Day'
import DiscountCards from '../components/DiscountCards'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav'
import Navbar from '../components/Navbar'
import PaymentMethod from '../components/PaymentMethod'
import Question from '../components/Question'
import Rununa from '../components/Rununa'
import Time from '../components/Time'
import Tyt from '../components/Tyt'
import YellowCard2 from '../components/YellowCard2'
import YellowCards from '../components/YellowCards'

const Homepage = () => {
  const targetRef = useRef(null);
  const [isVisible , setIsVisible] = useState(false);

  const cbFnc = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
}

const options = {
  root: null,
  rootMargin : "0px",
  threshold : 0,
} 
console.log(isVisible);
useEffect(() => {
    const currentTarget = targetRef.current;
    console.log(currentTarget);
    const observer = new IntersectionObserver(cbFnc, options)
    if(currentTarget) observer.observe(currentTarget)

    return () => {
        if(currentTarget) observer.unobserve(currentTarget)
    }

}, [targetRef,options]);
  

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

          <div className="mt-8 hidden md:block">
            <FooterNav />
          </div>
      </div>
    </>
  )
}

export default Homepage