import React, { useState, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadContext } from './contexts/Load/LoadContext'

import Routes from './routes'

const App = () => {
  const { load } = useContext(LoadContext)
  const [loading, setLoading] = useState({
    load: load,
    changeLoad: () => {
      let updateLoad = { ...loading }
      updateLoad.load.isLoad = !load.isLoad
      setLoading(updateLoad)
    }
  })

  return (
    <BrowserRouter>
      <LoadContext.Provider value={loading}>
        <Routes />
      </LoadContext.Provider>
    </BrowserRouter>
  )
}

export default App
