import React from 'react';
import Basic from './Cases/Basic';
import Validate from './Cases/Validate';
import VoluntaryLinkages from './Cases/VoluntaryLinkages';
import PasstiveLinkages from './Cases/PasstiveLinkages';
import { Card, Button } from 'antd';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/ext-language_tools';
import MonacoEditor, {loader} from '@monaco-editor/react';

// import { config } from 'ace-builds'
// import 'ace-builds/src-noconflict/mode-yaml'
// import 'ace-builds/src-noconflict/mode-javascript'
// import 'ace-builds/src-noconflict/mode-python'
// import 'ace-builds/src-noconflict/mode-jsx'
// import 'ace-builds/src-noconflict/mode-json'
// import 'ace-builds/src-noconflict/mode-java'
// import 'ace-builds/src-noconflict/mode-text'

// import 'ace-builds/src-noconflict/theme-monokai'
// import 'ace-builds/src-noconflict/theme-xcode'

// import 'ace-builds/src-noconflict/ext-searchbox'
// import 'ace-builds/src-noconflict/ext-language_tools'
// import 'ace-builds/webpack-resolver'
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-jsx";
// import "ace-builds/src-noconflict/worker-javascript";

// config.set("basePath", "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/");
// config.setModuleUrl('ace/mode/javascript_worker', "https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-javascript.js");
// config.setModuleUrl(
//   'ace/mode/json_worker',
//   'https://cdn.jsdelivr.net/npm/ace-builds@1.4.11/src-noconflict/worker-json.js',
// )

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
              hash: window.location.hash,
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

const Editor = () => {

  // React.useEffect(() => {
  //   loader.init()
  // }, [])

  return (
    <>
      <MonacoEditor
        width={800}
        height={500}
        language="javascript"
        theme="vs-dark"
        options={ {
          // rulers: [10],
          // selectOnLineNumbers: true,
          // lineNumbers: 'off',
          // wordWrap: 'on',
          // renderLineHighlight: 'none',
        }}
        // onMount={(editor) => {
        //   editor.updateOptions({
        //   })
        // }}
      />
      {/* <AceEditor
        wrapEnabled
        // showGutter={false}
        // showPrintMargin
        value={`
        function abc() {
          fsad fsdl l
          fka 
          fdsag  g
      }`}
        setOptions={{
          useWorker: true,
        }}
        mode="javascript"
      /> */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Editor />
      {/* <Inner /> */}
    </Router>
  );
};

export default App;
