import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Nav, NavItem, NavLink as NavbarLink,
  Button, UncontrolledCollapse,
  ListGroup, ListGroupItem
} from 'reactstrap'

import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'
import SideArrow from 'app/components/private/UI/SideArrow/SideArrow'

import './Sidebar.scss'


const Sidebar = () => {
  let { layout, toggleSideBar} = useContext(LayoutPrivateContext)

  const sideNav = (status) => {
    let classes = ['Sidebar', 'd-none', 'd-md-block', 'bg-dark']
    classes.push(status ? 'opened' : 'closed')
    return classes.join(' ')
  }

  return (
    <Nav vertical className={sideNav(layout.sidebar)}>
      <div className="sidebar-sticky">
        <NavItem>
          <NavLink to="/app/dashboard">
            <span className="icon ar-pack-database"></span>
            <span className="title">Dash</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/app/report">
          <span className="icon ar-pack-document"></span>
            <span className="title">Reports</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavbarLink id="reports" className="dropdown">
            <span className="icon ar-pack-idea"></span>
            <span className="title">Playground</span>
          </NavbarLink>
        </NavItem>
        <UncontrolledCollapse toggler="reports">
          <ListGroup>
            <NavLink to="/report" className="list-group-item-action list-group-item">
              Reports
            </NavLink>
            <ListGroupItem tag="a">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem tag="a">Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a">Porta ac consectetur ac</ListGroupItem>
          </ListGroup>
        </UncontrolledCollapse>

        <NavItem className="btn-fixed-bottom">
          <Button onClick={toggleSideBar}>
            <SideArrow />
          </Button>
        </NavItem>
      </div>
    </Nav>
  )
}

export default Sidebar
