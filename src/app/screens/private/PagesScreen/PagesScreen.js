import React from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { Container, Col, Nav, NavItem } from 'reactstrap'

import PageHomeScreen from '../PageHomeScreen/PageHomeScreen'
import PageAboutScreen from '../PageAboutScreen/PageAboutScreen'

import BgImg from 'assets/img/bg/bg1.jpg'
import './PagesScreen.scss'

const PagesScreen = () => (
  <Container className="page no-padding">
    <div style={{backgroundImage: `url(${BgImg})`}} className='jumbotron-page section-image' >
      <Col className='h-per-100  d-flex align-items-end'>
        <Nav className='nav-header-tab light'>
          <NavItem>
            <NavLink className='nav-link nav-line' to='/app/pages/home'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link nav-line' to='/app/pages/about'>About</NavLink>
          </NavItem>
        </Nav>
      </Col>
    </div>
    <Switch>
      <Route path="/app/pages/home" component={PageHomeScreen} />
      <Route path="/app/pages/about" component={PageAboutScreen} />
      <Route exact path="/app/pages/" render={() => (<Redirect  to="/app/pages/home" />)} />
    </Switch>
  </Container>
)

export default PagesScreen

