import React,{useReducer} from 'react';
function reducer(state,action){
  switch(action.type){
    case 'inc':return state+1;
    case 'dec':return state-1;
    default:return state;
  }
}
export default function UseReducerExample(){
  const[state,dispatch]=useReducer(reducer,0);
  return <div className='card'><h3>useReducer</h3>
    <button onClick={()=>dispatch({type:'dec'})}>-</button>
    <span style={{margin:'0 1rem'}}>{state}</span>
    <button onClick={()=>dispatch({type:'inc'})}>+</button>
  </div>;
}
