import React from 'react'
import { Container, Row, Col, Button  } from 'reactstrap'

const HomeScreen= () => (
  <Container className='text-center'>
    <Row>
      <Col md={12}>
        <h1>Home</h1>
      </Col>

      <Col md={12}>
        <p>
          Cover is a one-page template for building
          simple and beautiful home pages. Download, edit the text,
          and add your own fullscreen background photo to make it your own.
        </p>
        <p>
          <Button size='lg' color='success'>Learn more</Button>
        </p>
      </Col>
    </Row>

  </Container>
)

export default HomeScreen

