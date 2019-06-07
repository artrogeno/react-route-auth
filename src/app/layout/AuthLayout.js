import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import ImgBg18 from 'assets/img/bg18.jpg'
import 'assets/scss/auth/artrogeno.scss'

const AuthLayout = (props) => (
  <div className="artrogeno-auth">
    <div className="content-image" style={{backgroundImage: `url(${ImgBg18})`}}></div>
    <div className='content'>
      <div className='content-left'>
        <Container className='p-l-rem-8-2 p-r-rem-8-2 d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
              <h2>Welcome to the FUSE!</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus ullamcorper nisl erat, vel convallis elit fermentum
                pellentesque. Sed mollis velit facilisis facilisis.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='content-right'>
        <Container className='d-flex justify-content-center align-items-center'>
          {props.children}
        </Container>
      </div>
    </div>
  </div>
)

export default AuthLayout
