import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../app/App_container'
import MainLayout from '../layouts/MainLayout'
import LoginLayout from '../layouts/LoginLayout'
import ComingSoonLayout from '../layouts/ComingSoonLayout'
import Home from '../views/Home/Home_container'
import ComingSoon from '../views/ComingSoon/ComingSoon_container'
import ListDetail from '../views/ListDetail/ListDetail_container'
import ListCreate from '../views/ListCreate/ListCreate_container'
import Login from '../views/Login/Login_container'
import Profile from '../views/Profile/Profile_container'
import { push, routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'
// push('/login')

export default function createRoutes(store) {

  function logoutOnEnterHook(nextState, replace) {
    if (store.getState().auth.user) {
      // logout the user, and redirect to '/' while success
      store.dispatch(logoutAndRedirectHome())
    } else {
      // the user hasn't login yet
      // this is not working here
      store.dispatch(push("/login"));
    }
  }

  // function requireAuth(nextState, replace) {
  //   console.log("this route will requireAuth", store.getState());
  //   {/*if (!store.getState().auth.user) {
  //     replace('/login')*/}
  // }

  const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.auth.user, // how to get the user state
    authenticatingSelector: state => state.auth.isAuthenticating,
    redirectAction: routerActions.replace, // the redux action to dispatch for redirect
    wrapperDisplayName: 'UserIsAuthenticated' // a nice name for this auth check
  })

  return (
    <Route path="/" component={App}>

      <Route component={ComingSoonLayout}>
        {/*<IndexRoute component={ComingSoon} />*/}
      </Route>
      
      <Route component={LoginLayout}>
        <Route path="login" component={Login} isLogin />
        <Route path="signup" component={Login} isLogin={false} />
        <Route path="logout" onEnter={logoutOnEnterHook} />
      </Route>

      <Route component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="/list/:listId" component={ListDetail} />
        <Route path="/create" component={UserIsAuthenticated(ListCreate)} />
        <Route path="/profile" component={UserIsAuthenticated(Profile)} />
        
      </Route>
    </Route>
  )
}
