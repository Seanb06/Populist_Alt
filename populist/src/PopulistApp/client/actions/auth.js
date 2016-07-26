import { USER_LOGGING_IN, USER_DATA, SHOW_NEED_LOGIN_MSG } from '../constants'

export function showNeedLoginMsg() {
  return {
    type: SHOW_NEED_LOGIN_MSG,
  }
}

export function loginWithFacebook() {
  return dispatch => {
    Meteor.loginWithFacebook(err => {
      if (err) {
        alert('Error while login with facebook: ' + err.message)
        dispatch(loginError(err.message))
      // } else {
      //   dispatch(loggedIn())
      }
    })
  }
}

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