import React, { Component } from 'react'

// import { LayoutContext, layout } from 'app/public/contexts/LayoutContext'
import { AuthContext, auth } from '../../contexts/AuthContext'
import { setStorage, getStorage } from '../../utils'

// import 'assets/scss/public/artrogeno.scss'

class Auth extends Component {
  constructor(props) {
    super(props)

    this.setAuth = () => {
      this.setState(state => ({
        auth: this.getAuth(state.auth)
      }));
    };

    this.state = {
      auth: auth,
      setAuth: this.setAuth
    }
  }

  getAuth(auth) {
    let { config } = auth
    config.action = !config.action
    return auth
  }

  componentDidUpdate() {
    let updateAuth = { ...this.state.auth }
    let { config } = updateAuth
    let storage = getStorage('auth-storage')
    if (storage) {
      config.isAuth = storage.isAuth
      config.roles = storage.roles
      config.permissions = storage.permissions
      this.setState({ auth: updateAuth })
    }
  }

  componentDidMount() {
    this.setState({ auth: auth })
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default Auth
