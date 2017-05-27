import api from '../api.js';

//list of all action types

export const HEROES_FETCH_SUCCESS = 'HEROES_FETCH_SUCCESS';

//implement actions

export const heroesFetch = () => (dispatch) => {
  api.get('http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1?language=en_us&key=30E14B1580F6153664955B1776A9540C&format=json')
  .then((response) => {
    dispatch(heroesFetchSuccess(response.data.result.heroes));
    console.log('-- heroes fetched', response.data)
  })
  .catch((error) => {
    console.log('-- heroes fetch failed', error);
  });
};

export const heroesFetchSuccess = (heroes) => {
  return {
    type: HEROES_FETCH_SUCCESS,
    heroes: heroes
  }
}
