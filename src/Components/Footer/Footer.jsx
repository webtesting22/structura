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
                                    <h3>New York Office</h3>
                                    <p>SKETS studio, 373 BroadWay, Suite 611,
                                        New York City, New York 10013
                                        Mobile: 917.414.6441
                                    </p>
                                </div>
                            </Col>
                            <Col lg={8} >
                                <div>
                                    <h3>HeadQuarters</h3>
                                    <p>SKETS Studio Private Limited
                                        226, Patparganj Functional Industrial Estate,
                                        Delhi 110092, India. Phone + 91 981004142</p>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <h3>SKETS Campus</h3>
                                <p>SKETS Studio Private Limited
                                    297 & 298, Patparganj Industrial Estate,
                                    Delhi 110092, India. Phone + 91 981004142</p>
                            </Col>
                        </Row>
                    </div>
                    <br /><br />
                    <div className="copyrightText">
                        <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank">Outlead solution.</Link> All rights reserved.</p>
                    </div>

                </div>
            </section>
        </>
    )
}
export default Footer