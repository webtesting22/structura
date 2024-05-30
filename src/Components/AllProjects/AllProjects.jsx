import React, { useState } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import TopBack from '../Navigation/ResidentialBacl.webp';
import "./AllProjects.css";
import AllProjectsData from "./AllProjectsData";
import { Row, Col } from "antd";

const AllProjects = () => {
    const [activeTab, setActiveTab] = useState('Residential');
    const [activeSubTab, setActiveSubTab] = useState('Ongoing');
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/AllProjects", name: "AllProjects" },
        // Add more links as needed
    ];

    const filteredProjects = AllProjectsData.filter(project => {
        const matchesCategory = project.cardCategory.includes(activeTab);
        const matchesStatus = project.Status === activeSubTab;
        return matchesCategory && matchesStatus;
    });

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
                    <h1 data-aos="fade-up" className="bigHeading" data-aos-duration="1000">
                        Residential and Commercial Projects
                    </h1>
                </div>
                <div className="sectionPadding"></div>
                <div className="categoryProjectsBtn">
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
                </div>
                <div className="sectionPadding"></div>
                <div className="ProjectsDataContainer">
                    <Row>
                        {filteredProjects.map((project, index) => (
                            <Col lg={6} key={index}>
                                <div 
                                    className="projectsCardDesigns" 
                                    data-aos="fade-up" 
                                    data-aos-delay={`${index * 300}`} 
                                    data-aos-duration="1000"
                                >
                                    <div className="cardImage">
                                        <img src={project.cardImage} alt={project.cardTitle} />
                                    </div>
                                    <div className="cardContent">
                                        <span className="Category">{project.Status}</span>
                                        <h2>{project.cardTitle}</h2>
                                        <div className="arrowIcon">
                                            <i className='bx bx-right-arrow-alt'></i> {/* Note: Use className instead of class for React */}
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    );
}

export default AllProjects;
