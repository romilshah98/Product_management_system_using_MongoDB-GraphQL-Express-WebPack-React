/* eslint linebreak-style: ["error","windows"] */
/* eslint "react/react-in-jsx-scope": "off" */
/* eslint "react/jsx-no-undef": "off" */
/* eslint "no-alert": "off" */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './productList.jsx';

const contentnode = document.getElementById('contents');

ReactDOM.render(<ProductList />, contentnode);

if (module.hot) {
  module.hot.accept();
}
