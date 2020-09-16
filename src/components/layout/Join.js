import React from 'react'
import { NavLink } from 'react-router-dom'

const Join = () => {
    return (
        <div className="home2 green lighten-1">
            <div className="container">
                <div class="row">
                    <div className="input-field col l3 s12">
                        <p className="white-text">
                            Ready to make your journey with us? 
                            Join our community today.
                        </p>
                    </div>
                        <div class="input-field col l2 s6">
                            <input id="first_name" type="text" className="validate white-text" />
                            <label className="active white-text" for="first_name">First Name</label>
                        </div>
                        <div class="input-field col l2 s6">
                            <input id="last_name" type="text" className="validate white-text" />
                            <label className="active white-text" for="last_name">Last Name</label>
                        </div>
                        <div class="input-field col l2 s6">
                            <input id="email" type="email" className="validate white-text" />
                            <label className="active white-text" for="email">Email</label>
                        </div>
                        <div class="input-field col l2 s6">
                            <NavLink to='/' className="waves-effect btn z-depth-0 green darken-3" width="10px">Join Us</NavLink>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Join