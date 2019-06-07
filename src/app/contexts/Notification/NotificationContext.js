import React from 'react'

export const notificationDefault = {
  sideNotification: false,
  count: 6,
  list: []
}

export const NotificationContext = React.createContext({
  notification: notificationDefault,
  changeNotification: () => {},
  toggleSideNotification: () => {}
})
