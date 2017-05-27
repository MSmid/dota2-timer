import api from '../api.js';

//list of all action types

export const TIMER_ADD = 'TIMER_ADD';

//implement actions

export const timerAdd = (accessToken, userId) => {
  //store access token in localStorage
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('userId', userId);

  return {
    type: TIMER_ADD,
    accessToken: accessToken,
    userId: userId
  };
};
