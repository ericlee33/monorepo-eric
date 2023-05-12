import React, { useContext, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { uniqWith, isEqual, noop } from 'lodash';
import { useRequest } from 'ahooks';

function App() {
  const [a, setA] = useState(1);

  useRequest(
    async () => {
      console.log(1);
    },
    {
      manual: true,
      refreshDeps: [a],
    }
  );

  const onClick = () => {
    setA((a) => a + 1);
  };

  return (
    <div className="App">
      <div onClick={onClick}>click</div>
    </div>
  );
}

export default App;
