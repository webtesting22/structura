import React, { useEffect } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import { Row, Col } from "antd";
import "./animatedCardSection.css"
import HeroImage from "/images/ProjectsImages/Banglows/K.C.PATEL BUNGLOW/02.jpg"
import ClientCard from "./ClientCard.jsx"
const ClientsAndDirectors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const routeLinks = [
        // { path: "/", name: "Home" },
        // { path: "/clientsanddirectors", name: "/Director And Clients" },
        // Add more links as needed
    ];
    const DirectorsContent = [

        {
            image: "",
            DirectorName: "Saumya Shah",
            DirectorPosition: "Director",
            DirectorContent: "Saumya Shah, founder of Structura-Design Consultants in Ahmedabad, is an award-winning structural engineer specializing in design, restoration, and retrofitting. With 3.5 years of experience, he has led high-rise, industrial, and historic renovation projects while collaborating with Nirmaan Developers. Proficient in AutoCAD, STAAD.Pro, SAP 2000, and REVIT, he is a Gold Medalist from GICEA and a CEPT University alumnus.",
        },
        {
            image: "",
            DirectorName: "Shyam Shah",
            DirectorPosition: "CEO",
            DirectorContent: "Shyam Shah, CEO of Structura-Design Consultants, is a structural engineer specializing in modern, sustainable solutions for residential and commercial projects. A Master’s graduate in Structural Engineering from Nirma University (2023) and a CEPT alumnus, he excels in using advanced tools like AutoCAD, STAAD.Pro, SAP 2000, and REVIT. His leadership blends academic excellence, innovation, and a commitment to functional and aesthetic designs.",
        }

    ]
    return (
        <>
            <StructuraCommonHero
                image={HeroImage}
                text="Our Directors And Clients"
                routeLinks={routeLinks}
            />
            <section id="ClientsAndDirectorsSection">
                <div className="Smalltagline"><h4 className="sectionHeading"><div></div>Directors and Clients</h4></div>
                {/* <h1 data-aos="fade-up" className="bigHeading"
                    data-aos-duration="1000">Board Of Directors</h1>*/}
                <br /><br />
                <div className="BoardAndDirectorsContainer">
                    <div>
                        <Row>
                            <Col lg={14}>
                                <h1 className="bigHeading">Meet Our <br /> Visionary Founder</h1>
                            </Col>
                            <br />
                            <Col lg={10}>
                                <p>Saumya Shah, the founder of Structura-Design Consultants, is a Gold Medalist and award-winning structural engineer with a passion for innovative design and restoration. With expertise in high-rise buildings, industrial structures, and historic renovations, he leads the company with a blend of excellence and dedication.</p>
                            </Col>
                        </Row>
                    </div>
                    <br /><br />
                    <Row >
                        {DirectorsContent.map((item, index) => (

                            <Col lg={12} md={12} key={index}>
                                <div className="FounderCardDesign">
                                    {/* <div className="directorImage">
                                        <img src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Director Photo Here" />
                                    </div> */}
                                    <div className="directorContent">
                                        <h2>{item.DirectorName}</h2>
                                        <h3>{item.DirectorPosition}</h3><br />
                                        <p>{item.DirectorContent}</p><br />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <br /><br />
                <div id="clientSection">
                    <ClientCard />
                </div>

            </section>

        </>
    )
}
export default ClientsAndDirectors