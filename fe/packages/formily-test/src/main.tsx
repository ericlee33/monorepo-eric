import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'antd/dist/antd.css';
import './index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
