import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createRoutes } from './routes/index'

import count from './reducers/count'

const reducer = combineReducers({
  count,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

// Add the reducer to your store on the `routing` key
const store = createStore(
  reducer,
  DevTools.instrument()
)

const history = syncHistoryWithStore(browserHistory, store)

let render = (key = null) => {

  
  const routes = createRoutes(store)
  console.log(routes)
  console.log(history)
  console.log(key)
  const App = (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} key={key} />
       {/*} <DevTools />*/}
      </div>
    </Provider>
  )
  ReactDOM.render(App, document.getElementById('mount'))
}

Meteor.startup(function(){
  render()
});