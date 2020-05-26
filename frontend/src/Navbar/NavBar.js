import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand navbar-left navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand ml-5" to="/">
                Timothy Hart
            </Link>
            <Link className="nav-item text-white mr-2" to="/workhistory">Employment History</Link>
            <Link className="nav-item text-white mr-2" to="/eduhistory">Education History</Link>
            <Link className="nav-item text-white mr-2" to="/skills">Skills</Link>
        </nav>
    );
}

export default NavBar;