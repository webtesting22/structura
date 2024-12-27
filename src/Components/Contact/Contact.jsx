import React, { useEffect } from "react";
import { Row, Col } from "antd";
import "./Contact.css";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import bgImage from "/images/ProjectsImages/HighRiseBuilding/ZaveriGreens/04.jpg";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <StructuraCommonHero image={bgImage} text="Reach Out, Let's Build Together" />
            <Row className="contactRow">
                <Col lg={24} md={24} style={{width:"100%"}}>
                    {/* <div className="contactTextContainer"> */}
                        {/* <h1 className="bigHeading" data-aos-duration="1000" data-aos="fade-up" style={{ textAlign: "center" }}>CONTACT US</h1>
                        <p data-aos-duration="1000" data-aos="fade-up">
                            Structura Consultants is your premier partner for bespoke design
                            and engineering solutions. Specializing in various services, we
                            deliver projects of distinction across residential, commercial, and
                            industrial sectors.
                        </p>

                        <p data-aos-duration="1000" data-aos="fade-up">
                            Partner with us to elevate your next project. Contact our team
                            today to discuss how we can turn your vision into reality!
                        </p> */}

                        {/* <div className="ContactCards">
                            <Row>
                                <Col lg={8} md={12}>
                                    <div>
                                        <p data-aos-duration="1000" data-aos="fade-up">
                                            <i className="bx bx-envelope"></i>&nbsp;
                                            <a href="mailto:connect@structuraconsultants.com">connect@structuraconsultants.com</a>
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={8} md={12}>
                                    <div>
                                        <p data-aos-duration="1000" data-aos="fade-up">
                                            <i className="bx bxs-phone"></i>&nbsp;<a href="tel:+919825324480">+91-9825324480</a>&nbsp;
                                            OR
                                            &nbsp;
                                            <a href="tel:+919099024581">+91-9099024581</a>
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={8} md={12}>
                                    <div>
                                        <p data-aos-duration="1000" data-aos="fade-up">
                                            <i className="bx bxs-map"></i>&nbsp;
                                            <a href="https://maps.app.goo.gl/DfKxgYaKkWJnAAix9">
                                                901,A.Shridhar Athens,Ambawadi,Ahmedabad,Gujarat 380015,India.
                                            </a>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
                    {/* </div> */}
                    {/* <br /><br /> */}
                    <div className="mapConta/iner" data-aos-duration="1000" data-aos="fade-up">
                        <iframe
                            title="Structura Consultants Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.008843718193!2d72.5331858!3d23.0234475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8549b2bfe3d5%3A0x19f8839d35564d5b!2sA.Shridhar%20ATHENS!5e0!3m2!1sen!2sin!4v1735279831307!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Contact;
