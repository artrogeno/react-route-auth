import React, { useContext } from 'react'
import { LayoutPrivateContext } from 'app/contexts/LayoutPrivate/LayoutPrivate'

import './SideArrow.scss'

const SideArrow = () => {

  let { layout: { sidebar } } = useContext(LayoutPrivateContext)

  const isActive = (status) => {
    let classes = ['SideArrow']
    classes.push(status ? 'active' : '')
    return classes.join(' ')
  }

  return (
    <div className={isActive(sidebar)}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </div>
  )
}

export default SideArrow
