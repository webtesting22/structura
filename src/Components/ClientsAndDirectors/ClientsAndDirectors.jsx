import React,{useEffect} from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import { Row, Col } from "antd";
import ClientCard from "./ClientCard";
import "./animatedCardSection.css"
import HeroImage from "../ClientsAndDirectors/3.png"
import NimishaBansalImg from "/images/DirectorImages/NimishaBansal1.jpg";
import NeerajBansalImg from "/images/DirectorImages/NeerajBansal1.jpg";
import ShamitGuptaImg from "/images/DirectorImages/ShamitGupta1.jpg";

const ClientsAndDirectors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const routeLinks = [
        // { path: "/", name: "Home" },
        // { path: "/clientsanddirectors", name: "/Director And Clients" },
        // Add more links as needed
    ];
    const Image = "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const DirectorsContent = [
        // {
        //     // image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     image:NimishaBansalImg,
        //     DirectorName: "Nimisha Bansal",
        //     DirectorPosition: "Chief Executive Officer",
        //     DirectorContent: "Ms. Nimisha co-founded SKETS Studio in 2005 and has taken it from a small start up, to a name to reckon with in the Design Documentation space. SKETS Studio is ranked as one the top firms worldwide providing Design Documentation services for Architectural and Interior Design firms globally. Prior to starting SKETS, she was heading the Global Solutions Design Group of a leading Information Technology firm."
        // },
        // {
        //     image:NeerajBansalImg,
        //     DirectorName: "Neeraj Bansal",
        //     DirectorPosition: "Executive Director",
        //     DirectorContent: "Mr. Neeraj Bansal has over 29 years of experience in all facets of management and operations. Mr. Neeraj in his role as an Executive Director spearheads strategic initiatives and has been driving business operations of SKETS resulting in improved financial performance. He focuses on strengthening the organization's delivery capability, it’s process maturity, talent acquisition & management of technical competency."
        // },
        // {
        //     image:ShamitGuptaImg,
        //     DirectorName: "Shamit Gupta",
        //     DirectorPosition: "Chief Operational Officer",
        //     DirectorContent: "Mr. Shamit Gupta has over eighteen years of experience in the field of Architecture and Hospitality Design Documentation. He started his career with Hirsch Bedner Associates, HBA. He has managed over 100 large scale hospitality projects and his immense knowledge has helped SKETS in becoming one of the top firms in Design Documentation space."
        // },
        {
            image:"",
            DirectorName:"Saumya Shah",
            DirectorPosition:"CEO",
            DirectorContent:"A structural engineer with 3.5 years of experience in the field of structural designing and currently working as structural designer. Owner of STRUCTURA-Design Consultants at Ahmedabad and also associated with Nirman developers for their design and construction of buildings. A quick, analytical and logical thinker with specific interest in restoration and retrofitting of old masonry buildings along with designing RCC and Steel structures.",
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
                    data-aos-duration="1000">Boards Of Directors</h1>
                <br /><br />
                <div className="BoardAndDirectorsContainer">
                    <Row>
                        {DirectorsContent.map((item, index) => (
                            <Col lg={8} md={12} key={index}> 
                                <div className="projectsCardDesigns" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="cardImage">
                                        <img src={item.image} alt={item.cardTitle} />
                                    </div>
                                    <div className="cardContent">
                                        <h2>{item.DirectorName}</h2>
                                        <br />
                                        <p style={{minHeight:"180px"}}>{item.DirectorContent}</p>
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
            {/* <section>
                <div id="clientSection">
                    <h1 className="bigHeading">Our Clients</h1>
                    <br /><br />
                    <ClientCard />
                </div>
            </section> */}
        </>
    )
}
export default ClientsAndDirectors