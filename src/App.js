
import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';

function App() {
  const [input , setInput] = useState('');
  const [messages , setMesseges] = useState(['hello','hiii']);

  const send=(event)=> {  
     event.preventDefault();
     setMesseges([...messages , input]);
     setInput('');
  }
    return (
    <div className="App">
      <h1>  hello world </h1>
      <form>
        <input value={input} onChange={event=> setInput(event.target.value)}/>
        <Button disabled={!input} variant="outlined" color="primary" type="button" onClick={send}>Send</Button>
      </form>
       {
         messages.map(msg=> (
          <p>{msg}</p>
            ))
         } 
    </div>
  );
}

export default App;
 