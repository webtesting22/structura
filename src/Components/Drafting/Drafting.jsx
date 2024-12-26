import React, { useState, useEffect, useRef } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import TopBack from "/images/ProjectsImages/Banglows/JAYANI FARM/02.jpeg"
import "../AllProjects/AllProjects.css"
// import "./AllProjects.css";
import { Row, Col, Modal, Image, Button } from "antd";
import DraftingData from "./DraftingProjectData.jsx"
import { Link } from "react-router-dom";

const Drafting = () => {
    const [activeTab, setActiveTab] = useState('DXU');
    const [selectedTitle, setSelectedTitle] = useState(DraftingData[0].Title);
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
    const filterProjectsContainerRef = useRef(null);
    const offsetValue = 150; // Set your desired offset here

    const handleLinkClick = () => {
        if (filterProjectsContainerRef.current) {
            const rect = filterProjectsContainerRef.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetPosition = rect.top + scrollTop - offsetValue;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };
    const truncateTitle = (title, length) => {
        if (title.length > length) {
            return title.substring(0, length) + '...';
        }
        return title;
    };

    const showModal = (details) => {
        setModalDetails(details);
        setIsModalOpen(true);


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
                text="Creative Drafting, Precision Engineering"
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
                                        const selectedIndex = DraftingData.findIndex(item => item.Title === e.target.value);
                                        setActiveTab(selectedIndex);
                                        // Scroll to FiltersProjectsContainer after clicking
                                        handleLinkClick();

                                    }}
                                    id="SelectMobile"
                                >
                                    {DraftingData.map((item, index) => (
                                        <option key={index} value={item.Title}>
                                            {item.Title}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <ul style={{ padding: "0px" }}>
                                    {DraftingData.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                setSelectedTitle(item.Title);
                                                setActiveTab(index);
                                                handleLinkClick();

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
                    <div className="FiltersProjectsContainer" ref={filterProjectsContainerRef}>
                        <div className="ProjectsDataContainer" id="ProjectsDataContainer">
                            <Row>
                                {DraftingData.filter(project => project.Title === selectedTitle).map((filteredProject, index) => (
                                    filteredProject.ProjectDetails.map((details, detailIndex) => (
                                        <Col lg={8} md={12} key={detailIndex}>
                                            <div
                                                onClick={() => showModal(details)}
                                                className="projectsCardDesigns"
                                                data-aos="fade-up"
                                                data-aos-delay={`${index * 300}`}
                                                data-aos-duration="1000"
                                            >

                                                {/* <div className="cardImage" style={{ height: "10vh" }}>
                                                    <img src="/images/pdf.png" style={{ width: "20%", height: "100%" }} />
                                                    <img src={details.cardImage} alt={details.cardTitle} />
                                                </div>
                                                <div className="cardContent">
                                                    <Link to={details.projectPath}><h2>{details.Title}</h2></Link>
                                                    <Modal mask={false} title="Project Images" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                                        <Col span={8}><img src={details.galleryImages} className="modalImage" /></Col>
                                                    </Modal>
                                                    <br />

                                                    <div className="arrowIcon">
                                                        <i className='bx bx-right-arrow-alt'></i>
                                                    </div>
                                                </div> */}
                                                {/* <div className="cardImage" style={{ height: "10vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <img
                                                        src="/images/pdf.png"
                                                        alt="PDF Icon"
                                                        style={{ width: "40px", height: "40px" }}
                                                    />
                                                </div> */}
                                                <div className="cardContent">
                                                    <h2>{details.Title}</h2>
                                                    <br />
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
                                    width={isMobile ? '100%' : '90%'}
                                    title={modalDetails.Title}
                                    visible={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    footer={[
                                        <a href={modalDetails.projectPath} download style={{ textDecoration: 'none' }} key="download">
                                            <Button type="default" style={{ marginRight: "10px" }}>Download PDF</Button>
                                        </a>,
                                        <Button key="close" type="primary" onClick={handleCancel}>
                                            Close
                                        </Button>,
                                    ]}
                                    className="ProjectModal"
                                    style={{ padding: isMobile ? '0px' : "20px" }}
                                    centered
                                    destroyOnClose
                                >
                                    <object
                                        data={modalDetails.projectPath}
                                        type="application/pdf"
                                        width="100%"
                                        height={isMobile ? "300px" : "600px"}
                                        style={{ padding: "0" }}
                                    >
                                        <p>
                                            Your browser does not support PDF viewing. You can download the file
                                            <a href={modalDetails.projectPath} style={{ marginLeft: '5px', color: "rgb(188,119,66)" }}>here</a>.
                                        </p>
                                    </object>
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Drafting;
