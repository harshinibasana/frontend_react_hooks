import React,{useState,useCallback} from 'react';
export default function UseCallbackExample(){
  const[count,setCount]=useState(0);
  const inc=useCallback(()=>setCount(c=>c+1),[]);
  return <div className='card'><h3>useCallback</h3>
    <button onClick={inc}>Increment</button>
    <p>Count: {count}</p>
  </div>;
}
