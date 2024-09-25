import React, { useState } from 'react'

const Incdec = () => {
    const [num, setNum]= useState(0)
    const increment =() =>{
        setNum(num+100)
    }
    const decrement =() =>{
        setNum(num-100)
        if(num===0){
            alert('0 not decrease')
        }
    }
  return (
    <div>
      <h2>
        {num}</h2>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default Incdec