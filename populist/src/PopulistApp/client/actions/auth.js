//import { USER_AUTHENTICATING, USER_DATA } from '../constants'
import actionTypeBuilder from './actionTypeBuilder';
export const USER_AUTHENTICATING = actionTypeBuilder.type('USER_AUTHENTICATING');
export const USER_DATA = actionTypeBuilder.type('USER_DATA');
import { push } from 'react-router-redux'

export function loadUser() {
  console.log("loadUser called");
  return dispatch => {
    dispatch({
      type: USER_AUTHENTICATING,
      meteor: {
        get: () => Meteor.loggingIn(),
      },
    });

    dispatch({
      type: USER_DATA,
      meteor: {
      subscribe: {
        name: 'userData',
        get: () => Meteor.users.findOne(Meteor.userId())
        }
      },
    });
  };
}

export function handleSignedIn(dispatch, token) {
  const user = Meteor.user();
  if (user) {
    console.log("we have a user", user, USER_DATA);
  }
}


export function loginWithFacebook() {
  return dispatch => {
    Meteor.loginWithFacebook(err => {
      if (err) {
        //alert('Error while login with facebook: ' + err.message)
        return dispatch(loginError(err.message))
      }
      handleSignedIn(dispatch)
    })
  }
}

export function loginWithGoogle() {
  return () => {
    Meteor.loginWithGoogle(err => {
      if (err) {
        //alert('Error while login with google');
        return dispatch(loginError(err.message))
      }
      handleSignedIn(dispatch)
    });
  };
}

export function logout() {
  return () => {
    Meteor.logout(err => {
      if (err) {
        alert('Error while loggin out');
      }
    });
  };
}