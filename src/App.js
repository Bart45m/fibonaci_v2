import { useState } from 'react';

function App() {

  const [number, setNumber] = useState('')
  const [values, setValues] = useState([])

  const fibonacci = (event) => {
     
    const list = [0, 1];
    for(let x=2;x<number;x+=1){
       list.push(list[x - 2] + list[x - 1]);
    }
    setValues(list);
  }

  return (
    <div className="App">
      <h1>Fibonacci Finder</h1>
      <h2>Get the Fibonacci sequence of</h2>
      <input onChange={e => setNumber(e.target.value)}/>
      <button onClick={fibonacci}>Find Sequence</button>
      <div>{values.map(value => value+', ')}</div>
    </div>
  );
}

export default App;
