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
                            <Col lg={12} >
                                <div className="footer-left-side-container">
                                    <div>
                                        <h1>Structura</h1>
                                        <br />
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis esse sed commodi architecto ratione temporibus impedit maiores laborum dolorem.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} >
                                <div className="linksContainer">
                                    <div>
                                        <h3>Quick Links</h3>
                                        <ul>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3>Social Links</h3>
                                        <ul>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                            <li>Hello Demo</li>
                                        </ul>
                                    </div>
                                </div>
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