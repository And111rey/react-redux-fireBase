import React from 'react';
import { Link } from "react-router-dom"
import SingnedLincks from "./SignedLinks"
import SingnedOutLinks from "./SignedOut"

const Navbar = () => {
    return (
        <nav className ="nav-wrapper grey darken-3">
            <div className="container">
                <Link to="/" className="brand">Andrey</Link>
                <SingnedLincks/>
                <SingnedOutLinks/>
            </div>
        </nav>

    )
}

export default Navbar