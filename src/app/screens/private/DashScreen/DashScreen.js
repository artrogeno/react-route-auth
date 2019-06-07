import React, { useContext } from 'react'
import { Container, Row, Col, Button, UncontrolledTooltip } from 'reactstrap'

import { setStorage } from 'app/utils'
import { AuthContext } from 'app/contexts/Auth/AuthContext'

const DashScreen = () => {
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
        <Col md={4}>
          <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="UncontrolledTooltipExample">tooltip</span>.</p>
          <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
            Hello world!
          </UncontrolledTooltip>
        </Col>
      </Row>
    </Container>
  )
}

export default DashScreen

