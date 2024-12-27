import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./nav.css";
import StructuraLogo from "/images/structuraLogo.png"
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isProjectsOpen, setIsProjectsOpen] = useState(false); // Mobile dropdown state

    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };
    const toggleProjectsDropdown = () => {
        setIsProjectsOpen(!isProjectsOpen);
    };
    const hideNav = () => {
        setIsNavVisible(false);
    }
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = window.innerWidth <= 768; // Check if the screen width is mobile

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            // Check if the scroll position is greater than 500px for devices with width >= 700px
            if (window.scrollY > 500 && window.innerWidth >= 700) {
                setIsScrolled(true);
            }
            // For mobile devices (width < 700px) and scroll position > 200px, adjust the threshold accordingly
            else if (window.scrollY > 200 && window.innerWidth < 700) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar ${isNavVisible ? 'nav-open' : ''}`} style={{ backdropFilter: isScrolled ? "blur(5px)" : "blur(0px)", background: isScrolled ? "white" : "transparent" }}>

            <div className="logo-container">
                <Link to="/" onClick={() => hideNav()}>
                    <img src={StructuraLogo} />
                </Link>
            </div>

            <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>

                <div className="overlay"> </div>
                <ul>
                    <li onClick={toggleNav}><Link to="/AboutUs" style={{ color: isMobile || isScrolled ? "black" : "white" }}>About Us</Link></li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => setIsProjectsOpen(true)}
                        onMouseLeave={() => setIsProjectsOpen(false)}
                        onClick={toggleProjectsDropdown}
                    >
                        <span className="nav-link" style={{ color: isMobile || isScrolled ? "black" : "white",cursor:"pointer" }}>Projects</span>
                        <ul className={`dropdown-menu ${isProjectsOpen ? "open" : ""}`}>
                            <li onClick={toggleNav} >
                                <Link to="/Projects">Structural Projects</Link>
                            </li>
                            <li onClick={toggleNav}>
                                <Link to="/Drafting">Drafting Projects</Link>
                            </li>
                        </ul>
                    </li>
                    <li onClick={toggleNav}><Link to="/ClientsAndDirectors" style={{ color: isMobile || isScrolled ? "black" : "white" }}>Directors And Clients</Link></li>
                    <li onClick={toggleNav}><Link to="/Services" style={{ color: isMobile || isScrolled ? "black" : "white" }}>Services</Link></li>
                    <li onClick={toggleNav}><Link to="/Contact" style={{ color: isMobile || isScrolled ? "black" : "white" }}>Contact</Link></li>
                    {/* <li><Link to="https://nirmaan-main.vercel.app/" target="_blank">Nirmaan</Link></li> */}
                </ul>

            </div>
            <button
                className="nav-toggler"
                onClick={toggleNav}
                style={{ borderRadius: '8px', color: isScrolled ? 'black' : 'white' }}
            >
                {isNavVisible ? <RxCross2 /> : <MdMenu />}
            </button>
        </nav >
    );
};

export default Navigation;
