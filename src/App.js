
import './App.css';
import Button from './components/Button.js'
import Screen from './components/Screen.js';
import ClearButton from './components/ClearButton.js';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState('');

  const addInput = value => {
    setInput(input + value);
  };

  return (
    <div className="App">
      <div className='gaalpos-container'>
        <h1> Do some math!</h1>
      </div>
      <div className='calculator-container'>
        <Screen
          input={input} />
        <div className='row'>
          <Button handleClick={addInput}>
            7
          </Button>
          <Button handleClick={addInput}>
            8
          </Button>
          <Button handleClick={addInput}>
            9
          </Button>
          <Button handleClick={addInput}>
            +
          </Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>
            4
          </Button>
          <Button handleClick={addInput} >
            5
          </Button>
          <Button handleClick={addInput} >
            6
          </Button>
          <Button handleClick={addInput}>
            -
          </Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>
            1
          </Button>
          <Button handleClick={addInput}>
            2
          </Button>
          <Button handleClick={addInput}>
            3
          </Button>
          <Button handleClick={addInput}>
            *
          </Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>
            0
          </Button>
          <Button handleClick={addInput}>
            .
          </Button>
          <Button handleClick={addInput}>
            =
          </Button>
          <Button handleClick={addInput}>
            /
          </Button>
        </div>
        <div className='row'>
          <ClearButton handleClear={() => setInput('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;