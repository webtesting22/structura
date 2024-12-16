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
            DirectorContent: "Saumya Shah, an experienced structural engineer and founder of Structura-Design Consultants in Ahmedabad, specializes in structural design, restoration, and retrofitting. With 3.5 years in the field, he has led projects for high-rise buildings, industrial structures, and historic renovations. Saumya holds multiple academic awards, including a Gold Medal from GICEA and distinctions from CEPT University, where he also served as a teaching associate. His expertise includes AutoCAD, STAAD.Pro, MATLAB, SAP 2000, and REVIT, and he collaborates with Nirmaan Developers on residential and commercial projects.",
        },
        {
            image: "",
            DirectorName: "Shyam Shah",
            DirectorPosition: "CEO",
            DirectorContent: "Shyam Shah, a dynamic and forward-thinking structural engineer, is the CEO of Structura-Design Consultants. With a Master’s in Structural Engineering from Nirma University (2023) and a Bachelor’s in Civil Engineering from CEPT University (2021), he blends academic excellence with practical innovation. Shyam specializes in developing modern and sustainable structural solutions for residential and commercial projects. His expertise spans advanced design software like AutoCAD, STAAD.Pro, SAP 2000, and REVIT. As a young leader, Shyam’s fresh perspective and commitment to innovation drive the company’s mission to deliver cutting-edge designs that balance functionality and aesthetics.",
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
                <h1 data-aos="fade-up" className="bigHeading"
                    data-aos-duration="1000">Board Of Directors</h1>
                <br /><br />
                <div className="BoardAndDirectorsContainer">

                    {DirectorsContent.map((item, index) => (
                        <Row key={index}>
                            <Col lg={8} md={12} >
                                <div className="directorImage">
                                    <img src={item.image} alt="Director Photo Here" />
                                </div>
                            </Col>
                            <Col lg={16} md={12}>
                                <div className="directorContent">
                                    <h2>{item.DirectorName}</h2><br />
                                    <h3>{item.DirectorPosition}</h3><br />
                                    <p>{item.DirectorContent}</p><br />
                                </div>
                            </Col>
                        </Row>
                    ))}
                </div>
                <div id="clientSection">

                    <ClientCard />
                </div>

            </section>

        </>
    )
}
export default ClientsAndDirectors