import React,{useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';
export default()=>{const{theme,toggle}=useContext(ThemeContext);return <button onClick={toggle}>Theme: {theme}</button>}
