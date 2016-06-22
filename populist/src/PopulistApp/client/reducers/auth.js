import {USER_LOGGING_IN, USER_DATA} from '../actions/auth';

export const initialState = {
  user: null,
  loggingIn: false,
};

export default function(state = initialState, action) {
  const {data, type} = action;

  switch (type) {
    case USER_DATA:
      return Object.assign({}, state, {
        user: data,
      });

    case USER_LOGGING_IN:
      return Object.assign({}, state, {
        loggingIn: data,
      });

    default:
      return state;
  }
}