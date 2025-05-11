"use client"

import React from 'react'

const Studybutton = (props:{text:String, funct:Function}) => {
    const a =()=>{
        props.funct()
    }
  return (
    <button onClick={a}>
        {props.text}
    </button>
  )
}

export default Studybutton
