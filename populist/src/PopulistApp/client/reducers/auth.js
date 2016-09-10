import {USER_LOGGING_IN, USER_DATA, SHOW_NEED_LOGIN_MSG} from '../actions/auth';

export const initialState = {
  user: null,
  loggingIn: false,
  needLoginMsg: false
};

export default function(state = initialState, action) {

  console.log("auth reducer", action);
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

    case SHOW_NEED_LOGIN_MSG:
      return Object.assign({}, state, {
        needLoginMsg: true,
      });


    default:
      return state;
  }
}