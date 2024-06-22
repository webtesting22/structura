import React, { useState, useEffect } from "react";
import { Button, Drawer } from 'antd';
import "./navigation.css";
import { Link } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Row, Col } from "antd"
import LocationIcon from "../../../public/images/LocationIcon.png"
import AllProjectsData from "../AllProjects/AllProjectsData";
// import ResidentialBack from "./ResidentialBack.webp"
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [secondChildrenDrawer, setSecondChildrenDrawer] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    const showSecondChildrenDrawer = () => {
        setSecondChildrenDrawer(true);
    };

    const onSecondChildrenDrawerClose = () => {
        setSecondChildrenDrawer(false);
    };

    const NavigationLinks = [
        {
            NavLink: "About Us",
            path: "/AboutUs"
        },
        {
            NavLink: "All Projects",
            path: "/AllProjects"
        },
        {
            NavLink: "High Rise Buildings",
            onClick: showChildrenDrawer
        },
        {
            NavLink: "Bunglows",
            onClick: showSecondChildrenDrawer
        },
        {
            NavLink: "Directors and Clients",
            path: "/clientsanddirectors"
        },
        {
            NavLink: "Services",
            path: "/allservices"
        },
    ];
    const handleLinkClick = (item) => {
        if (!item.onClick) {
            onClose();
        }
    };
    const [activeTab, setActiveTab] = useState('Residential');


    const ResidentialProjectsCardData = [
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "GANDHINAGAR",
            cardTitle: "NIRMAAN SATVA"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "AHMEDABAD",
            cardTitle: "NIRMAAN HEIGHTS"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "ANAND",
            cardTitle: "SUKIRTAN AURA"
        },

    ]
    const CommertialProjectsCardData = [
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },

    ]
    return (
        <>
            <header className={`structuranavigationContainer ${isScrolled ? 'scrolled' : ''}`}>
                <div className="inside-header-container">
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Link to="/"><h2 className="logo">Structura</h2></Link>
                    </div>
                    <div>
                        <Button type="primary" onClick={showDrawer}>
                            Menu
                        </Button>
                    </div>
                </div>
            </header>

            <Drawer
                width={520}
                closable={false}
                onClose={onClose}
                open={open}
                id="MainDrawerBack"
            >
                <div className="overlayContainer">

                </div>
                <div className="DrawerBody">

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 className="structuraTitle"><span>S</span>tructura</h3>
                        <button className="closedBtn" onClick={onClose}>Closed</button>
                    </div>
                    <div className="listContainer">
                        <ul>
                            {NavigationLinks.map((item, index) => (
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <li key={index} className="nav-item" onClick={() => handleLinkClick(item)}>

                                        {item.path ? (
                                            <Link to={item.path}>
                                                <h4>{item.NavLink}</h4>
                                            </Link>
                                        ) : (
                                            <h4 onClick={item.onClick ? item.onClick : null}>
                                                {item.NavLink}
                                            </h4>
                                        )}

                                    </li>
                                    <div className="animationBoxContainer">
                                        <FaCircleArrowRight />
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ChildDrawers ---------------------------------*/}
                <div className="ChildDrawers">
                    <Drawer

                        width={450}
                        closable={false}
                        onClose={onChildrenDrawerClose}
                        open={childrenDrawer}
                    >
                        {/* <div className="overlayContainerTwo">

                        </div> */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                            <div>
                                <h3>High Rise Buildings</h3>
                            </div>
                            <button className="closedBtn" onClick={onChildrenDrawerClose}>Closed</button>
                        </div>
                        <div className="projectNavRow">
                            <Row>
                                {AllProjectsData[0].ProjectDetails.slice(0, 3).map((item, index) => (
                                    <Col lg={24} md={8} key={index}>
                                        <div className="projectsCardDesigns" >
                                            <div className="cardImage" style={{ height: "30vh", overflow: "hidden" }}>
                                                <img src={item.cardImage} alt="" />
                                            </div>
                                            <div className="cardContent">
                                                <span className="Category" style={{ display: "flex", alignItems: "center" }}><img src={LocationIcon} alt="" style={{ width: "15px", height: "15px" }} />&nbsp;{item.Location}</span>
                                                <h2>{item.cardTitle}</h2>
                                                <div className="arrowIcon">
                                                    <i className='bx bx-right-arrow-alt'></i> {/* Note: Use className instead of class for React */}
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                    </Col>
                                ))}
                            </Row>
                            <Link to="/AllProjects" onClick={() => {
                                onClose();
                                onChildrenDrawerClose();
                            }}
                            ><button className="commomBtn" style={{ width: "100%" }}>Explore All Projects</button></Link>
                        </div>
                    </Drawer>
                    <Drawer

                        width={450}
                        closable={false}
                        onClose={onSecondChildrenDrawerClose}
                        open={secondChildrenDrawer}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                            <div>
                                <h4>Bunglows</h4>
                            </div>

                            <button className="closedBtn" onClick={onSecondChildrenDrawerClose}>Closed</button>
                        </div>
                        <div className="projectNavRow">
                            <Row>
                                {AllProjectsData[1].ProjectDetails.slice(0, 3).map((item, index) => (
                                    <Col lg={24} md={8} key={index}>
                                        <div className="projectsCardDesigns" >
                                            <div className="cardImage" style={{ height: "30vh", overflow: "hidden" }}>
                                                <img src={item.cardImage} alt="" />
                                            </div>
                                            <div className="cardContent">
                                                <span className="Category" style={{ display: "flex", alignItems: "center" }}><img src={LocationIcon} alt="" style={{ width: "15px", height: "15px" }} />&nbsp;{item.Location}</span>
                                                <h2>{item.cardTitle}</h2>
                                                <div className="arrowIcon">
                                                    <i className='bx bx-right-arrow-alt'></i> 
                                                </div>
                                            </div>
                                            <hr />
                                        </div>

                                    </Col>
                                ))}
                            </Row>
                            <Link to="/AllProjects" onClick={() => {
                                onClose();
                                onSecondChildrenDrawerClose();
                            }}
                            ><button className="commomBtn" style={{ width: "100%" }}>Explore All Projects</button></Link>
                        </div>
                    </Drawer>
                </div>
                {/* ChildDrawers ---------------------------------*/}
            </Drawer>
        </>
    );
};

export default Navigation;
