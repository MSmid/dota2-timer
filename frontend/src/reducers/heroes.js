/*
Things you should never do inside a reducer:

Mutate its arguments;
Perform side effects like API calls and routing transitions;
Call non-pure functions, e.g. Date.now() or Math.random().
*/
import heroesData from './_heroes_json.js';
import {
  HEROES_FETCH_SUCCESS
} from "../actions/heroes.js";

console.log('- heroes', heroesData);

const initialState = heroesData.result;

const heroes = (state = initialState, action) => {
  switch (action.type) {
    // case HEROES_FETCH_SUCCESS:
    //   return {
    //     ...state,
    //     heroes: action.heroes
    //   }
    default:
      return state;
  }
}

export default heroes;
