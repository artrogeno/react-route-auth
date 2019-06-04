import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import { setStorage } from 'app/utils'
import { AuthContext } from 'app/contexts/Auth/AuthContext'

const DashScreen = (props) => {
  const { config, changeAuth } = useContext(AuthContext)

  const logout = () => {
    setStorage('is-auth', false)
    setStorage('auth-user', '')

    changeAuth()
  }

  return (
    <Container className="page">
      <Row>
        <Col md={6}>
          <h2>DashScreen</h2>
          <h3>{config.user}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Button outline color='secondary' size='lg' className="text-uppercase" block onClick={logout}>
            <span>Logout</span>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default DashScreen

