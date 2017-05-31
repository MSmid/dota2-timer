import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Main entry point of the Application
// Rendering of the app starts here

// //@Dan style
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { rootReducer } from './reducers';
// import { userLoggedInAction } from "./actions";
//
// let store = createStore(rootReducer,applyMiddleware(thunk));
// console.log('--- STATES', store.getState());
// let accessToken = localStorage.getItem('accessToken');
// let userId = localStorage.getItem('userId');
// if (accessToken && userId) {
//   store.dispatch(userLoggedInAction(accessToken, userId));
// }

// @Heracek style
import { configureStore } from './store/configureStore.js';
import { loadState, saveState } from './store/localState.js';
import { setAuthToken } from './api.js';

const persistedState = loadState();
if (persistedState
  && persistedState.auth
  && persistedState.auth.authToken
) {
  const { authToken } = persistedState.auth;
  setAuthToken(authToken);
}
const store = configureStore(persistedState, saveState);
console.log('--- STATES', store.getState());
ReactDOM.render(
  <App store={store}/>,  document.getElementById('root')
);
