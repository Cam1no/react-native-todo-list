import { currentUser } from '../constants/ActionTypes';

export const setCurrentUser = user => ({
  type: currentUser.SET_CURRENT_USER,
  payload: { user },
});

export const changeEmail = email => ({
  type: currentUser.CHANGE_EMAIL,
  payload: { email },
});

export const changePassowrd = password => ({
  type: currentUser.CHANGE_PASSWORD,
  payload: { password },
});
