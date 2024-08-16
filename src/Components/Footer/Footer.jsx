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
                                    <p>SKETS studio, 373 BroadWay, Suite 611,
                                        New York City, New York 10013
                                        Mobile: 917.414.6441
                                    </p>
                                </div>
                            </Col>
                            <Col lg={8} >
                                <div>
                                    <i class='bx bx-building-house'></i>
                                    <h2>HeadQuarters</h2>
                                    <p>SKETS Studio Private Limited
                                        226, Patparganj Functional Industrial Estate,
                                        Delhi 110092, India. Phone + 91 981004142</p>

                                </div>
                            </Col>
                            <Col lg={8}>
                                <i class='bx bx-building-house'></i>

                                <h2>SKETS Campus</h2>
                                <p>SKETS Studio Private Limited
                                    297 & 298, Patparganj Industrial Estate,
                                    Delhi 110092, India. Phone + 91 981004142</p>

                            </Col>
                        </Row>
                    </div>
                    <br /><br />
                    <div className="copyrightText">
                        <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank"><b>Outlead solutions.</b></Link> All rights reserved.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Footer