import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import Provider from './redux';

import './index.scss';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
