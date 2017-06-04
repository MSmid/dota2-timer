import throttle from 'lodash/throttle';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers'

function stateThatShouldBeSaved(state) {
  const {
    auth,
    timer,
    abilities,
    heroes
    // other states (reducers)
  } = state;

  return {
    auth,
    timer,
    abilities,
    heroes
    // other states
  };
}

export function configureStore(preloadedState, saveState) {
  const store = createStore(
    rootReducer,
    preloadedState
  );

  if (saveState) {
    store.subscribe(throttle(() => {
      const state = store.getState();
      console.log('state:', state);
      const stateToSave = stateThatShouldBeSaved(state);
      saveState(stateToSave);
    }, 1000));
  }

  return store;
}
