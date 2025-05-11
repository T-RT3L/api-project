import React from 'react'
import Apps from './Apps'
const AppsLayout = () => {
  return (
    <div className='h-fit md:h-1/2 absolute w-screen md:my-[5vh] md:p-6 my-auto'>
        <div className='grid md:border-1 md:border-gray-200 lg:grid-cols-3 backdrop-blur-xs md:grid-cols-2 grid-cols-1 md:px-5 md:rounded-4xl py-5'>
            <Apps text={"Weather"} url={"/weather/"}/>
            <Apps text={"Flashcards"} url={"/flashcards/"}/>
            <Apps text={"To Do List"} url={"/todo/"}/>
            <Apps text={"News"} url={"/news/"}/>
            <Apps text={"Notes"} url={"/notes/"}/>
            
        </div>
    </div>
    
  )
}

export default AppsLayout
