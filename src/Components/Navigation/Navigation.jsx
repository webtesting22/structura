import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import StructuraLogo from "/images/logoNoBG.png"
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    return (
        <nav className={`navbar ${isNavVisible ? 'nav-open' : ''}`}>

            <div className="logo-container">
                <Link to="/">
                    <img src={StructuraLogo} />
                </Link>
            </div>
          
            <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
            
            <div className="overlay"> </div>
                <ul>
                    <li onClick={toggleNav}><Link to="/AboutUs">About Us</Link></li>
                    <li onClick={toggleNav}><Link to="/AllProjects">All Projects</Link></li>
                    <li onClick={toggleNav}><Link to="/ClientsAndDirectors">Directors And Clients</Link></li>
                    <li onClick={toggleNav}><Link to="/AllServices">Services</Link></li>
                    {/* <li><Link to="https://nirmaan-main.vercel.app/" target="_blank">Nirmaan</Link></li> */}
                </ul>
               
            </div>
            <button className="nav-toggler" onClick={toggleNav} style={{ borderRadius: "8px" }}>
                {/* Menu */}
                {isNavVisible ? <RxCross2 /> : <MdMenu />}

            </button>
        </nav>
    );
};

export default Navigation;
