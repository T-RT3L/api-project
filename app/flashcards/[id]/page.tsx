


import React from 'react'
import Navbar from '@/app/component/Navbar';
import Study from '@/app/component/Study';
const page = ({ params}: {params:{id:String}}) => {
    const {id} = React.use(params);
    
    //process
    // first: we start the session once the user presses the "start" button
    // second: we retrieve the local word list in out.txt and get an index range of [0,whatever]
    // third: get random word from the words and add it to "alreadyUsedWords" variable list 
    // fourth: from that random word, get the definition and synonyms, (use the synonyms to create the choices and the definition to compare for the right answer)
    // fifth: display the word with four choices: one right and three wrong (use buttons)
    // sixth: wait till the user answers and compare the it
    // seventh: if right: change the wrong answers to their synonyms and display an example of the study word
    // eigth: once the user hits "next" button, move on to the next button and repeat
    // END: have a button that allows the user to end the session
    //   1. after the end, display the overall stats 
    // Restart: have a button that allows the user to restart the session

  return (
    <div className='w-screen h-screen box-border bg-amber-100'>
      <Navbar text={"Flashcard Set #" +id} link="/flashcards" hasReturn={true}/>
      <Study/>
      
    </div>
  )
}

export default page
