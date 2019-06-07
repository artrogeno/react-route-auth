import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { PrivateRouter } from 'app/utils'
import { PrivateLayout } from 'app/layout'
import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'
import Notification from '../../components/private/UI/Notification/Notification'
import DashScreen from './DashScreen/DashScreen'
import ReportScreen from './ReportScreen/ReportScreen'
import PagesScreen from './PagesScreen/PagesScreen'
import ProfileScreen from './ProfileScreen/ProfileScreen'

const PrivateScreen = () => {
  const { layout } = useContext(LayoutPrivateContext)

  return (
    <PrivateLayout>
      <TransitionGroup>
        <CSSTransition key={layout.location.key} classNames='page' timeout={0}>
          <Switch>
            <PrivateRouter path="/app/profile" component={ProfileScreen} />
            <PrivateRouter path="/app/pages" component={PagesScreen} />
            <PrivateRouter path="/app/dashboard" component={DashScreen} />
            <PrivateRouter exact path="/app/report" component={ReportScreen} />
            <Route exact path="/app" render={() => (<Redirect  to="/app/dashboard" />)} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Notification />
    </PrivateLayout>
  )
}

export default PrivateScreen
