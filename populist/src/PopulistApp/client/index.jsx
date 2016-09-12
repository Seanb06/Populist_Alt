import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { Router, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'
import createRoutes from './routes'
import thunk from 'redux-thunk';

import auth from './reducers/auth'
import filter from './reducers/filter'

//Meteor middlewares
import meteorDatasource from './middlewares/meteorDatasource';
import meteorSubscription from './middlewares/meteorSubscription';
import meteorMethod from './middlewares/meteorMethod';
import { meteorInsert, meteorUpdate, meteorRemove } from './middlewares/meteorCrud';

import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';


import {loadUser} from './actions/auth';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const reducer = combineReducers({
  auth,
  filter,
  routing: routerReducer
})

const middleware = applyMiddleware(
  routerMiddleware(browserHistory),
  thunk,
  meteorSubscription,
  meteorDatasource,
  meteorMethod,
  meteorInsert,
  meteorUpdate,
  meteorRemove,
)

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

// Data that is populated by hooks during startup

let store = createStore(
  reducer,
  DevTools.instrument(),
  compose(middleware)
)
let history = syncHistoryWithStore(browserHistory, store)
let initialState;


//server-sde rendering
// Use history hook to get a reference to the history object
const historyHook = newHistory => history = newHistory;
// Pass the state of the store as the object to be dehydrated server side
const dehydrateHook = () => store.getState();
// Take the rehydrated state and use it as the initial state client side
const rehydrateHook = state => initialState = state;
const routes = createRoutes(store)

// Create a redux store and pass into the redux Provider wrapper
const wrapperHook = app => {
  console.log(app)
  return <Provider store={store}>{app}</Provider>;
}

const clientOptions = { historyHook, rehydrateHook, wrapperHook, ReactDOM };
const serverOptions = { historyHook, dehydrateHook };


//console.log("routes", routes);

// let render = (key = null) => {
//   const routes = createRoutes(store) 
//   const AppContainer = (
//     <Provider store={store}>
//       <div>
//         <Router history={history} routes={routes} key={key} />
//         <DevTools />
//       </div>
//     </Provider>
//   )
//   ReactDOM.render(AppContainer, document.getElementById('mount'))
// }

Meteor.startup(function(){
  //render()
  ReactRouterSSR.Run(routes, clientOptions, serverOptions);
  
});