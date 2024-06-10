import React from "react";
import "./AnimatedCard.css"
import { Row, Col } from "antd";
const AnimatedHoverableCards = () => {
    const ServicesCardData = [
        {
            // iconImage: BimIcon,
            Title: "BIM",
            Descriptions: "Having adopted BIM early on, SKETS' BIM Studio is among the largest globally. SKETS has more than 200 experts dedicated for BIM who have completed 325+ large scale projects till date."
        },
        {
            // iconImage: InteriorDesignIcon,
            Title: "INTERIOR DESIGN",
            Descriptions: "We are Market Leader in Interior Design Documentation with specialization in Hospitality."
        },
        {
            // iconImage: EngeneeringIcon,
            Title: "ENGINEERING",
            Descriptions: "We have experienced Engineers and CAD Operators providing HVAC/Mechanical, Electrical, Plumbing, Fire Fighting, Documentation services to Consultants, Contractors, Real-Estate Developers, and Owners."
        },
        {
            // iconImage: ArchitectureIcon,
            Title: "ARCHITECTURE & STRUCTURE",
            Descriptions: "SKETS has completed over 400 Architectural projects using both Revit and AutoCad. We also have a dedicated studio working on Structural projects."
        },
        {
            // iconImage: VisualizationIcon,
            Title: "3D VISUALIZATION",
            Descriptions: "Our knowledge in Architecture and Interiors makes us one of the best in this space. We are experts in producing Interactive flythroughs & walkthroughs in Unreal Engine."
        }
    ]
    return (
        <>
            <div className="animatedCardSection">
                <Row>
                    {ServicesCardData.map((item, index) => (
                        <Col lg={8} key={index}>
                            <div className="animatedCardContainer">
                                <img src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                        </Col>
                    ))}

                </Row>
            </div>
        </>
    )
}
export default AnimatedHoverableCards;