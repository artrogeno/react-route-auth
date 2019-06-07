import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Nav, NavItem, NavLink as NavbarLink,
  Button, UncontrolledCollapse,
  ListGroup, ListGroupItem
} from 'reactstrap'

import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'
import SideArrow from 'app/components/private/UI/SideArrow/SideArrow'

const Sidebar = () => {
  let { layout, toggleSideBar} = useContext(LayoutPrivateContext)

  const sideNav = (status) => {
    let classes = ['Sidebar', 'sidebar-left', 'sidebar-dark', 'd-none', 'd-md-block']
    classes.push(status ? 'opened' : 'closed')
    return classes.join(' ')
  }

  return (
    <Nav vertical className={sideNav(layout.sidebar)}>
      <div className='sidebar-sticky'>
        <NavItem>
          <NavLink to='/app/dashboard'>
            <span className='icon ar-pack-database'></span>
            <span className='title'>Dash</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/app/report'>
          <span className='icon ar-pack-document'></span>
            <span className='title'>Reports</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavbarLink id='pages' className='dropdown'>
            <span className='icon ar-pack-tabs'></span>
            <span className='title'>Page</span>
          </NavbarLink>
        </NavItem>
        <UncontrolledCollapse toggler='pages'>
          <ListGroup>
            <NavLink to='/app/pages/home' className='list-group-item-action list-group-item'>
              <span className='icon ar-pack-menu-1'></span>
              <span className='title'>Home</span>
            </NavLink>
            <NavLink to='/app/pages/about' className='list-group-item-action list-group-item'>
              <span className='icon ar-pack-menu-1'></span>
              <span className='title'>About</span>
            </NavLink>
            <ListGroupItem tag='a'>
              <span className='icon ar-pack-menu-1'></span>
              <span className='title'>Test 1</span>
            </ListGroupItem>
            <ListGroupItem tag='a'>
              <span className='icon ar-pack-menu-1'></span>
              <span className='title'>Test 1</span>
            </ListGroupItem>
          </ListGroup>
        </UncontrolledCollapse>
        <NavItem>
          <NavLink to='/app/profile'>
            <span className='icon ar-pack-user-3'></span>
            <span className='title'>Profile</span>
          </NavLink>
        </NavItem>



        <NavItem className='btn-fixed-bottom'>
          <Button onClick={toggleSideBar}>
            <SideArrow />
          </Button>
        </NavItem>
      </div>
    </Nav>
  )
}

export default Sidebar
