import React from 'react';
import ReactDOM from 'react-dom';
// import MyComponent from './original-component/my-component';
// import MyComponent from './higher-order-component/my-component';
import MyComponent from './render-props/my-component';
import './index.css';

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);
