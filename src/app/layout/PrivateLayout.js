import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'
import { NotificationContext } from 'app/contexts/Notification/NotificationContext'
import Header from 'app/components/private/UI/Header/Header'
import Sidebar from 'app/components/private/UI/Sidebar/Sidebar'
import Breadcrumbs from 'app/components/private/UI/Breadcrumbs/Breadcrumbs'

import 'assets/scss/private/artrogeno.scss'

const PrivateLayout = (props) => {
  const { layout } = useContext(LayoutPrivateContext)
  const { notification } = useContext(NotificationContext)
  const [layouts, setLayouts] = useState({
    layout: layout,
    changeAuth: () => {
      let updateLayout = { ...layouts }
      // updateLayout.config.isAuth = getStorage('is-auth') || false
      // updateLayout.config.user = getStorage('auth-user') || ''
      setLayouts(updateLayout)
    },
    toggleSideBar: () => {
      let updateLayout = { ...layouts }
      let { layout: { sidebar } } = updateLayout
      updateLayout.layout.sidebar = !sidebar
      setLayouts(updateLayout)
    }
  })
  const [notifications, setNotification] = useState({
    notification: notification,
    changeNotification: () => {
      let updateNotification = { ...notifications }
      setNotification(updateNotification)
    },
    toggleSideNotification: () => {
      let updateNotification = { ...notifications }
      let { notification: { sideNotification } } = updateNotification
      updateNotification.notification.sideNotification = !sideNotification
      updateNotification.notification.count = 0
      setNotification(updateNotification)
    }
  })

  const sideMain = (status) => {
    let classes = ['Main']
    classes.push(status ? 'opened' : 'closed')
    return classes.join(' ')
  }

  useEffect(() => {
    let updateLayout = {...layouts}
    if(updateLayout.layout.location.pathname !== props.location.pathname) {
      updateLayout.layout.match = props.match
      updateLayout.layout.location = props.location
      updateLayout.layout.history = props.history
      setLayouts(updateLayout)
    }
  }, [props, layouts])

  return (
    <LayoutPrivateContext.Provider value={layouts}>
      <NotificationContext.Provider value={notifications}>
        <Header />
        <Container fluid className="theme-dark no-padding no-margin">
          <Row noGutters>
            <Sidebar />
            <main className={sideMain(layout.sidebar)}>
              <Breadcrumbs keyremove='app' />
              {props.children}
            </main>
          </Row>
        </Container>
      </NotificationContext.Provider>
    </LayoutPrivateContext.Provider>
  )
}

export default withRouter(PrivateLayout)
