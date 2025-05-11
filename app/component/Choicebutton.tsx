"use client"
import React, { useState } from 'react'

const Choicebutton = (props:{text:String, id:Number, term:String, right:String}) => {
    const id = props.id;
    const [t, setT] = useState(props.text)
    const check = ()=>{
        if(t!=props.right){
            setT(props.term)
        }
    }
    return (
        <button onClick={()=>{check()
        }} className='bg-amber-100 md:p-4 text-[15px] border-2 h-20 overflow-clip '>
            {t}
        </button>
    )
}

export default Choicebutton
