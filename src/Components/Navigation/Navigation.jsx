import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import CloseIcon from "../../../public/images/cross.png";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };

    return (
        <nav className={`navbar ${isNavVisible ? 'nav-open' : ''}`}>

            <div className="logo-container">
                <Link to="/">
                    <h2 className="logo">Structura</h2>
                </Link>
            </div>

            <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
                <ul>
                    <li onClick={toggleNav}><Link to="/AboutUs">About Us</Link></li>
                    <li onClick={toggleNav}><Link to="/AllProjects">All Projects</Link></li>
                    <li onClick={toggleNav}><Link to="/ClientsAndDirectors">Directors And Clients</Link></li>
                    <li onClick={toggleNav}><Link to="/AllServices">Services</Link></li>
                </ul>
            </div>
            <button className="nav-toggler" onClick={toggleNav} style={{borderRadius:"8px"}}>
                {/* Menu */}
                {isNavVisible? <RxCross2 /> : <MdMenu />}
               
            </button>
        </nav>
    );
};

export default Navigation;
