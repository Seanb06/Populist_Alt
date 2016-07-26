import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createRoutes from './routes'
import thunk from 'redux-thunk';

import count from './reducers/count'
import auth from './reducers/auth'
import filter from './reducers/filter'

import {loadUser} from './actions/auth';

const reducer = combineReducers({
  count,
  auth,
  filter,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)


const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk
);

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer,
  DevTools.instrument(),
  middleware
  //applyMiddleware(thunk)
)

const history = syncHistoryWithStore(browserHistory, store)

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

let render = (key = null) => {
  const routes = createRoutes(store) 
  const AppContainer = (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} key={key} />
        {/*<DevTools />*/}
      </div>
    </Provider>
  )
  ReactDOM.render(AppContainer, document.getElementById('mount'))
}

Meteor.startup(function(){
  render()
  store.dispatch(loadUser());
});