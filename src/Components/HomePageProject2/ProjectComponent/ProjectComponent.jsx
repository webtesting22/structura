import React from "react";
import { useState, useRef } from "react";
import "./ProjectComponent.css";
import { Row, Col } from "antd";
import HighRise1 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/05.jpeg"
import HighRise2 from "/images/ProjectsImages/HighRiseBuilding/Girirajdreams/02.png"
import HighRise3 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/07.jpeg"
import Bungalow1 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/08.jpeg"
import Bungalow2 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/10.jpeg"
import Bungalow3 from "/images/ProjectsImages/HighRiseBuilding/IVORY ORCHARDS/09.jpeg"
import WeekendVilla1 from "/images/ProjectsImages/HighRiseBuilding/ProfitRoyal/02.jpg"
import WeekendVilla2 from "/images/ProjectsImages/HighRiseBuilding/ProfitRoyal/03.jpg"
import WeekendVilla3 from "/images/ProjectsImages/HighRiseBuilding/ProfitRoyal/04.jpg"
import Institute1 from "/images/ProjectsImages/HighRiseBuilding/SankalpAnanta/04.jpg"
import Institute2 from "/images/ProjectsImages/HighRiseBuilding/SankalpAnanta/06.jpg"
import Institute3 from "/images/ProjectsImages/HighRiseBuilding/SankalpAnanta/07.jpg"

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
            description: 'Weekend Villas are perfect for a getaway, providing luxury and relaxation in a tranquil setting.'
        },
        'Institute': {
            images: [Institute1, Institute2, Institute3],
            description: 'Institutes are educational establishments designed to foster learning and innovation.'
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
                    <Col lg={14} className="imageContainer1">
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
                    <Col lg={6}>
                        <div className="mainAreaContent">
                            <h1 className="projectTitle">{activeProject}</h1>
                            <p className="projectDescription">
                                {projectImages[activeProject]?.description}
                            </p>
                            <button className="commomBtn" style={{margin:"10px 0px"}}>View More</button>
                        </div>
                    </Col>
                    <Col lg={4} className="projectLinksContainer">
                        {Object.keys(projectImages).map((project) => (
                            <div key={project}  style={{ margin:"20px 10px" }}>
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
        </>
    )
}
export default ProjectComponent;
