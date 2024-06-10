import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Descriptions } from "antd"
import "./WhyUs.css"
import Title from 'antd/es/skeleton/Title';
const WhyUsComponent = () => {
    const [isSticky, setIsSticky] = useState(true);
    const rightColumnRef = useRef(null);

    const handleScroll = () => {
        if (rightColumnRef.current) {
            const rect = rightColumnRef.current.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
                setTimeout(() => setIsSticky(true), 100); // Delay to smoothen the transition
            } else {
                setTimeout(() => setIsSticky(true), 100); // Delay to smoothen the transition
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
        {
            Title: "Architectural CAD Drafting",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: "Architectural BIM Services",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: "Facade BIM Services",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: "Structural CAD Drafting",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: 'MEP CAD Drafting',
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: "Structural BIM Services",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
        {
            Title: "MEP BIM Services",
            Descriptions: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem ut a nam fuga quidem. Repellendus impedit quae fuga quas deserunt?"
        },
       
    ]
    return (
        <>
            <div className="whyUsContainer">
                <div className="container" style={{ width: "100%" }}>
                    <div className="combineContainers">

                        {/* <div className="container"> */}
                        <div className='leftSideContainer'>
                            <div className="sectionPadding"></div>
                            <div className="sectionPadding"></div>

                            <div className={`left-column ${isSticky ? 'sticky' : ''}`}>

                                {/* Content for left column */}
                                <div style={{ position: "relative" }}>
                                    <div className='contentContainer'>
                                        <div>
                                            <div className="Smalltagline"><h4 className="sectionHeading"><div></div>Why Us</h4></div>
                                            <h1 data-aos="fade-up" className="bigHeading"
                                                data-aos-duration="1000">Why Choose Us</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-column" ref={rightColumnRef}>
                            <div className='colorOverlayBack'>

                            </div>
                            {/* Content for right column */}
                            <div style={{ width: "100%" }}>

                                <div className='rightSideContainerColum'>
                                    <Row style={{ textAlign: "center",display:"flex",justifyContent:"center" }}>
                                        {WhyChooseUsCards.map((item, index) => (
                                            <Col lg={12} key={index}>
                                                <div className='cardContainerWhyChooseUS' data-aos="fade-up" data-aos-delay={`${index * 300}`} data-aos-duration="500">
                                                    <div className='iconCardContainer'>
                                                        <i class='bx bxs-hard-hat' ></i>
                                                    </div>
                                                    <h4 style={{marginBottom:"10px"}}>{item.Title}</h4>
                                                    <p style={{fontSize:"16px"}}>{item.Descriptions}</p>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                            {/* Repeat as needed to ensure the column is tall */}
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    )
}
export default WhyUsComponent;