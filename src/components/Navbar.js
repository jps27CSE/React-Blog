import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper orange">
                    <a href="#" className="brand-logo ">Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down ">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/post">Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar