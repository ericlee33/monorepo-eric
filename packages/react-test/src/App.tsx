import React, { useState } from 'react';
import './App.css';

export default function App() {
  // [data, method]
  const [duoshen, setduoshen] = useState('duoshen');

  const onClick = () => {
    setduoshen('eric');
  };

  return (
    <div className="App">
      <div onClick={onClick}>{duoshen}</div>
    </div>
  );
}
