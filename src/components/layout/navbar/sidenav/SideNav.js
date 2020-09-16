import React from 'react'
import { Link } from 'react-router-dom'
import SideNavSignedInLinks from './SideNavSignedInLinks'
import SideNavSignedOutLinks from './SideNavSignedOutLinks'

const SideNavbar = () => {
  return (
        <div className="sidenav green lighten-1" id="mobile-menu">
            <li><Link to='/' className="">About Us</Link></li>
            <li><Link to='/' className="">Our Community</Link></li>
            <li><Link to='/' className="">Events</Link></li>
            <li><Link to='/' className="">Startups</Link></li>
            <SideNavSignedOutLinks />
            <SideNavSignedInLinks />
        </div>
  )
}

export default SideNavbar