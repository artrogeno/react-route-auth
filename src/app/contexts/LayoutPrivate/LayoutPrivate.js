import React from 'react'
import { getStorage } from '../../utils'

export const layoutDefault = {
  appTitle: getStorage('app-title') || 'Artrogeno',
  sidebar: true,
  match: {},
  location: {},
  history: {}
}

export const LayoutPrivateContext = React.createContext({
  layout: layoutDefault,
  changeLayout: () => {},
  toggleSideBar: () => {}
})
