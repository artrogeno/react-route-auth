import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { UncontrolledTooltip } from 'reactstrap'

const TooltipIconLink = (props) => {
  let { uri, icon, title, tooltip, tooltipid, action = false } = props
  return (
    <Fragment>
      {/* <NavLink to={uri} id={tooltipid}> */}
      <NavLink to={uri} id='TooltipDash'>
        <span className={`icon ${icon}`}></span>
        <span className="title">{title}</span>
      </NavLink>
      {
        action ? (
          <UncontrolledTooltip placement='right' target={tooltipid}> {tooltip} </UncontrolledTooltip>
        ) : null
      }
    </Fragment>
  )
}

export default TooltipIconLink
