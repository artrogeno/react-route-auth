import React from 'react'

export const load = {
  isLoad: false
}

export const LoadContext = React.createContext({
  load: load,
  changeLoad: () => {}
})
