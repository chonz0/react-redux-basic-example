import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App name={'👋'} />
  </Provider>,
  document.getElementById('root')
);
