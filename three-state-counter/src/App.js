import React from "react";
import { useState } from "react";
import './App.css'


const App = () => {

  const [count,setCount] = useState(0);



  return (
    <div className="App">
      <header>
        <h1>Counter is  {count}</h1>
      </header>
      <button onClick={ () => ( count>=10 ? "" : setCount(count+1) ) }>Increase Counter </button>
      <button onClick={ () => ( count>0 ? setCount(count-1): "" )}>Decrease Counter </button>
      <button onClick={ () => setCount(0)}>Reset Counter </button>
    </div>    
  );

};

export default App;