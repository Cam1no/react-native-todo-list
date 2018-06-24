import { currentUser } from '../constants/ActionTypes';

const initialState = {
  uid: '',
  displayName: '',
  email: '',
  password: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case currentUser.CHANGE_EMAIL:
      return Object.assign({}, state, { email: action.payload.email });
    case currentUser.CHANGE_PASSWORD:
      return Object.assign({}, state, { password: action.payload.password });
    default:
      return state;
  }
};
