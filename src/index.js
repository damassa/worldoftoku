import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './store';
import { Provider } from 'react-redux';

const rootDom = (
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);

ReactDOM.render(rootDom, document.getElementById('root'));
