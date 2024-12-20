import React, { useEffect } from "react"
import { Row, Col } from 'antd';
import "./Contact.css"
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import bgImage from "/images/ProjectsImages/HighRiseBuilding/ZaveriGreens/04.jpg"
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <StructuraCommonHero image={bgImage} text="Reach Out, Let's Build Together" />
            <Row className="contactRow">
                <Col lg={12} md={24}>
                    <div className="contactTextContainer">
                        <h1 className="bigHeading" data-aos-duration="1000" data-aos="fade-up">CONTACT US</h1>
                        <p data-aos-duration="1000" data-aos="fade-up">Structura Consultants is your premier partner for bespoke design
                            and engineering solutions. Specializing in various services, we
                            deliver projects of distinction across residential, commercial, and
                            industrial sectors.</p>

                        <p data-aos-duration="1000" data-aos="fade-up">Partner with us to elevate your next project. Contact our team
                            today to discuss how we can turn your vision into reality!</p>

                        <p data-aos-duration="1000" data-aos="fade-up">
                            <i class='bx bx-envelope'></i>&nbsp;
                            <a href="mailto:connect@structuraconsultants.com">connect@structuraconsultants.com</a>
                        </p>
                        <p data-aos-duration="1000" data-aos="fade-up">
                            <i class='bx bxs-phone'></i>&nbsp;<a href="tel:+919825324480">+91-9825324480</a>&nbsp;
                            OR
                            &nbsp;
                            <a href="tel:+919099024581">+91-9099024581</a>
                        </p>
                        <p data-aos-duration="1000" data-aos="fade-up">
                            <i class='bx bxs-map'></i>&nbsp;<a href="https://maps.app.goo.gl/DfKxgYaKkWJnAAix9">901, A.Shridhar Athens, Ambawadi,
                                Ahmedabad, Gujarat 380015, India.</a>
                        </p>
                    </div>
                </Col>
                <Col lg={12} md={24}>
                    <div className="contactImageContainer" data-aos-duration="1000" data-aos="fade-up">
                        <img src="/images/ProjectsImages/HighRiseBuilding/MajesticSquare/05.jpg" />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Contact;