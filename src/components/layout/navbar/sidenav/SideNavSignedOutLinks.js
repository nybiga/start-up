import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavSignedOutLinks = () => {
  return (
        <div className=''>
            <li><NavLink to='/' className="">Join Us</NavLink></li>
            <li><NavLink to='/' className=''>Login</NavLink></li>
        </div>
  )
}

export default SideNavSignedOutLinks