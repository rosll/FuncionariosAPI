import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Info from './pages/Info'
import Details from './pages/Details'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/info" component={Info} />
        <Route path="/detalhes" component={Details} />
      </Switch>
    </BrowserRouter>
  )
}
