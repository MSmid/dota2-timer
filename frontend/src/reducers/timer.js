/*
Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
*/

import {
  TIMER_ADD
} from "../actions/timer.js";

const initialState = {
  spell: {
    id: null,
    level: 1,
    cooldown: null
  }
}

const timer = (state = initialState, action) => {
  switch (action.type) {
    case TIMER_ADD:
      return {
        ...state,
        accessToken: action.accessToken,
        userId: action.userId,
        userLoggedIn: true,
        statusText: null
      };

    default:
      return state;
  }
}

export default timer;
