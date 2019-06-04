import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar, NavbarBrand, Nav, NavItem, NavLink as NavbarLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'

import { AuthContext } from 'app/contexts/Auth/AuthContext'
import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'
import Hamburger from 'app/components/private/UI/Hamburger/Hamburger'

import ImgProfile from 'assets/img/profile.jpg'
import './Header.scss'

const Header = () => {
  let { layout, toggleSideBar} = useContext(LayoutPrivateContext)
  let { config: { user } } = useContext(AuthContext)

  const sideBrand = (status) => {
    let classes = ['mr-0', 'text-light', 'header-brand']
    classes.push(status ? 'opened' : 'closed')
    return classes.join(' ')
  }

  return (
    <header className={`header-top-admin ${layout.sidebar ? 'opened' : 'closed'}`}>
      <Navbar color='admin-dark' fixed='top' dark expand='md' className='header-navbar'>
        <NavbarBrand onClick={toggleSideBar} tag='div' className={sideBrand(layout.sidebar)}>
          <Hamburger />
          <h2 className='brand'>Artrogeno</h2>
        </NavbarBrand>
        <div className='d-flex header-bar'>
          <Nav navbar className='flex-grow-1 align-self-center p-l-rem-1-2'>
            <NavItem>
              <NavLink to='/app/report' className='btn--transparence btn--hover btn--circle w-30 h-30' id='TooltipReact'>
                <span className='icon ar-dev-react size-rem-1-4'></span>
              </NavLink>
              <UncontrolledTooltip placement='bottom' target='TooltipReact'>
                React
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink to='/app/report' className='btn--transparence btn--hover btn--circle w-30 h-30' id='TooltipBootstrap'>
                <span className='icon ar-dev-bootstrap size-rem-1-4'></span>
              </NavLink>
              <UncontrolledTooltip placement='bottom' target='TooltipBootstrap'>
                Bootstrap
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink to='/app/report' className='btn--transparence btn--hover btn--circle w-30 h-30' id='TooltipFirebase'>
                <span className="icon ar-dev-firebase size-rem-1-4"></span>
              </NavLink>
              <UncontrolledTooltip placement="bottom" target="TooltipFirebase">
                Firebase
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink to='/app/report' className='btn--transparence btn--hover btn--circle w-30 h-30' id="TooltipGit">
                <span className="icon ar-dev-github size-rem-1-4"></span>
              </NavLink>
              <UncontrolledTooltip placement="bottom" target="TooltipGit">
                GitHub
              </UncontrolledTooltip>
            </NavItem>
          </Nav>
          <Nav navbar className='d-flex align-self-center justify-content-end p-l-rem-1-2'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className='nav-text-link btn--hover btn--transparence btn-dropdown'>
                <span className='avatar'>
                  <img src={ImgProfile} alt='Profile' />
                </span>
                <span className='title'>{user}</span>
              </DropdownToggle>
              <DropdownMenu right className={`dropdown-manu-dark`}>
                <DropdownItem className='d-flex align-self-center justify-content-center'>
                  <span className="icon ar-pack-controls-4"></span>
                  <span className='title'>Settings</span>
                </DropdownItem>
                <DropdownItem className='d-flex align-self-center justify-content-center'>
                  <span className="icon ar-pack-power"></span>
                  <span className='title'>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar className='d-flex align-self-center justify-content-end p-l-rem-1-2'>
            <NavItem className='p-r-rem-0-4'>
              <NavbarLink className='btn--transparence btn--hover btn--circle btn-icon w-30 h-30' id='TooltipSearch'>
                <span className='icon ar-pack-search-1 size-rem-1-4'></span>
              </NavbarLink>
              <UncontrolledTooltip placement='bottom' target='TooltipSearch'>
                Search
              </UncontrolledTooltip>
            </NavItem>
            <NavItem className='p-r-rem-0-4'>
              <NavbarLink className='btn--transparence btn--hover btn--circle btn-icon w-30 h-30' id='TooltipNotification'>
                <span className='icon ar-pack-layers size-rem-1-4'></span>
              </NavbarLink>
              <UncontrolledTooltip placement='bottom' target='TooltipNotification'>
                Notifications
              </UncontrolledTooltip>
            </NavItem>
          </Nav>
            {/*
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className='nav-text-link btn--hover btn--transparence btn-dropdown'>
                  <span className='border--circle w-30 h-30'>
                    <img src={ImgProfile} className='h-30' alt='Profile' />
                  </span>
                  <span> Options </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className='p-r-rem-0-4'>
                <NavbarLink className='btn--transparence btn--hover btn--circle btn-icon w-30 h-30' id='TooltipSearch'>
                  <span className='icon ar-pack-search-1 size-rem-1-4'></span>
                </NavbarLink>
                <UncontrolledTooltip placement='bottom' target='TooltipSearch'>
                  Search
                </UncontrolledTooltip>
              </NavItem>
              <NavItem className='p-r-rem-0-4'>
                <NavbarLink className='btn--transparence btn--hover btn--circle btn-icon w-30 h-30' id='TooltipNotification'>
                  <span className='icon ar-pack-layers size-rem-1-4'></span>
                </NavbarLink>
                <UncontrolledTooltip placement='bottom' target='TooltipNotification'>
                  Notifications
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
            */}

        </div>
        <div className='header-chat'>

        </div>
      </Navbar>
    </header>
  )
}

export default Header
