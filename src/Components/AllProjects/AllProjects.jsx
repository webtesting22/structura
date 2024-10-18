import React, { useState, useEffect } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import TopBack from '../AllProjects/2.png';
import "./AllProjects.css";
import AllProjectsData from "./AllProjectsData";
import { Row, Col, Modal } from "antd";

const AllProjects = () => {
    const [activeTab, setActiveTab] = useState('Residential');
    const [selectedTitle, setSelectedTitle] = useState(AllProjectsData[0].Title);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Check if it's mobile on initial render
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalDetails, setModalDetails] = useState(null);

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
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/AllProjects", name: "All Projects" },
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

    const showModal = (details) => {
        setModalDetails(details);
        setIsModalOpen(true);
        console.log("open")

    };

    const handleOk = () => {
        setIsModalOpen(false);
        setModalDetails(null);

    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setModalDetails(null);

    };


    return (
        <>
            <StructuraCommonHero
                image={TopBack}
                text="Innovative Projects, Proven Success"
                routeLinks={routeLinks}
            />
            <section id="AllProjects">
                <div className="container">
                    <div className="Smalltagline">
                        <h4 className="sectionHeading"><div></div>All Projects</h4>
                    </div>

                </div>


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
                                                onClick={() => showModal(details)}
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
                                                    <h2 >{truncateTitle(details.cardTitle, 30)}</h2>
                                                    {/* <Modal mask={false} title="Project Images" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                                        <Col span={8}><img src={details.galleryImages} className="modalImage" /></Col>
                                                    </Modal> */}
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
                            {modalDetails && (
                                <Modal
                                    width={800}
                                    title="Project Gallery"
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    style={{ boxShadow: "none" }}
                                    footer={null}
                                    className="ProjectModal"
                                >
                                    <Row>
                                        {modalDetails.galleryImages && modalDetails.galleryImages.length > 0 ? (
                                            modalDetails.galleryImages.map((image, index) => (
                                                <Col lg={12} key={index}>
                                                    <div style={{ padding: "5px" }}>
                                                        <img style={{ width: "100%" }} src={image} className="modalImage" alt={`Project Image ${index + 1}`} />
                                                    </div>
                                                </Col>
                                            ))
                                        ) : (
                                            <Col lg={24} style={{ textAlign: 'center', padding: '20px' }}>
                                                <p>No Images Found</p>
                                            </Col>
                                        )}
                                    </Row>
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default AllProjects;
