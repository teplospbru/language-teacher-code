import React from 'react';
import ReactDom from 'react-dom/client';
import './assets/scss/common.scss';
import { App } from './components/App/App';
import { seeds } from './core/api/seeds';
import { grammar } from './core/api/grammar';
import { Provider } from 'react-redux';
import { store } from './core/redux/store';

// seeds(grammar).then(arr => console.log(arr));

const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
