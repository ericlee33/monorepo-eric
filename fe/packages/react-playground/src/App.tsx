import React, {
  useEffect,
  useMemo,
  useState,
  useRef,
  useImperativeHandle,
  createContext,
} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const a = useMemo(() => {
    return count + 1;
  }, [count]);

  const b = useMemo(() => {
    return count1 + 1;
  }, [count1]);

  const c = useMemo(() => {
    return {
      a,
      b,
    };
  }, [a, b]);

  useEffect(() => {
    console.log('333');
  }, [c.b]);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        add count
      </button>
      <button
        onClick={() => {
          setCount1((count) => count + 1);
        }}
      >
        add count1
      </button>
      count: {count}
      count: {count1}
    </div>
  );
}

export default App;
