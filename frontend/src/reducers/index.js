import { combineReducers } from 'redux';
import authentificationReducer from './authentificationReducer.js';
import timer from './timer.js';
import abilities from './abilities.js';
import heroes from './heroes.js';
import { setAuthToken } from '../api.js';

//Dummy action
const dummy = (state=0, action) => {
  console.log('---- action:', action, 'state:', state);

  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;
    default:
      return state;
  }
}

const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      const {
        authToken,
        userId,
      } = action;

      setAuthToken(authToken);

      return {
        ...state,
        authToken,
        userId,
      };
    case 'LOGOUT':
      setAuthToken(undefined);
      return {};
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  //add reducers so they will be added to Store
 authentificationReducer, //@Dan style
 auth, //@Heracek style
 dummy,
 timer,
 abilities,
 heroes
});
