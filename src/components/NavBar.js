import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="nav-bar">      
                <Link to='/' className='nav-bar__links'>Home</Link>
                <Link to='/blog' className='nav-bar__links'>Blog</Link>
                <Link to='/work' className='nav-bar__links'>Work</Link>           
        </nav>
    )
}

export default NavBar