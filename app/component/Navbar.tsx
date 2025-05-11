import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link'
import React from 'react'
import { RiArrowGoBackLine } from "react-icons/ri";

const Navbar = (props:{text:String, link:Url, hasReturn:Boolean}) => {
  return (
    <div className="z-10 backdrop-blur-xl h-32 lg:h-40 flex-row flex">
        {props.hasReturn &&
        <button className='absolute translate-y-1/2 w-16 lg:w-20 rounded-full hover:bg-red-400 transition-all duration-200 hover:border-1 ml-2'>
            
          <Link href={props.link}>
              <RiArrowGoBackLine className='mx-auto my-auto w-full h-full p-2'/>
          </Link>
        </button>
        }
        
        
        <div className='mx-auto text-2xl sm:text-3xl lg:text-4xl my-auto'>
            {props.text}
        </div>
    </div>
  )
}

export default Navbar
