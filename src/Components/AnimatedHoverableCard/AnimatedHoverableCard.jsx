import React from "react";
import "./AnimatedCard.css"
import { Row, Col } from "antd";
import img2 from "../AnimatedHoverableCard/2.png"
import img3 from "../AnimatedHoverableCard/3.png"
import img4 from "../AnimatedHoverableCard/4.png"
import img5 from "../AnimatedHoverableCard/5.png"
import img6 from "../AnimatedHoverableCard/6.png"
import { Link, redirect } from "react-router-dom";
import AllServices from "../AllServices/AllServices";
const AnimatedHoverableCards = () => {
    const ServicesCardData = [
        {
            // iconImage: BimIcon,
            Title: "BIM",
            img: img2,
            Descriptions: "Having adopted BIM early on, SKETS' BIM Studio is among the largest globally. SKETS has more than 200 experts dedicated for BIM who have completed 325+ large scale projects till date.",
            redirect: "/AllServices#BIM",
        },
        {
            // iconImage: InteriorDesignIcon,
            Title: "INTERIOR DESIGN",
            img: img3,
            Descriptions: "We are Market Leader in Interior Design Documentation with specialization in Hospitality.",
            redirect:"/AllServices#INTERIORDESIGN",
        },
        {
            // iconImage: EngeneeringIcon,
            Title: "ENGINEERING",
            img: img4,
            Descriptions: "We have experienced Engineers and CAD Operators providing HVAC/Mechanical, Electrical, Plumbing, Fire Fighting, Documentation services to Consultants, Contractors, Real-Estate Developers, and Owners.",
            redirect:"/AllServices#ENGINEERING",
        },
        {
            // iconImage: ArchitectureIcon,
            Title: "ARCHITECTURE & STRUCTURE",
            img: img5,
            Descriptions: "SKETS has completed over 400 Architectural projects using both Revit and AutoCad. We also have a dedicated studio working on Structural projects.",
            redirect:"/AllServices#ARCHITECTURE",
        },
        {
            // iconImage: VisualizationIcon,
            Title: "3D VISUALIZATION",
            img: img6,
            Descriptions: "Our knowledge in Architecture and Interiors makes us one of the best in this space. We are experts in producing Interactive flythroughs & walkthroughs in Unreal Engine.",
            redirect:"/AllServices#VISUALIZATION"

        }
    ]
    return (
        <>
            <div className="animatedCardSection">
                <Row>
                    {ServicesCardData.map((item, index) => (
                        <Col lg={8} key={index}>
                            <Link to={item.redirect}>
                                <div className="animatedCardContainer">
                                    <img src={item.img} alt="" />
                                    <div className="insideContainer">
                                        <div className="topSideAnimationBar">
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                                <h1>{item.Title}</h1>
                                                <i className='bx bx-right-arrow-alt'></i>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                </Link>
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}
export default AnimatedHoverableCards;