import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Descriptions } from "antd"
import "./WhyUs.css"
import Title from 'antd/es/skeleton/Title';
import StructuraLogo from "/images/structuraLogo.png";
import experience from "/images/WhyChooseUsIcon/experience.svg"
import expertise from "/images/WhyChooseUsIcon/expertise.svg"
import flexibility from "/images/WhyChooseUsIcon/flexibility.svg"
import infrastructure from "/images/WhyChooseUsIcon/infrastructure.svg"
import process from "/images/WhyChooseUsIcon/process.svg"
import repeat from "/images/WhyChooseUsIcon/repeat client.svg"
import retention from "/images/WhyChooseUsIcon/retention-rate 1.svg"
// import 
const WhyUsComponent = () => {
    const [isSticky, setIsSticky] = useState(true);
    const rightColumnRef = useRef(null);

    const handleScroll = () => {
        if (rightColumnRef.current) {
            const rect = rightColumnRef.current.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
                setTimeout(() => setIsSticky(true), 100);
            } else {
                setTimeout(() => setIsSticky(true), 100);
            }
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const WhyChooseUsCards = [
        // {
        //     // Title: "Architectural CAD Drafting",
        //     // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        //     Title:"Interior Design",
        //     Descriptions:"We are a Market Leader in Interior Design Documentation with a specialization in Hospitality.",
        // },
        {
            // Title: "Architectural BIM Services",
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "Experience",
            image: experience,
            Descriptions: "In the past 18 years, we have delivered over 1,500 large-scale projects and more than 20,000 retail roll-outs across 32 countries.",
        },
        {
            // Title: "Facade BIM Services",
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "Infrastructure",
            image: infrastructure,
            Descriptions: "We offer state-of-the-art IT infrastructure, ensuring data security and integrity, global connectivity, and the latest hardware/software. Our cloud-enabled collaboration and IT-supported project tracking ensure seamless execution.",
        },
        {
            // Title: "Structural CAD Drafting",
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "Bim Expertise",
            image: expertise,
            Descriptions: "Having completed 300+ BIM projects in both architecture and engineering, we have vast experience in leveraging this technology to optimize outcomes.",
        },
        {
            // Title: 'MEP CAD Drafting',
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "Flexibility",
            image: flexibility,
            Descriptions: "With a team of over 625 architects and engineers, we offer the flexibility to adjust team size according to project needs and scope.",
        },
        {
            // Title: "Structural BIM Services",
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "PROCESS EXCELLENCE",
            image: process,
            Descriptions: "We provide unmatched business value through process excellence, utilizing comprehensive quality frameworks to ensure the best results.",
        },
        {
            // Title: "MEP BIM Services",
            // Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
            Title: "REPEAT CLIENTELE",
            image: repeat,
            Descriptions: "Our client relationships are long-lasting, with tailor-made solutions built on trust. Since our founding, we have maintained four major studios, evolving clients into partners in success."
        },
        {
            Title: "RETENTION RATE",
            image: retention,
            Descriptions: "We have achieved an impressive 96% client retention rate since our inception, highlighting the strength of our relationships and results.",
        }

    ]
    return (
        <>
            <div className="whyUsContainer">
                <div className="container" style={{ width: "100%" }}>
                    <div className="combineContainers">

                        {/* <div className="container"> */}
                        <div className='leftSideContainer'>
                            <div className="sectionPadding mobileNone"></div>
                            <div className="sectionPadding mobileNone"></div>

                            <div className={`left-column ${isSticky ? 'sticky' : ''}`}>


                                <div style={{ position: "relative" }}>
                                    <div >
                                        <div>
                                            <div className="Smalltagline"><h4 className="sectionHeading"><div></div>Why Us</h4></div>
                                            <h1 data-aos="fade-up" className="bigHeading"
                                                data-aos-duration="1000">Why Choose Us</h1>
                                                <br />
                                                <p data-aos="fade-up" data-aos-duration="600">With over eight years of expertise in structural design and drafting, Structura Consultants delivers innovative, high-quality solutions across diverse property types, backed by cutting-edge technology, a skilled team, and a commitment to excellence.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column" ref={rightColumnRef}>
                            <div className='colorOverlayBack'>

                            </div>

                            <div style={{ width: "100%" }}>

                                <div className='rightSideContainerColum'>
                                    <Row style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
                                        {WhyChooseUsCards.map((item, index) => (
                                            <Col lg={12} key={index}>
                                                <div className='cardContainerWhyChooseUS' data-aos="fade-up" data-aos-delay={`${index * 200}`} data-aos-duration="200">
                                                    <div className='iconCardContainer'>
                                                        {/* <i className='bx bxs-hard-hat' ></i> */}
                                                        <img src={item.image} style={{ width: "15%" }} />
                                                    </div>
                                                    <h2 style={{ marginBottom: "10px" }}>{item.Title}</h2>
                                                    <p style={{ fontSize: "16px" }}>{item.Descriptions}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default WhyUsComponent;