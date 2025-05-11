"use client"
import React, { useState } from 'react'
import Studybutton from './Studybutton';
import Choicebutton from './Choicebutton';
const Study = () => {
    var [isSessionStarted, setSessionStarted] = useState(false);
    var [stats, setStats] = useState(
        {
        correct:0,
        wrong: 0,
        total: 0,
        }
    )
    const words = ['exploited', 'slavish', 'mahseer', 'vambrace', 'heterochromatin', 'pollacks', 'pyridoxal', 'trespass', 'duello', 'perpetuity', 'vocals', 'impanelling', 'rile', 'effectuate', 'trimester', 'bombardon', 'stressed', 'coverage', 'scattering', 'hackling', 'pinesaps', 'shadow', 'regulable', 'sprockets', 'spoonbills', 'meteoric', 'rots', 'cocotte', 'elutes', 'uprears', 'definite', 'overlapped','manslaughters', 'thermogram', 'proctitis', 'widdling', 'depolymerizing', 'outsing', 'floccule', 'jabirus', 'useability', 'depose', 'crenelated', 'claims', 'encephalic']
    var usedWords = []
    var [synonyms, setSynonyms] = useState([])
    var [choices, setChoices] = useState({})
    var [currentQuestion, setCurrentQuestion] = useState(0);
    const getAPIDefinitions = async(word)=>{
        const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
        const data = await res.json()
        const b = data[0]["meanings"][0]["definitions"]
        const def = b[0]["definition"]
        return def;
    }
    const getAPISynonymsAndDefinitions = async(word)=>{
        var synonymCount = 3
        const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/"+word)
        const data = await res.json()
        const b = data[0]["meanings"][0]["synonyms"]
        if(data[0]["meanings"][0]["antonyms"].length!=0){
            synonymCount = synonymCount-data[0]["meanings"][0]["antonyms"].length;
            b.push(data[0]["meanings"][0]["antonyms"])
        }
        for(let i =b.length; i<synonymCount; i++){
            const randomWord = words[Math.round(Math.random()*words.length)]
            if(randomWord == word){
                synonymCount+=1;
                continue;
            }else{
                b.push(randomWord)
            }
        }
        b.push(word)
        setSynonyms(b)
        var cho = {}
        for(let o = 0; o<synonyms.length; o++){
            cho[synonyms[o]] = (await getAPIDefinitions(synonyms[o]))
        }
        console.log(word, cho, b)
        setChoices(cho)
    }

    const start =()=>{
        setSessionStarted(true)
        studySession()
    }
    const studySession = ()=>{
        console.log(words[currentQuestion])
        getAPISynonymsAndDefinitions(words[currentQuestion])
        
    }

    const next = ()=>{
        setCurrentQuestion(currentQuestion+1)
        studySession()
    }
    const end = ()=>{
        setSessionStarted(false)
        setSynonyms([])
        setChoices({})
        setCurrentQuestion(0)
    }
    const check = (term)=>{
        if(term!=words[currentQuestion-2]){
            console.log("wrong")
        }else{
            console.log("right")
        }
    }
    return (
        <div className='w-screen h-screen'>
            {!isSessionStarted && <Studybutton text={"Start"} funct={start}/>}
            {isSessionStarted && 
            <div className='h-1/2'>
                <div className='w-full md:w-3/4 md:px-5 bg-amber-50 mx-auto text-center md:rounded-2xl h-full p-2 text-2xl font-sans'>
                    <h1>{words[currentQuestion-2]}</h1>
                    
                    <div className='grid grid-cols-2 space-y-2 space-x-2  translate-y-1/2'>
                    {
                        Object.entries(choices).map((key, value)=>(
                            <button className='bg-amber-100 md:p-4 text-[15px] border-2 h-20 overflow-clip' onClick={()=>{check(key[0])}}>{key[1]}</button>
                        )
                        )
                    }
                    <button className='bg-green-300 p-3' onClick={next}>
                        Next
                    </button>
                    </div>
                </div>
                <Studybutton text={"End"} funct={end}/>
            </div> 
            }
        </div>
    )
}

export default Study
