import React from 'react'
import Link from 'next/link'
const Apps = (props: {text:String, url:String}) => {
  return (
    <Link href={props.url} className='w-full h-full '>
        <div className='hover:bg-amber-200 transition-all  border-2 mx-4 my-2 p-3 lg:p-4  md:rounded-2xl  lg:py-6 md:py-3 py-4'>
            <div className='font-sans text-center my-auto text-xl sm:text-2xl md:text-3xl'>
                {props.text}
            </div>
            
        </div>
    </Link>
    
  )
}

export default Apps
