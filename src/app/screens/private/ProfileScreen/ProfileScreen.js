import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import { AuthContext } from 'app/contexts/Auth/AuthContext'
import BgImg from 'assets/img/bg/bg4.jpg'
import ProfileImg from 'assets/img/profile.jpg'

const ProfileScreen = () => {
  const { config } = useContext(AuthContext)

  return (
    <Container className="page no-padding">
      <div style={{backgroundImage: `url(${BgImg})`}} className='h-rem-18-1 section-image d-flex align-items-end' >
        <Container fluid>
          <Row className='d-flex justify-content-between'>
            <Col md={6} className='p-l-30 p-b-15'>
              <Row>
                <Col md={{size: 'auto'}} className='p-r-20'>
                  <span className='avatar-circle h-rem-7-4 w-rem-7-4 bo-gray-600 border-w-2'>
                    <img src={ProfileImg} alt='profile' style={{height: '9rem'}} />
                  </span>
                </Col>
                <Col md={8} className='d-flex align-items-center'>
                  <h2 className='text-white'>{config.user}</h2>
                </Col>
              </Row>
            </Col>
            <Col md={6} className='d-flex align-items-end justify-content-end p-b-15'>
              <Button color="info" className='m-r-15 btn--shadow'>Fallow</Button>
              <Button color="dark">About more</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid className="page m-t-0">
        <Row>
          <Col md={6}>
            <h2>ProfileScreen</h2>
            <h3>{config.user}</h3>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default ProfileScreen

