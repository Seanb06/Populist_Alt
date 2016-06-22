import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import LoginLayout from '../layouts/LoginLayout'
import Home from '../views/Home/Home_container'
import ListDetail from '../views/ListDetail/ListDetail_container'
import ListCreate from '../views/ListCreate/ListCreate_container'
import Login from '../views/Login/Login_container'

const App = ({children}) => {
  return (
    <div>
      {children}
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.element,
};

function logoutOnEnterHook(nextState, replaceState) {
  if (store.getState().auth.user) {
    // logout the user, and redirect to '/' while success
    store.dispatch(logoutAndRedirectHome())
  } else {
    // the user hasn't login yet
    replaceState(null, '/')
  }
}

function requireAuth(nextState, replaceState) {
  if (!store.getState().auth.user) {
    store.dispatch(showNeedLoginMsg())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
  }
}

export const createRoutes = (store) => (
    <Route path="/" component={App}>
      <Route component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="/list/:listId" component={ListDetail} />
        <Route path="/create" component={ListCreate} onEnter={requireAuth} />
      </Route>

      <Route component={LoginLayout}>
        <Route path="login" component={Login} isLogin />
        <Route path="signup" component={Login} isLogin={false} />
        <Route path="logout" onEnter={logoutOnEnterHook} />
      </Route>
    </Route>
  
  
)

export default createRoutes