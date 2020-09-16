import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
        <div className='right'>
            <NavLink to='/' className="btn z-depth-0 green">Join Us</NavLink>
            <NavLink to='/' className='btn z-depth-0 transparent grey-text'>Login</NavLink>
        </div>
  )
}

export default SignedOutLinks