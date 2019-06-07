import React, { useState, useContext } from 'react'
import { Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap'

import { setStorage } from 'app/utils'
import { AuthContext } from 'app/contexts/Auth/AuthContext'
import { LoadContext } from 'app/contexts/Load/LoadContext'
import { AuthLayout } from 'app/layout'

const AuthScreen = (props) => {
  const { changeAuth } = useContext(AuthContext)
  const { changeLoad } = useContext(LoadContext)
  const [login, setLogin] = useState({})

  const authChange = ({ target: { value, name } }) => {
    let updateLogin = { ...login };
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
    // set data in session storage
    setStorage('is-auth', true)
    setStorage('auth-user', login.user)

    // update data context
    changeAuth()
    changeLoad()
    setTimeout(() => {
      changeLoad()
      props.history.push('/app/dashboard')
    }, 3000)
  }

  return (
    <AuthLayout>
      <Row noGutters className='d-flex justify-content-center'>
        <Col md={8}>
          <h2 className='text-center'>Login</h2>
        </Col>
        <Col md={8}>
          <Form className='LoginForm pretty-forms'>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Input type='text' name='user' onChange={authChange} required />
                  <Label for='input' className='control-label'>E-mail or nickname</Label>
                  <i className='bar'></i>
                </FormGroup>

                <FormGroup>
                  <Input type='password' name='password' onChange={authChange} required />
                  <Label for='input' className='control-label'>Password</Label>
                  <i className='bar'></i>
                </FormGroup>
              </Col>
              <Col md={6}>
                <div className="checkbox">
                  <label className='d-flex justify-content-start align-items-center'>
                    <Input type="checkbox" />
                    <i className="helper"></i>Remember Me
                  </label>
                </div>
              </Col>
              <Col md={6}>
                <Button color="link" className='m-t-5'>Forgot Password?</Button>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button className='text-uppercase' color='dark' block disabled={validateDataForm()} onClick={submitForm}>
                  <span>Login</span>
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </AuthLayout>
      )
    }

    export default AuthScreen
