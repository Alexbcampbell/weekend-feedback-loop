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
  } else if (action.type === 'CLEAR_FEELING') {
    return '';
  }
  return state;
};

const contentReducer = (state = '', action) => {
  if (action.type === 'ADD_CONTENT') {
    return action.payload;
  } else if (action.type === 'CLEAR_CONTENT') {
    return '';
  }
  return state;
};

const supportReducer = (state = '', action) => {
  if (action.type === 'ADD_SUPPORT') {
    return action.payload;
  } else if (action.type === 'CLEAR_SUPPORT') {
    return '';
  }
  return state;
};

const commentReducer = (state = '', action) => {
  if (action.type === 'ADD_COMMENT') {
    return action.payload;
  } else if (action.type === 'CLEAR_COMMENT') {
    return '';
  }
  return state;
};

const storeInstance = createStore(
  //stores all of the information sent from dispatch to reducers.
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
