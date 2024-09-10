import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section id="Footer">
                <div className="footerSection">
                    <div>
                        <Row style={{ margin: "auto" }}>
                            <Col lg={8} >
                                <div>
                                    <i class='bx bx-building-house'></i>
                                    <h2>New York Office</h2>
                                    <p>
                                        <a href="#">
                                            SKETS studio, 373 BroadWay, Suite 611,
                                            New York City, New York 10013
                                        </a><br />
                                        <a href="tel:9174146441">Phone: 9174146441</a>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={8} >
                                <div>
                                    <i class='bx bx-building-house'></i>
                                    <h2>HeadQuarters</h2>
                                    <p>
                                        <a href="https://maps.app.goo.gl/VKarCGeVPBPBTqURA" target="_blank">
                                            SKETS Studio Private Limited
                                            226, Patparganj Functional Industrial Estate,
                                            Delhi 110092, India.
                                        </a><br />
                                        <a href="tel:+91-981004142">Phone +91-981004142</a>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <i class='bx bx-building-house'></i>
                                <h2>SKETS Campus</h2>
                                <p>
                                    <a href="https://maps.app.goo.gl/JBJ9rw34fWbAUmjv9" target="_blank">
                                        SKETS Studio Private Limited
                                        297 & 298, Patparganj Industrial Estate,
                                        Delhi 110092, India.
                                    </a><br />
                                    <a href="+91-981004142">Phone +91-981004142</a>
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="copyrightText">
                        <div className="iconsContainer">
                            <i class='bx bxl-instagram'></i>
                            <i class='bx bxl-linkedin' ></i>
                            <i class='bx bxl-facebook' ></i>
                        </div>
                        <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank"><b>Outlead solutions.</b></Link> All rights reserved.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Footer