import React from 'react';
import { NavLink } from "react-router-dom"

const SingnedOutLinks = () => {
    return (
        <ul className ="right">
            <li><NavLink to="/signUp">Sign Up</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
        </ul>

    )
}

export default SingnedOutLinks