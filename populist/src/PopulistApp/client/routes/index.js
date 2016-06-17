import React from 'react'
import { Route, IndexRoute } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import Home from '../views/Home/Home_container'
import ListDetail from '../views/ListDetail/ListDetail_container'
import ListCreate from '../views/ListCreate/ListCreate_container'

export const createRoutes = (store) => (

  <Route path="/" component={MainLayout}>
    <IndexRoute component={Home} />
    <Route path="/list/:listId" component={ListDetail} />
    <Route path="/create" component={ListCreate} />
  </Route>
)


export default createRoutes