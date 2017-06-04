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
import api from './api.js';
import { fetchHeroesSuccess } from './actions/heroes.js';

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

api.get(
  'http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1?language=en_us&key=30E14B1580F6153664955B1776A9540C&format=json',
  { headers: { 'Content-Type': 'application/json'}}
)
.then((response) => {
  store.dispatch(fetchHeroesSuccess(response.data.result.heroes));
  console.log('-- heroes fetched', response.data)
})
.catch((error) => {
  // dispatch(fetchHeroesSuccess(error.data.result.heroes));
  store.dispatch(fetchHeroesSuccess(error));
  console.log('-- heroes fetch failed', error);
});

ReactDOM.render(
  <App store={store}/>,  document.getElementById('root')
);
