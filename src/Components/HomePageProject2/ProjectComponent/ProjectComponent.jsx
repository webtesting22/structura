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
        'High Rise Buildings': [
            HighRise1, HighRise2, HighRise3,
        ],
        'Bungalows': [
            Bungalow1, Bungalow2, Bungalow3,
        ],
        'Weekend Villas': [
            WeekendVilla1, WeekendVilla2, WeekendVilla3,
        ],
        'Institute': [
            Institute1, Institute2, Institute3,
        ],
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
                            {projectImages[activeProject].map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={activeProject}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    // className={hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'collapsed' : ''}
                                    // ref={(el) => (imageRefs.current[index] = el)}
                                    // onMouseEnter={() => handleMouseEnter(index)}
                                    // onMouseLeave={handleMouseLeave}
                                    // style={
                                    //     hoveredIndex === index
                                    //         ? { width: imageRefs.current[index]?.naturalWidth }
                                    //         : hoveredIndex !== null
                                    //             ? { width: '0%' }
                                    //             : { width: '33.33%' }
                                    // }
                                    className={hoveredIndex === index ? 'hovered' : hoveredIndex !== null ? 'collapsed' : ''}

                                />
                            ))}
                        </div>
                    </Col>
                    <Col lg={6}>

                        <h1 className="projectTitle">{activeProject}</h1>


                    </Col>
                    <Col lg={4} className="projectLinksContainer">
                        {Object.keys(projectImages).map((project) => (
                            <a
                                key={project}
                                onClick={() => handleProjectChange(project)}
                                style={{ cursor: 'pointer' }}
                            >
                                {project}
                            </a>
                        ))}
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default ProjectComponent;
