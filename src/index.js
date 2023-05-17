import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, root
);  

// ReactDOM.render(React 컴포넌트, 부모 엘리먼트) 메소드
// => React 컴포넌트의 구성 요소들을 부모 엘리먼트 아래에 추가한 DOM 트리를 만듦

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
