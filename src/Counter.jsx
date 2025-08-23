import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0)
    const handleAdd = () => {
        
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
  return (
   <>
   <h1>Count: {count}</h1>
    <button style={{backgroundColor:'green'}} onClick={handleAdd}>Count</button>
    {(count === 0) ?  <button disabled style={{backgroundColor:'gray'}} onClick={handleReduce}>Count Reduce</button> :  <button style={{backgroundColor:'red'}} onClick={handleReduce}>Count Reduce</button>} 

   </>
  )
}
