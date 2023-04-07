import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { registerMicroApps, start } from 'qiankun';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const apps = [
  {
    name: 'vueApp', //子应用的名称
    entry: 'http://127.0.0.1:5173', //子应用的域名
    container: '#vue', //承载子应用的容器，在上面App.vue中定义
    activeRule: '/vue', // 被激活的子应用的路由
  },
];
registerMicroApps(apps); //注册子应用
start(); //启动qiankun
