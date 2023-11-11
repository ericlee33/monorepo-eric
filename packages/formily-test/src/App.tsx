import React from 'react';
import Basic from './Cases/Basic';
import Validate from './Cases/Validate';
import VoluntaryLinkages from './Cases/VoluntaryLinkages';
import PasstiveLinkages from './Cases/PasstiveLinkages';
import { Card, Button } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';

const Inner = () => {
  const history = useHistory();

  return (
    <div>
      {' '}
      <Card style={{ width: 400 }}>
        <Button
          onClick={() => {
            history.push({
              pathname: '/bcd',
            });
          }}
        >
          123
          {/* <Link to="/abc">123</Link> */}
        </Button>
        <Button
          onClick={() => {
            history.push({
              pathname: '/abc',
              hash: window.location.hash
            });
          }}
        >
          123
          {/* <Link to="/abc">123</Link> */}
        </Button>
      </Card>
      <Switch>
        <Route path={`/abc`}>
          <Validate />
        </Route>
        <Route path={`/bcd`}>
          <Validate />
        </Route>
        {/* <Route path={match.path}> */}
        {/* <Basic /> */}
        {/* <VoluntaryLinkages /> */}
        {/* <PasstiveLinkages /> */}
        {/* <Validate /> */}
        {/* </Route> */}
      </Switch>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Inner />
    </Router>
  );
};

export default App;
