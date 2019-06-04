import React, { Fragment, useState, useContext } from 'react'
import { BrowserRouter, Route, HashRouter, Switch, withRouter } from 'react-router-dom'
import { AuthContext } from './contexts/Auth/AuthContext'

import Load from 'app/components/UI/Load/Load'
import { AuthRouter, getStorage } from './utils'
import PublicScreen from './screens/public/PublicScreen'
import PrivateScreen from './screens/private/PrivateScreen'
import AuthScreen from './screens/auth/AuthScreen'

const Routes = () => {
  const { config } = useContext(AuthContext)
  const [auth, setAuth] = useState({
    config: config,
    changeAuth: () => {
      let updateAuth = { ...auth }
      updateAuth.config.isAuth = getStorage('is-auth') || false
      updateAuth.config.user = getStorage('auth-user') || ''
      setAuth(updateAuth)
    }
  })

  return (
    <Fragment>
      <BrowserRouter>
        <HashRouter>
          <AuthContext.Provider value={auth}>
            <Switch>
              <Route path='/web' component={PublicScreen} />
              <Route path='/app' component={PrivateScreen} />
              <Route path='/auth' component={AuthScreen} />
              <AuthRouter />
            </Switch>
          </AuthContext.Provider>
        </HashRouter>
      </BrowserRouter>
      <Load />
    </Fragment>
  )
}

export default withRouter(Routes)
