import React, { useEffect } from "react";
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
import AnimatedHoverableCards from "../AnimatedHoverableCard/AnimatedHoverableCard";
// import AboutUsPoster from "../AboutUs/1.png"
import AboutUsPoster from "/images/ProjectsImages/HighRiseBuilding/BeaufortPark/07.jpg";
import NewAbout from "../NewAbout/NewAbout";
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const routeLinks = [
        // { path: "/", name: "Home" },
        // { path: "/AboutUs", name: "About Us" },
        // Add more links as needed
    ];


    return (
        <>
            <StructuraCommonHero
                image={AboutUsPoster}
                text="Crafting Strong Foundations for a Better Tomorrow"
                routeLinks={routeLinks}
            />
            <section id="servicesSection">

                {/* <div className="sectionPadding"></div> */}
                {/* <div className="sectionPadding"></div> */}
                <div>
                    {/* <div className="Smalltagline">
                    <h4 className="sectionHeading">
                    
                    WHO WE ARE</h4>
                    </div> */}

                    {/* <br /><br /> */}
                    <div className="New-About" style={{position:"sticky"}}>
                        {/* <div className="Smalltagline">

                            <h4 className="sectionHeading"><div></div>About</h4>
                        </div> */}
                        {/* <h1 className='bigHeading' data-aos="fade-down" data-aos-duration="1000">About Us</h1> */}
                        {/* <div className="sectionPadding mobileNone"></div> */}
                        <NewAbout />
                    </div>

                    {/* <div className="expertiseCards">
                        <h1 data-aos="fade-up" className="bigHeading"
                            data-aos-duration="1000">Our Expertise</h1>
                        <div className="animatedCards">
                            <AnimatedHoverableCards />
                        </div>
                    </div> */}
                    {/* <div className="servicecontainerRow">
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
                    </div> */}
                </div>

                {/* <div className="marquee">
                    <div className="marquee--inner">
                        <span>
                            <div><span>Hospitality</span> <i className='bx bx-check-circle'></i> Corporate <i className='bx bx-check-circle'></i> Retail <i className='bx bx-check-circle'></i> Commercial <i className='bx bx-check-circle'></i> Residential <i className='bx bx-check-circle'></i> Healthcare <i className='bx bx-check-circle'></i> Institutional <i className='bx bx-check-circle'></i> Mixed-use <i className='bx bx-check-circle'></i> Aged-Care&nbsp;</div>
                        </span>
                        <span>
                            <div>Hospitality <i className='bx bx-check-circle'></i> Corporate <i className='bx bx-check-circle'></i> Retail <i className='bx bx-check-circle'></i> Commercial <i className='bx bx-check-circle'></i> Residential <i className='bx bx-check-circle'></i> Healthcare <i className='bx bx-check-circle'></i> Institutional <i className='bx bx-check-circle'></i> Mixed-use <i className='bx bx-check-circle'></i> Aged-Care&nbsp;</div>
                        </span>
                    </div>
                </div> */}
                {/* <div className="sectionPadding mobileNone"></div> */}
                {/* <div className="sectionPadding mobileNone"></div> */}
                {/* <h1 data-aos="fade-up" className="bigHeading"
                        data-aos-duration="1000">Industries</h1>
                <BoxCarousalContainer /> */}

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