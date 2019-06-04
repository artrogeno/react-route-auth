import React, { useContext } from 'react'
import { Spinner } from 'reactstrap'

import { LoadContext } from 'app/contexts/Load/LoadContext'
import './Load.scss'

const Load = (props) => {
  const { load } = useContext(LoadContext)

  return (
    <div className={`Load ${load.isLoad ? 'show' : ''}`}>
      <div className={`load-overlay ${load.isLoad ? 'show' : ''}`}></div>
      <div className='load-spinner d-flex justify-content-center'>
        <Spinner style={{ width: '5rem', height: '5rem' }} color="success" type="grow" />
      </div>
      <div className='load-text d-flex justify-content-center'>
        <span>loading...</span>
      </div>
    </div>
  )
}

export default Load
