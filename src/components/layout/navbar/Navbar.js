import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../img/logo.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import SideNavbar from './sidenav/SideNav'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="nav-wrapper white z-depth-0">
        <div className="">
            <div className="brand-logo">
              <Link><img src={Logo} alt='Logo' height='80px'/></Link>
            </div>
          <Link className="sidenav-trigger menu" data-target="mobile-menu">
            <AiOutlineMenu className="black-text" fontSize="25px"/>
          </Link>
            <div className="center hide-on-med-and-down">
            <ul className="nav-center">
              <li><Link to='/' className="grey-text link">About Us</Link></li>
              <li><Link to='/' className="grey-text link">Our Community</Link></li>
              <li><Link to='/' className="grey-text link">Events</Link></li>
              <li><Link to='/' className="grey-text link">Startups</Link></li>
            </ul>
              <SignedOutLinks />
              <SignedInLinks />
            </div>
            <SideNavbar />
        </div>
    </nav>

  )
}

export default Navbar