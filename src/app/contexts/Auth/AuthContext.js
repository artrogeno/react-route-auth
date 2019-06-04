import React from 'react'
import { getStorage } from '../../utils'

export const auth = {
  config: {
    isAuth: getStorage('is-auth') || false,
    user: getStorage('auth-user') || ''
  }
}

export const AuthContext = React.createContext({
  config: auth.config,
  changeAuth: () => {}
})
