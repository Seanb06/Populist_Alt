import actionTypeBuilder from '../actions/actionTypeBuilder';
import { USER_AUTHENTICATING, USER_DATA } from '../actions/auth';

export const initialState = {
  user: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default function(state = initialState, action) {

  const {data, type} = action;

  console.log ("AUTH REDUCER type::: ", type)
  console.log ("AUTH REDUCER action::: ", action)

  switch (type) {

    case actionTypeBuilder.changed(USER_DATA):
      return Object.assign({}, state, {
        user: data,
        isAuthenticating: false,
        isAuthenticated: true,

      });

    case actionTypeBuilder.changed(USER_AUTHENTICATING):
      return Object.assign({}, state, {
        isAuthenticating: data,
        isAuthenticated: false,
      });

    default:
      return state;
  }
}