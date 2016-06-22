import { USER_LOGGING_IN, USER_DATA } from '../constants'

export function loginWithGoogle() {
  return () => {
    Meteor.loginWithGoogle(err => {
      if (err) {
        alert('Error while login with google');
      }
    });
  };
}

export function loadUser() {
  return dispatch => {
    Tracker.autorun(() => {
      dispatch({
        type: USER_LOGGING_IN,
        data: Meteor.loggingIn(),
      });
    });

    Tracker.autorun(() => {
      dispatch({
        type: USER_DATA,
        data: Meteor.user(),
      });
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