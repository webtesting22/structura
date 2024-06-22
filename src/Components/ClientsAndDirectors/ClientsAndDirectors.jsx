import React from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import { Row, Col } from "antd";
import "./animatedCardSection.css"
const ClientsAndDirectors = () => {
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/clientsanddirectors", name: " Clients And Directors" },
        // Add more links as needed
    ];
    const Image = "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const DirectorsContent = [
        {
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            DirectorName: "Nimisha Bansal",
            DirectorPosition: "Chief Executive Officer",
            DirectorContent: "Ms. Nimisha co-founded SKETS Studio in 2005 and has taken it from a small start up, to a name to reckon with in the Design Documentation space. SKETS Studio is ranked as one the top firms worldwide providing Design Documentation services for Architectural and Interior Design firms globally. Prior to starting SKETS, she was heading the Global Solutions Design Group of a leading Information Technology firm."
        },
        {
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            DirectorName: "Neeraj Bansal",
            DirectorPosition: "Executive Director",
            DirectorContent: "Mr. Neeraj Bansal has over 29 years of experience in all facets of management and operations. Mr. Neeraj in his role as an Executive Director spearheads strategic initiatives and has been driving business operations of SKETS resulting in improved financial performance. He focuses on strengthening the organization's delivery capability, it’s process maturity, talent acquisition & management of technical competency."
        },
        {
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            DirectorName: "Shamit Gupta",
            DirectorPosition: "Chief Operational Officer",
            DirectorContent: "Mr. Shamit Gupta has over eighteen years of experience in the field of Architecture and Hospitality Design Documentation. He started his career with Hirsch Bedner Associates, HBA. He has managed over 100 large scale hospitality projects and his immense knowledge has helped SKETS in becoming one of the top firms in Design Documentation space."
        },

    ]
    return (
        <>
            <StructuraCommonHero
                image={Image}
                text="Directors and Clients"
                routeLinks={routeLinks}
            />
            <section id="ClientsAndDirectorsSection">
                <div className="Smalltagline"><h4 className="sectionHeading"><div></div>Directors and Clients</h4></div>
                <h1 data-aos="fade-up" className="bigHeading"
                    data-aos-duration="1000">Boards Of Directors</h1>
                <br /><br />
                <div className="BoardAndDirectorsContainer">
                    <Row>
                        {DirectorsContent.map((item, index) => (
                            <Col lg={6} md={12} key={index}>
                                <div className="projectsCardDesigns" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="cardImage">
                                        <img src={item.image} alt={item.cardTitle} />
                                    </div>
                                    <div className="cardContent">
                                        <h2>{item.DirectorName}</h2>
                                        <br />
                                        <p>{item.DirectorContent}</p>
                                        {/* Add other content here */}
                                    </div>
                                    {/* <div className="arrowIcon">
                                    <i className='bx bx-right-arrow-alt'></i> 
                                </div> */}
                                    <hr />
                                </div>
                            </Col>
                        ))}

                    </Row>

                </div>
            </section>
        </>
    )
}
export default ClientsAndDirectors