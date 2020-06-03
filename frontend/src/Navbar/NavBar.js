import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="container fixed-top">
            <nav className="navbar navbar-expand-lg navbar-left bg-info">
                <Link className="navbar-brand text-white" to="/">Timothy Hart</Link>
                <button class="navbar-toggler bg-danger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-dark" id="navbarSupportedContent">
                    <div className="nav navbar-nav">
                        <Link className="nav nav-item nav-link text-white" to="/workhistory">Employment History</Link>
                        <Link className="nav nav-item nav-link text-white" to="/eduhistory">Education History</Link>
                        <Link className="nav nav-item nav-link text-white" to="/skills">Skills</Link>
                        <Link className="nav nav-item nav-link text-white" to="/testimonials">Testimonials</Link>
                        <Link className="nav nav-item nav-link text-white" to='/contact'>Contact Me</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;