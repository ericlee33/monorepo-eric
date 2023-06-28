import React from 'react';
import Basic from './Cases/Basic';
import Validate from './Cases/Validate';
import Reaction from './Cases/Reaction';
import { Card } from 'antd';

const App = () => {
  return (
    <Card style={{ width: 400 }}>
      {/* <Basic /> */}
      {/* <Reaction /> */}
      <Validate />
    </Card>
  );
};

export default App;
