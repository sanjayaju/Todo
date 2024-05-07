import React,{useState , useEffect}from 'react'


function Counter() {
    useEffect(()=>{
        console.log('mounting...');
        return()=>{
            console.log('unmounting..');
        }
    })
     const [count,setCount] =useState(0)
  return (
    <div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <h3 >im compo :{count}</h3></div>
  )
}

export default Counter