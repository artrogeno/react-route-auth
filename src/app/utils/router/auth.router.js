import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from 'app/contexts/Auth/AuthContext'

const AuthRouter = () => {
  let { config: { isAuth } } = useContext(AuthContext)
  return <Route path="/" render={() => (isAuth ? <Redirect to="/app" /> : <Redirect to="/web" />)} />
}

export default AuthRouter
