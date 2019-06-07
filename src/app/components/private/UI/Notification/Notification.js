import React, { Fragment, useContext } from 'react'
import { Container, Row, Col, Button, CustomInput } from 'reactstrap'
import moment from 'moment'

import { NotificationContext } from 'app/contexts/Notification/NotificationContext'
import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'

const Notification = () => {
  let { notification, toggleSideNotification } = useContext(NotificationContext)
  const { layout: {theme} } = useContext(LayoutPrivateContext)
  let date = {
    today: moment().format('dddd'),
    day: moment().format('DD'),
    month: moment().format('MMMM')
  }


  return (
    <Fragment>
      <div className={`side-notifications no-padding  ${theme} ${notification.sideNotification ? 'opened' : 'closed'}`}>
        <Container className='container-notifications no-padding' fluid>
          <Button className='btn-icon btn-close-notification' onClick={toggleSideNotification}>
            <span className='icon ar-pack-multiply size-rem-0-8'></span>
          </Button>
          <Row noGutters>
            <Col md={12}>
              <h3 className='subheader-notifications'>Today</h3>
              <div className='today-notifications'>
                <p>{date.today}</p>
                <div className='date-notifications'>
                  <div>{date.day}</div>
                  <div>th</div>
                  <div>{date.month}</div>
                </div>
              </div>
              <hr className='divider-notifications' />
            </Col>
            <Col md={12}>
              <h3 className='subheader-notifications'>Events</h3>
              <div className='event-notifications'>
                <div className='item-notifications'>
                  <span>Group Meeting</span>
                  <p>in 12:00 Minutes, Room 2C</p>
                </div>
                <div className='item-notifications'>
                  <span>QA Meeting</span>
                  <p>09:00 PM</p>
                </div>
                <div className='item-notifications'>
                  <span>Manager Meeting</span>
                  <p>12:00 PM</p>
                </div>
              </div>
              <hr className='divider-notifications' />
            </Col>
            <Col md={12}>
              <h3 className='subheader-notifications'>Notes</h3>
              <div className='note-notifications'>
                <div className='item-notifications'>
                  <span>Best songs to listen while working</span>
                  <p>Last edit: May 8th, 2015</p>
                </div>
                <div className='item-notifications'>
                  <span>Useful subreddits</span>
                  <p>Last edit: January 12th, 2015</p>
                </div>
              </div>
              <hr className='divider-notifications' />
            </Col>
            <Col md={12}>
              <h3 className='subheader-notifications'>Quick Settings</h3>
              <div className='settings-notifications'>
                <div className='inputs-notifications'>
                  <div>
                    <span className='icon ar-pack-alarm size-rem-1-2'></span>
                  </div>
                  <div>Notifications</div>
                  <div>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
                  </div>
                </div>
                <div className='inputs-notifications'>
                  <div>
                    <span className='icon ar-pack-cloud size-rem-1-2'></span>
                  </div>
                  <div>Cloud Sync</div>
                  <div>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
                  </div>
                </div>
                <div className='inputs-notifications'>
                  <div>
                    <span className='icon ar-pack-repeat-1 size-rem-1-2'></span>
                  </div>
                  <div>Update Jobs</div>
                  <div>
                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch"/>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={`backdrop-notifications ${notification.sideNotification ? 'opened' : 'closed'}`} onClick={toggleSideNotification}></div>
    </Fragment>
  )
}

export default Notification
