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

import { showNeedLoginMsg } from '../actions/auth'


import { push } from 'react-router-redux'
// push('/login')

export default function createRoutes(store) {

  function logoutOnEnterHook(nextState, replaceState) {
    if (store.getState().auth.user) {
      // logout the user, and redirect to '/' while success
      store.dispatch(logoutAndRedirectHome())
    } else {
      // the user hasn't login yet

      // this is not working here
      store.dispatch(push("/login"));
    }
  }

  function requireAuth(nextState, replaceState) {

    console.log("this route will requireAuth", store.getState().auth);
    if (!store.getState().auth.user) {
      store.dispatch(showNeedLoginMsg())
      replaceState({ nextPathname: nextState.location.pathname }, '/login')
    }
  }


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
        <Route path="/create" component={ListCreate} onEnter={requireAuth} />
        <Route path="/profile" component={Profile} onEnter={requireAuth} />
        
      </Route>

      
    </Route>
  )
}
