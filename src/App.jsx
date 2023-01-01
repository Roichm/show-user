import { useState } from 'react';
import './App.css';

import User from "./components/user";

function App() {
  const [input, setInput] = useState(1);
  const handleInput = (e)=> {
    setInput(e.target.value)
  }
  return (
    <div className="App">

      <input type="number"
       value={input}
       onInput = {handleInput}
       min = {1}
       max= {10}
     
      
      />
      
      <User userid={input}/>
    </div>
  );
}

export default App;
