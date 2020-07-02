import React from 'react'
import { HashRouter, Switch } from 'react-router-dom'

import { RouteWrapper } from './routeWrapper'
import { Home } from '../pages'

export const Routes = () => (
  <HashRouter>
    <Switch>
      <RouteWrapper path="/" component={Home}/>
    </Switch>
  </HashRouter>
)
