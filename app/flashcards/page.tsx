import Link from 'next/link'
import React from 'react'
import Flashcardset from '../component/Flashcardset'
import Navbar from '../component/Navbar'
import Image from "next/image";

import background from "../images/flashcardBack.jpg"
const page = () => {
  return (
    <div className='w-screen h-screen '>
      <Image src={background} className="w-screen h-screen object-cover absolute" alt="image"></Image>
      <Navbar text="Flashcard Utility" link="/" hasReturn={true}/>
      <div className='w-3/4 h-fit mx-auto flex justify-center'>
        <section className='border-1 border-gray-500 lg:backdrop-blur-2xl md:mt-12 md:backdrop-blur-xs backdrop-blur-2xl grid md:grid-cols-2 lg:grid-cols-3 space-y-4 absolute w-full p-4 md:h-fit'>
          <Flashcardset text="Flashcard #1" num={1}/>
          <Flashcardset text="Flashcard #2" num={2}/>
          <Flashcardset text="Flashcard #3" num={3}/>
          <Flashcardset text="Flashcard #4" num={4}/>
        </section>
      </div>
      
    
    
    </div>
  )
}

export default page
