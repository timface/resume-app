import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-left navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Timothy Hart
            </Link>
            <Link className="nav nav-item nav-link text-white" to="/workhistory">Employment History</Link>
            <Link className="nav nav-item nav-link text-white" to="/eduhistory">Education History</Link>
            <Link className="nav nav-item nav-link text-white" to="/skills">Skills</Link>
            <Link className="nav nav-item nav-link text-white" to="/testimonials">Testimonials</Link>
            <Link className="nav nav-item nav-link text-white" to='/contact'>Contact Me</Link>
        </nav>
    );
}

export default NavBar;