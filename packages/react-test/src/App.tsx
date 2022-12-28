import React, { useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [arr, setArr] = useState({ a: 1 });

  useEffect(() => {
    throw new Error('123');
  }, []);

  const b = useMemo(() => {
    return arr;
  }, [arr]);

  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() =>
          setArr((arr) => {
            return {
              ...arr,
              b: 1,
            };
          })
        }
      >
        {/* {b.map((t) => t)} */}
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
