import React from 'react';
import Basic from './Cases/Basic';
import Validate from './Cases/Validate';
import VoluntaryLinkages from './Cases/VoluntaryLinkages';
import PasstiveLinkages from './Cases/PasstiveLinkages';
import { Card } from 'antd';

const App = () => {
  return (
    <Card style={{ width: 400 }}>
      {/* <Basic /> */}
      {/* <VoluntaryLinkages /> */}
      <PasstiveLinkages />
      {/* <Validate /> */}
    </Card>
  );
};

export default App;
