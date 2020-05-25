import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Timothy Hart
            </Link>
        </nav>
    );
}

export default NavBar;