import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
  // Disabling strict mode just for the purpose of this challenge to avoid a warning in the console.
  // The infinite scroll library has already fixed the issue but they're waiting
  // for merging it. Check this for more info: https://github.com/ankeetmaini/react-infinite-scroll-component/pull/178 
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
