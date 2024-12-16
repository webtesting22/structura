import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProjectComponent.css";
import { Row, Col } from "antd";
import HighRise1 from "/images/ProjectsImages/HighRiseBuilding/ZionSkyfields/012.jpg"
import HighRise2 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/17.jpeg"
import HighRise3 from "/images/ProjectsImages/HighRiseBuilding/ZaveriGreens/05.jpg"
import Bungalow1 from "/images/ProjectsImages/Banglows/AMITBHAI - BUNGALOW/01.jpg";
import Bungalow2 from "/images/ProjectsImages/Banglows/DEEPBHAI - BUNGALOW/01.jpg";
import Bungalow3 from "/images/ProjectsImages/Banglows/AMITBHAI - BUNGALOW/04.jpg";
import WeekendVilla1 from "/images/ProjectsImages/WeekendVillas/ButterflyTrails/2.jpg";
import WeekendVilla2 from "/images/ProjectsImages/WeekendVillas/360Villa/3.jpg";
import WeekendVilla3 from "/images/ProjectsImages/WeekendVillas/MeshwoNest/1.jpg";
import Institute1 from "/images/ProjectsImages/Institute/ShubhamAutomation/F2.jpg";
import Institute2 from "/images/ProjectsImages/Institute/MarutiIndustrialEstate/02.jpg";
import Institute3 from "/images/ProjectsImages/Institute/MarutiIndustrialEstate/04.jpg";

const ProjectComponent = () => {
    const [activeProject, setActiveProject] = useState('High Rise Buildings');
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const imageRefs = useRef([]);

    const projectImages = {
        'High Rise Buildings': {
            images: [HighRise1, HighRise2, HighRise3],
            description: 'High Rise Buildings are modern architectural marvels designed to maximize urban space.'

        },
        'Bungalows': {
            images: [Bungalow1, Bungalow2, Bungalow3],
            description: 'Bungalows offer a cozy, single-story living experience with ample space and comfort.'
        },
        'Weekend Villas': {
            images: [WeekendVilla1, WeekendVilla2, WeekendVilla3],
            description: 'Weekend villas offer the perfect retreat, combining luxury and serenity to create an idyllic escape for relaxation and rejuvenation.'
        },
        'Institute': {
            images: [Institute1, Institute2, Institute3],
            description: 'Institutes are hubs of innovation and growth, designed to inspire learning and foster excellence. Each project embodies purpose, creativity, and architectural brilliance.'
        },
    };

    const handleProjectChange = (project) => {
        setActiveProject(project);
    };
    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };
    return (
        <>
            <div>
                <Row>
                    <Col lg={13} className="imageContainer1">
                        <div className="imageWrapper">
                            {projectImages[activeProject]?.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={activeProject}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'collapsed' : ''}
                                />
                            ))}
                        </div>
                    </Col>
                    <br />
                    <Col lg={7} xs={24}>
                        <div className="mainAreaContent">
                            <h1 className="projectTitle">{activeProject}</h1>
                            <p className="projectDescription">
                                {projectImages[activeProject]?.description}
                            </p>
                            <Link to="/Projects"><button className="commomBtn" style={{ margin: "10px 0px" }}>View More</button></Link>

                        </div>
                    </Col>
                    <Col lg={4} xs={24} className="projectLinksContainer">
                        {Object.keys(projectImages).map((project) => (
                            <div key={project} style={{ margin: "20px 10px" }}>
                                <a
                                    onClick={() => handleProjectChange(project)}
                                >
                                    {project}
                                </a>
                                <hr />
                            </div>
                        ))}
                    </Col>

                </Row>
            </div>
            <div className="sectionPadding" />
        </>
    )
}
export default ProjectComponent;
