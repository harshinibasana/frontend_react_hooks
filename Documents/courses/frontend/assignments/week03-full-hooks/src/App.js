import React from 'react';
import {ThemeProvider} from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import UseMemoExample from './components/UseMemoExample';
import UseRefExample from './components/UseRefExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseReducerExample from './components/UseReducerExample';
import UseStateEffectExample from './components/UseStateEffectExample';
import NameSaver from './components/NameSaver';

export default function App(){
  return (
    <ThemeProvider>
      <div style={{padding:'1rem'}}>
        <h1>All Hooks Examples</h1>
        <ThemeToggle/>
        <UseStateEffectExample/>
        <UseMemoExample/>
        <UseRefExample/>
        <UseCallbackExample/>
        <UseReducerExample/>
        <h2>useLocalStorage Example</h2>
      <NameSaver/>
      </div>
    </ThemeProvider>
  );
}
