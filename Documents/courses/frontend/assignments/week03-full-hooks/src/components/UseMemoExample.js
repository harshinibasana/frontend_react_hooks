import React,{useMemo,useState} from 'react';
export default function UseMemoExample(){
  const[n,setN]=useState(0);
  const double=useMemo(()=>n*2,[n]);
  return <div className='card'><h3>useMemo</h3>
    <input type='number' value={n} onChange={e=>setN(+e.target.value)}/>
    <p>Double: {double}</p>
  </div>;
}
