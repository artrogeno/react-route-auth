import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import HomeScreen from '../HomeScreen/HomeScreen'
import AboutScreen from '../AboutScreen/AboutScreen'

const MainScreen = () => (
  <Switch>
    <Route path="/web/home" component={HomeScreen} />
    <Route path="/web/about" component={AboutScreen} />
    <Route exact path="/web" render={() => (<Redirect to="/web/home" />)} />
  </Switch>
)

export default MainScreen
