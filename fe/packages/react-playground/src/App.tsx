import React, { useEffect, useState } from 'react';
import './App.css';

const Son = (props) => {
  return <div ref={props.abc}>123</div>;
};

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // throw 123;
  }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        add count
      </button>
      count: {count}
      <header className="App-header">
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
