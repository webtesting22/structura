import React, { useState, useEffect } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import TopBack from '../Navigation/ResidentialBacl.webp';
import "./AllProjects.css";
import AllProjectsData from "./AllProjectsData";
import { Row, Col } from "antd";

const AllProjects = () => {
    const [activeTab, setActiveTab] = useState('Residential');
    const [activeSubTab, setActiveSubTab] = useState('Ongoing');
    const [selectedTitle, setSelectedTitle] = useState(AllProjectsData[0].Title);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if it's mobile on initial render

    // Function to handle window resize
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/AllProjects", name: "AllProjects" },
        // Add more links as needed
    ];

    // const filteredProjects = AllProjectsData.filter(project => {
    //     const matchesCategory = project.cardCategory.includes(activeTab);
    //     const matchesStatus = project.Status === activeSubTab;
    //     return matchesCategory && matchesStatus;
    // });

    const truncateTitle = (title, length) => {
        if (title.length > length) {
            return title.substring(0, length) + '...';
        }
        return title;
    };


    return (
        <>
            <StructuraCommonHero
                image={TopBack}
                text="All the Project Here"
                routeLinks={routeLinks}
            />
            <section id="AllProjects">
                <div className="container">
                    <div className="Smalltagline">
                        <h4 className="sectionHeading"><div></div>All Projects</h4>
                    </div>
                    {/* <h1 data-aos="fade-up" className="bigHeading" data-aos-duration="1000">
                        Residential and Commercial Projects
                    </h1> */}
                </div>
                {/* <div className="sectionPadding"></div> */}
                {/* <div className="categoryProjectsBtn">
                    <button 
                        className={activeTab === 'Residential' ? 'activeBtn' : 'nonActiveBtn'} 
                        onClick={() => setActiveTab('Residential')}
                    >
                        Residential
                    </button>
                    <button 
                        className={activeTab === 'Commercial' ? 'activeBtn' : 'nonActiveBtn'} 
                        onClick={() => setActiveTab('Commercial')}
                    >
                        Commercial
                    </button>
                </div>
               <br />
                <div className="subCategoryProjectsBtn">
                    <button
                        className={activeSubTab === 'Ongoing' ? 'activeBtnSub' : 'nonActiveBtnSub'}
                        onClick={() => setActiveSubTab('Ongoing')}
                    >
                        Ongoing
                    </button>
                    <button
                        className={activeSubTab === 'Completed' ? 'activeBtnSub' : 'nonActiveBtnSub'}
                        onClick={() => setActiveSubTab('Completed')}
                    >
                        Completed
                    </button>
                </div> */}
                {/* <div className="sectionPadding"></div> */}

                <div className="ColumsStyleContainers">
                    <div className="FiltersContainers">
                        <div className="FilterContainer">
                            {/* <ul style={{ padding: "0px" }}>
                                {AllProjectsData.map((item, index) => (
                                    <li key={index} onClick={() => setSelectedTitle(item.Title)} className={selectedTitle === item.Title ? 'nonActiveBtnActive' : 'nonActiveBtn'} style={{ margin: "20px 0px" }}>
                                        {item.Title}
                                    </li>
                                ))}

                            </ul> */}
                            {isMobile ? (
                                <select
                                    value={selectedTitle}
                                    onChange={(e) => {
                                        setSelectedTitle(e.target.value);
                                        const selectedIndex = AllProjectsData.findIndex(item => item.Title === e.target.value);
                                        setActiveTab(selectedIndex);
                                    }}
                                    id="SelectMobile"
                                >
                                    {AllProjectsData.map((item, index) => (
                                        <option key={index} value={item.Title}>
                                            {item.Title}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <ul style={{ padding: "0px" }}>
                                    {AllProjectsData.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setSelectedTitle(item.Title);
                                                setActiveTab(index);
                                            }}
                                            className={selectedTitle === item.Title ? 'nonActiveBtnActive' : 'nonActiveBtn'}
                                            style={{ margin: "20px 0px", cursor: 'pointer' }}
                                        >
                                            {item.Title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="FiltersProjectsContainer">
                        <div className="ProjectsDataContainer">
                            <Row>
                                {AllProjectsData.filter(project => project.Title === selectedTitle).map((filteredProject, index) => (
                                    filteredProject.ProjectDetails.map((details, detailIndex) => (
                                        <Col lg={8} md={12} key={detailIndex}>
                                            <div
                                                className="projectsCardDesigns"
                                                data-aos="fade-up"
                                                data-aos-delay={`${index * 300}`}
                                                data-aos-duration="1000"
                                            >
                                                <div className="cardImage">
                                                    <img src={details.cardImage} alt={details.cardTitle} />
                                                </div>
                                                <div className="cardContent">
                                                    <span className="Category">{details.Status}</span>
                                                    <h2>{truncateTitle(details.cardTitle, 20)}</h2>
                                                    <br />
                                                    <div>
                                                        <span>Developer</span>
                                                        <p style={{ fontSize: "15px", marginTo: "10px" }}>{details.Developer ? (
                                                            details.Developer
                                                        ) : (
                                                            <i className='bx bx-hard-hat'></i>
                                                        )}</p>
                                                    </div>
                                                    <div className="arrowIcon">
                                                        <i className='bx bx-right-arrow-alt'></i>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </Col>
                                    ))
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default AllProjects;
