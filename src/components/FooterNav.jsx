import React, { useEffect, useRef, useState } from 'react'
import {MdPeople,MdLogin,MdPrivacyTip} from "react-icons/md";
import {IoIosArrowDown,IoIosArrowUp} from "react-icons/io"
import {AiFillQuestionCircle} from "react-icons/ai"
import {BsFileTextFill}from "react-icons/bs"
import {FaRedhat,FaSignOutAlt} from "react-icons/fa" 
import {GiConqueror} from "react-icons/gi"

const FooterNav = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () =>{
        setShowNav(!showNav);
    }
    useEffect(() => {
        console.log(showNav);
    },[showNav])

  return (
    <div>
        <div>
            <div className='grid grid-cols-fluideLayoutPayment'>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <MdPeople  className='text-2xl' />
                    <p className='mt-2 capitalize'>Therapist</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <MdLogin className='text-2xl' />
                    <p className='mt-2 capitalize'>Login</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <FaSignOutAlt  className='text-2xl' />
                    <p className='mt-2 capitalize'>Signup</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <button type='button' onClick={handleNav}>
                        {
                            showNav ? <IoIosArrowDown  className='text-2xl transition-all duration-150 ease-in-out' /> : <IoIosArrowUp className='text-2xl transition-all duration-150 ease-in-out' />
                        }
                    </button>
                    <p className='mt-2 capitalize'>{showNav ? "Hide Menu" : "Show Menu"}</p>
                </div>
            </div>
            {
                showNav ? "" : <div className='grid grid-cols-fluideLayoutPayment1 mt-8'>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <GiConqueror className='text-2xl' />
                    <p className='mt-2 capitalize'>About TYT</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <FaRedhat className='text-2xl' />
                    <p className='mt-2 capitalize'>TYTFS</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <AiFillQuestionCircle className='text-2xl' />
                    <p className='mt-2 capitalize'>contact</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <BsFileTextFill className='text-2xl'/>
                    <p className='mt-2 capitalize'>terms and conditions</p>
                </div>
                <div className=' flex items-center flex-col font-bold text-yellow-400 '>
                    <MdPrivacyTip className='text-2xl'/>
                    <p className='mt-2 capitalize'>Privacy policy</p>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default FooterNav