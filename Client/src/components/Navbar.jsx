import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/feedback">Feedback</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">Sign in</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
