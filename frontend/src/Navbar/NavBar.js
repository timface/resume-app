import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container fixed-top">
            <nav className="navbar navbar-expand navbar-left bg-info">
                <Link className="navbar-brand text-white" to="/">
                    Timothy Hart
            </Link>
                <Link className="nav nav-item nav-link text-white" to="/workhistory">Employment History</Link>
                <Link className="nav nav-item nav-link text-white" to="/eduhistory">Education History</Link>
                <Link className="nav nav-item nav-link text-white" to="/skills">Skills</Link>
                <Link className="nav nav-item nav-link text-white" to="/testimonials">Testimonials</Link>
                <Link className="nav nav-item nav-link text-white" to='/contact'>Contact Me</Link>
            </nav>
        </div>
    );
}

export default NavBar;