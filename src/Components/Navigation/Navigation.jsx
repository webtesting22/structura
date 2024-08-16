import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";
import LocationIcon from "../../../public/images/LocationIcon.png";
import "./nav.css";

const Navigation = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setIsNavVisible(prevState => !prevState);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <Link to="/">
                    <h2 className="logo">Structura</h2>
                </Link>
            </div>

            <div className={`nav-menu ${isNavVisible ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/AllProjects">All Projects</Link></li>
                    <li><Link to="/ClientsAndDirectors">Directors And Clients</Link></li>
                    <li><Link to="/AllServices">Services</Link></li>
                </ul>
            </div>
            <button className="nav-toggler" onClick={toggleNav}>
                Menu
            </button>
        </nav>
    );
};

export default Navigation;
