import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Component from './Component';

import store from './components/js/store';

const app = document.getElementById('container');

ReactDOM.render(<Provider store={store}>
  <Component/>
</Provider>, app);
