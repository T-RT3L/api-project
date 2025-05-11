import React from 'react'
import Link from 'next/link'
const Flashcardset = (props: { text: String, num: number}) => {
    const url = "/flashcards/"+props.num;
  return (
    
    <div className='border-2 rounded-2xl m-4 p-2 hover:bg-gray-100 transition-all'>
        <Link href={url}>
            <div className='text-2xl text-center'>
                {props.text}
            </div>
        </Link>
    </div>
    
    
  )
}

export default Flashcardset
