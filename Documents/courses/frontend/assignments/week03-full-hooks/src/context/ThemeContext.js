import React,{createContext,useState,useEffect} from 'react';
export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
  const[theme,setTheme]=useState('light');
  useEffect(()=>{document.documentElement.setAttribute('data-theme',theme)},[theme]);
  return <ThemeContext.Provider value={{theme,toggle:()=>setTheme(t=>t==='light'?'dark':'light')}}>{children}</ThemeContext.Provider>;
};
