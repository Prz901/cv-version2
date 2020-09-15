import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


import {
  Home,
} from './pages'

export default (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}