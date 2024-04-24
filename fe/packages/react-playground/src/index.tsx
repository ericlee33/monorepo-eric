import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// window.addEventListener('error', function (event) {
//   // if (event.message === 'Script error.') {
//   console.info('捕获到错误:', event);

//   event.preventDefault(); // 阻止浏览器默认行为
//   event.stopPropagation(); // 停止事件传播，确保不会再次触发 window.onerror
//   return true; // 通过返回 true 来表明错误已被处理
//   // }
// });

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

// scriptNode.onerror = (event) => {
//   if (event.toString() === 'Script error.') {
//     console.info(`[nocode-engine]`, event);
//     return true;
//   }
//   return false;
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals((params) => {
  console.log({ [params.name]: params.value });
});

// const main = async () => {
//   const scriptNode = document.createElement('script');

//   const url = 'http://127.0.0.1:8081/abc.js';

//   const scriptText = await fetch(url, {
//     method: 'get',
//   }).then((res) => res.text());

//   const scriptTextWithCatch = `
//   try {
//     ${scriptText}
//   } catch(err) {
//     console.log(err)
//   }
// `;

//   scriptNode.innerText = scriptTextWithCatch;
//   document.body.appendChild(scriptNode);
// };

// main();
