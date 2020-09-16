import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavSignedInLinks = () => {
  return (
    <div>
        <li><NavLink to='/'>Log Out</NavLink></li>
    </div>
  )
}

export default SideNavSignedInLinks