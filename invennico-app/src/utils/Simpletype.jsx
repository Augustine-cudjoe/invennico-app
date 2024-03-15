import React from 'react'
import { Typewriter, useTypewriter } from 'react-simple-typewriter'
function Simpletype() {
    const [text]=useTypewriter({
        words:['create Beautiful Digital Experience',' Shape and Scale Your Idea!'],
        loop:{}

    })
  return (
    <div className='simpletype'>
      <h1 className='mx-md-5 ps-md-5 '>
        Let's 
         <span className='text-bold text-black'>
          {text}
        </span>
      </h1>
    </div>
  )
}

export default Simpletype;