import React, { Fragment, useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { Row, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'

const Breadcrumbs = (props) => {
  let { keyremove } = props
  let { layout } = useContext(LayoutPrivateContext)
  const [breadcrumbTitle, setBreadcrumbTitle] = useState('')
  const [breadcrumb, setBreadcrumb] = useState([])

  const getPath = (path) => {
    let index, fullPath = [], list = [], { location: { pathname } } = layout
    list = `${pathname}`.split('/')
    index = list.indexOf(path)
    for (let i = 0; i < index; i++) {
      fullPath.push(list[i + 1])
    }
    return '/' + fullPath.join('/')
  }

  const setTitle = () => {
    let title = 'dashbord', { location: { pathname } } = layout

    let paths = `${pathname}`.split('/')
    if (paths.length > 0) {
      let lastPath = paths[paths.length - 1]
      title = lastPath || 'dashbord'
    }
    if (!breadcrumbTitle || breadcrumbTitle === '') {
      setBreadcrumbTitle(title)
    } else {
      if (breadcrumbTitle !== title) {
        setBreadcrumbTitle(title)
      }
    }
  }

  const setNav = () => {
    let list = [], { location } = layout
    let paths = `${location.pathname}`.split('/').filter(item => item !== '')
    if (paths.length > 0) {
      if (breadcrumb.length > 0) {
        if (breadcrumb[breadcrumb.length - 1]) {
          if (paths[paths.length - 1] !== breadcrumb[breadcrumb.length - 1].title) {
            for (const key in paths) {
              list.push({
                title: paths[key],
                link: +key !== paths.length - 1 ? getPath(paths[key]) : '',
                active: +key === paths.length - 1
              })
            }
            setBreadcrumb(list)
          }
        }
      } else {
        for (const key in paths) {
          list.push({
            title: paths[key],
            link: +key !== paths.length - 1 ? getPath(paths[key]) : '',
            active: +key === paths.length - 1
          })
        }
        setBreadcrumb(list)
      }
    } else {
      if ((paths.length === 0 && breadcrumb.length === 0) ||
        (paths.length === 0 && breadcrumb.length > 0 && breadcrumb[0].title !== 'dashboard')) {
        list = [{
          title: 'dashboard',
          active: true
        }]
        setBreadcrumb(list)
      }
    }
  }

  useEffect(() => {
    setTitle()
    setNav()
  });

  const sideBreadcrumbs = (status) => {
    let classes = ['ar-breadcrumbs']
    classes.push(status ? 'opened' : 'closed')
    return classes.join(' ')
  }

  return (
    <Row noGutters className={sideBreadcrumbs(layout.sidebar)}>
      <h2>{breadcrumbTitle}</h2>
      <Breadcrumb tag="nav" >
        <BreadcrumbItem>{layout.appTitle}</BreadcrumbItem>
        {breadcrumb.map((item, index) =>
          <Fragment key={index}>
            {keyremove === item.title || (
              <BreadcrumbItem active={item.active}>
                {(!item.active && item.link ?
                  <NavLink to={item.link}>{item.title}</NavLink> : item.title
                )
                }
              </BreadcrumbItem>)
            }
          </Fragment>
        )}
      </Breadcrumb>
    </Row>
  )
}

export default Breadcrumbs
