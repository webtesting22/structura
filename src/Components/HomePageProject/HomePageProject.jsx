import React, { useState } from "react";
import "./HomePageProject.css"
import { Row, Col } from "antd";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import AllProjectsData from "../AllProjects/AllProjectsData";
const HomePageProject = () => {
    const [activeTab, setActiveTab] = useState('Residential');



    return (
        <>
            <section id="HomePageprojectsSection">
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>

                <div className="sectionHeaderPart">
                    <div>
                        <div className="Smalltagline"><h4><div></div>FEATURED PROJECTS</h4></div>
                    </div>
                    <div className="headingTabsSection">
                        <div>
                            <h1 className="sectionHeading">We Build the Projects</h1>
                        </div>
                        {/* <div className="categoryProjectsBtn">
                            <button className={activeTab === 'Residential' ? 'activeBtn' : 'nonActiveBtn'} onClick={() => setActiveTab('Residential')}>Residential</button>
                            <button className={activeTab === 'Commercial' ? 'activeBtn' : 'nonActiveBtn'} onClick={() => setActiveTab('Commercial')}>Commercial</button>
                        </div> */}
                    </div>
                </div>

                <div className="tabsContentcards">
                    <div className="cardsContent">
                        <Row>
                            {AllProjectsData[0].ProjectDetails.slice(0, 3).map((item, index) => (
                                <Col lg={8} md={8} key={index}>
                                    <div className="projectsCardDesigns" data-aos="fade-up" data-aos-delay={`${index * 300}`} data-aos-duration="1000">
                                        <div className="cardImage">
                                            <img src={item.cardImage} alt={item.cardTitle} />
                                        </div>
                                        <div className="cardContent">
                                            <h2>{item.cardTitle}</h2>
                                            {/* Add other content here */}
                                        </div>
                                        <div className="arrowIcon">
                                            <i className='bx bx-right-arrow-alt'></i> {/* Note: Use className instead of class for React */}
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                            ))}

                            {/* {AllProjectsData[0].map((projectSet, setIndex) => (
                                <div key={setIndex} style={{width:"100%"}}>
                                    <h2>{projectSet.Title}</h2>
                                    <Row>
                                        {projectSet.ProjectDetails.slice(0, 3).map((item, index) => (
                                            <Col lg={8} md={8} key={index}>
                                                <div className="projectsCardDesigns" data-aos="fade-up" data-aos-delay={`${index * 300}`} data-aos-duration="400">
                                                    <div className="cardImage">
                                                        <img src={item.cardImage} alt={item.cardTitle} />
                                                    </div>
                                                    <div className="cardContent">
                                                        <h3>{item.cardTitle}</h3>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ))} */}

                        </Row>

                    </div>
                </div>
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>
            </section>

        </>
    )
}
export default HomePageProject