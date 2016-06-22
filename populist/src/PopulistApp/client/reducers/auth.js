import assign from 'object-assign';
import {USER_LOGGING_IN, USER_DATA} from '../actions/auth';

export const initialState = {
  user: null,
  loggingIn: false,
};

export default function(state = initialState, action) {
  const {data, type} = action;

  switch (type) {
  case USER_DATA:
    return assign({}, state, {
      user: data,
    });

  case USER_LOGGING_IN:
    return assign({}, state, {
      loggingIn: data,
    });

  default:
    return state;
  }
}