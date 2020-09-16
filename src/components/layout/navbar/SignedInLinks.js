import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div className="right">
        <NavLink to='/'>Log Out</NavLink>
    </div>
  )
}

export default SignedInLinks