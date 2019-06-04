import React, { useState, useContext } from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'

import { setStorage } from 'app/utils'
import { AuthContext } from 'app/contexts/Auth/AuthContext'
import { LoadContext } from 'app/contexts/Load/LoadContext'
import { AuthLayout } from 'app/layout'

const AuthScreen = (props) => {
  const {config, changeAuth } = useContext(AuthContext)
  const { changeLoad } = useContext(LoadContext)
  const [login, setLogin] = useState({})

  const authChange = ({ target: { value, name } }) => {
    let updateLogin = {...login};
    updateLogin[name] = value
    setLogin(updateLogin)
  }

  const validateDataForm = () => {
    let _invalid = true
    if (login.user && login.password) {
      if (login.user.length && login.password.length) {
        _invalid = false
      }
    }
    return _invalid
  }

  const submitForm = () => {
    // response http and logic for persist data on storage
    let _auth = { user: 'Arthur Costa', isAuth: true }
    // set data in session storage
    setStorage('is-auth', _auth.isAuth)
    setStorage('auth-user', _auth.user)

    // update data context
    changeAuth()
    changeLoad()
    setTimeout(() => {
      changeLoad()
      props.history.push('/app/dash')
    }, 3000)
  }

  return (
    <AuthLayout>
      <Row noGutters className='d-flex justify-content-center'>
        <Col md={8}>
          <h2 className="text-center">Test</h2>
          <h1>{JSON.stringify(config)}</h1>
        </Col>
        <Col md={8}>
          <Form className="LoginForm" onSubmit={submitForm}>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Input type="text" name="user" placeholder="E-mail or username" onChange={authChange} />
                </FormGroup>
                <FormGroup>
                  <Input type="password" name="password" placeholder="Password" onChange={authChange}/>
                </FormGroup>
                <FormGroup>
                  <Button type="submit" className="text-uppercase btn-purple" block disabled={validateDataForm()}>
                    <span>Login</span>
                  </Button>
                  <Button className="text-uppercase btn-purple" block onClick={submitForm}>
                    <span>Test</span>
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </AuthLayout>
  )
}

export default AuthScreen
