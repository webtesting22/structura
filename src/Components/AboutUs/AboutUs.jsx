import React from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import { Link } from "react-router-dom";
import { Descriptions } from "antd";
import Title from "antd/es/skeleton/Title";
import { Row, Col } from "react-bootstrap";
import "./AboutUs.css"
import BimIcon from "./IconsImages/BIM.png"
import InteriorDesignIcon from "./IconsImages/interiordesign.png"
import EngeneeringIcon from "./IconsImages/ENGINEERING.png"
import ArchitectureIcon from "./IconsImages/ARCHITECTURE.png"
import VisualizationIcon from "./IconsImages/VISUALIZATION.png"
import WhyUsComponent from "../MinimillisticComponents/WhyUsComponent";
import BoxCarousalContainer from "../MinimillisticComponents/BoxCarousalContainer/BoxCarousalContainer";
const AboutUs = () => {
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/AboutUs", name: "About Us" },
        // Add more links as needed
    ];

    const ServicesCardData = [
        {
            iconImage: BimIcon,
            Title: "BIM",
            Descriptions: "Having adopted BIM early on, SKETS' BIM Studio is among the largest globally. SKETS has more than 200 experts dedicated for BIM who have completed 325+ large scale projects till date."
        },
        {
            iconImage: InteriorDesignIcon,
            Title: "INTERIOR DESIGN",
            Descriptions: "We are Market Leader in Interior Design Documentation with specialization in Hospitality."
        },
        {
            iconImage: EngeneeringIcon,
            Title: "ENGINEERING",
            Descriptions: "We have experienced Engineers and CAD Operators providing HVAC/Mechanical, Electrical, Plumbing, Fire Fighting, Documentation services to Consultants, Contractors, Real-Estate Developers, and Owners."
        },
        {
            iconImage: ArchitectureIcon,
            Title: "ARCHITECTURE & STRUCTURE",
            Descriptions: "SKETS has completed over 400 Architectural projects using both Revit and AutoCad. We also have a dedicated studio working on Structural projects."
        },
        {
            iconImage: VisualizationIcon,
            Title: "3D VISUALIZATION",
            Descriptions: "Our knowledge in Architecture and Interiors makes us one of the best in this space. We are experts in producing Interactive flythroughs & walkthroughs in Unreal Engine."
        }
    ]
    return (
        <>
            <StructuraCommonHero
                image="https://images.unsplash.com/photo-1518400953623-bbb1790c9499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                text="Your text content goes here"
                routeLinks={routeLinks}
            />
            <section id="servicesSection">
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>
                <div>
                    <div className="Smalltagline"><h4 className="sectionHeading"><div></div>WHO WE ARE</h4></div>
                    <h1 data-aos="fade-up" className="bigHeading"
                        data-aos-duration="1000">Our Expertise</h1>
                    <br /><br />
                    <div className="servicecontainerRow">
                        {ServicesCardData.map((item, index) => (
                            <div key={index} className="servicesSingleBox" data-aos="fade-up" data-aos-delay={`${index * 300}`} data-aos-duration="1000">
                                <div className="servicesCards">
                                    <div style={{ paddingBottom: "20px" }}>
                                        <div className="servicesiconbox">
                                            <img src={item.iconImage} alt="" />
                                        </div>
                                    </div>
                                    <h4>{item.Title}</h4>
                                    <p>{item.Descriptions}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div class="marquee">
                    <div class="marquee--inner">
                        <span>
                            <div><span>Hospitality</span> <i class='bx bx-check-circle'></i> Corporate <i class='bx bx-check-circle'></i> Retail <i class='bx bx-check-circle'></i> Commercial <i class='bx bx-check-circle'></i> Residential <i class='bx bx-check-circle'></i> Healthcare <i class='bx bx-check-circle'></i> Institutional <i class='bx bx-check-circle'></i> Mixed-use <i class='bx bx-check-circle'></i> Aged-Care&nbsp;</div>
                        </span>
                        <span>
                            <div>Hospitality <i class='bx bx-check-circle'></i> Corporate <i class='bx bx-check-circle'></i> Retail <i class='bx bx-check-circle'></i> Commercial <i class='bx bx-check-circle'></i> Residential <i class='bx bx-check-circle'></i> Healthcare <i class='bx bx-check-circle'></i> Institutional <i class='bx bx-check-circle'></i> Mixed-use <i class='bx bx-check-circle'></i> Aged-Care&nbsp;</div>
                        </span>
                    </div>
                </div> */}
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>
                <BoxCarousalContainer/>
                
            </section>
            
            <section id="WhyUssection">

                <div>
                    <WhyUsComponent />
                </div>
            </section>

        </>
    )
}
export default AboutUs;