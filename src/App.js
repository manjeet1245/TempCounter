
import { useState } from 'react';
import './App.css';

function App() {

  const [count,setCount] = useState(0);

  // function decrState(){
  //   setCount( count-1);
  // }

  // function incrState(){
  //   setCount( count+1);
  // }
  return (
    <div className="App">
      <h1 className='app'>{count}</h1>
      <button className='incrBtn' onClick={() => setCount(count+1)}>INCR</button>
      <button className='decrBtn' onClick={() => setCount(count-1)}>DECR</button>
    </div>
  );
}

export default App;
