import React from 'react';
import { NavLink } from "react-router-dom"

const SingnedLincks = () => {
    return (
        <ul className ="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating ping lighten-1">NN</NavLink></li>
        </ul>

    )
}

export default SingnedLincks