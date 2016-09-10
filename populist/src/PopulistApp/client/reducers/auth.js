import {USER_LOGGING_IN, USER_DATA, SHOW_NEED_LOGIN_MSG} from '../actions/auth';

export const initialState = {
  user: null,
  loggingIn: false
};

console.log("auth initialState", initialState);

export default function(state = initialState, action) {

  
  const {data, type} = action;


  console.log("auth reducer", data, type, state);

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