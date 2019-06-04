import React from 'react'

export const layout = {
  config: {
    appTitle: '',
    sidebar: true,
    auth: false,
    match: {},
    location: {},
    history: {}
  }
}

export const LayoutContext = React.createContext({
  config: layout.config,
  toggleSideBar: () => {}
})
