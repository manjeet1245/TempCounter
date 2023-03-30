
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(-1);

  function decrState(){
    // return(
      setCount( count-1)
      
  }

  function incrState(){
    // return(
      setCount( count+1)
      
  }
  
  return (
    <div className="App">
      <h1 className='app'>{count}</h1>
      <button className='incrBtn' onClick={ incrState}>INCR</button>
      <button className='decrBtn' onClick={decrState}>DECR</button>
    </div>
  );
}

export default App;
