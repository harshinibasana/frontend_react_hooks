import React,{useState,useEffect} from 'react';
export default function UseStateEffectExample(){
  const[count,setCount]=useState(0);
  const[timer,setTimer]=useState(0);
  useEffect(()=>{
    const id=setInterval(()=>setTimer(t=>t+1),1000);
    return ()=>clearInterval(id);
  },[]);
  return <div className='card'><h3>useState + useEffect</h3>
    <button onClick={()=>setCount(c=>c+1)}>Increment</button>
    <p>Count: {count}</p>
    <p>Timer: {timer}</p>
  </div>;
}
