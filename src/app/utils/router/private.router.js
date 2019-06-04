import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { AuthContext } from 'app/contexts/Auth/AuthContext'

const PrivateRouter = ({component: Component, ...rest}) => {
  let { config: { isAuth } } = useContext(AuthContext)
  return (
    <Route {...rest} render={props => (
      isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/', state: {from: props.location} }} />
      )
    )}/>
  )
}

export default PrivateRouter
