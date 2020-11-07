import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = '', action) => {
  if (action.type === 'ADD_FEELING') {
    return action.payload;
  }
  return state;
};

const contentReducer = (state = '', action) => {
  if (action.type === 'ADD_CONTENT') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'ADD_SUPPORT') {
    return action.payload;
  }
  return state;
};

const commentReducer = (state = '', action) => {
  if (action.type === 'ADD_COMMENT') {
    return action.payload;
  }
  return state;
};

const reviewReducer = (state = {}, action) => {
  if (action.type === 'DISPLAY_REVIEW') {
    return [...state, action.payload];
  }
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    contentReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
