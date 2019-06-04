import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

import 'assets/scss/public/artrogeno.scss'

const PublicLayout = (props) => (
  <div className="artrogeno-web">
    <div className='cover-container'>
      <header className='mb-auto'>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Artrogeno</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/web/home" className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/web/about" className="nav-link">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/auth" className="nav-link">Auth</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>

      <Container fluid>
        {props.children}
      </Container>
    </div>
    <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Template for <a href="https://github.com/Artrogeno/react-route-auth">Atrogeno</a>, by <a href="https://twitter.com/artrogeno">@atrogeno</a>.</p>
        </div>
      </footer>
  </div>
)

export default PublicLayout
