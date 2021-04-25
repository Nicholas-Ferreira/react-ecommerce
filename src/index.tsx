import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './redux';
import App from './app';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
