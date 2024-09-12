import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import StructuraLogo from "/images/structuraLogo.png"
const Footer = () => {
    return (
        <>
            <section id="Footer" style={{ padding: "0px" }}>
                <div className="footerSection">
                    <div>
                        <Row>
                            <Col lg={12}>
                                <div className="FooterRebuild">
                                    <img src={StructuraLogo} alt="" />
                                    <br /><br />
                                    <p>At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.</p>
                                    <br />
                                    <button className="commomBtn">Connect</button>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="AddressColums">
                                    <div>

                                        <h2>New York Office</h2>
                                        <hr />
                                        <p>
                                            <a href="#">
                                                SKETS studio, 373 BroadWay, Suite 611,
                                                New York City, New York 10013
                                            </a><br />
                                            <a href="tel:9174146441">Phone: 9174146441</a>
                                        </p>
                                    </div>
                                    <div>

                                        <h2>HeadQuarters</h2>
                                        <hr />
                                        <p>
                                            <a href="https://maps.app.goo.gl/VKarCGeVPBPBTqURA" target="_blank">
                                                SKETS Studio Private Limited
                                                226, Patparganj Functional Industrial Estate,
                                                Delhi 110092, India.
                                            </a><br />
                                            <a href="tel:+91-981004142">Phone +91-981004142</a>
                                        </p>
                                    </div>
                                    <div>

                                        <h2>SKETS Campus</h2>
                                        <hr />
                                        <p>
                                            <a href="https://maps.app.goo.gl/JBJ9rw34fWbAUmjv9" target="_blank">
                                                SKETS Studio Private Limited
                                                297 & 298, Patparganj Industrial Estate,
                                                Delhi 110092, India.
                                            </a><br />
                                            <a href="+91-981004142">Phone +91-981004142</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                       
                        <hr />
                    </div>
                    <div className="BottomLine">
                        <div className="SocialIcons">
                            <i class='bx bxl-instagram'></i>
                            <i class='bx bxl-linkedin' ></i>
                            <i class='bx bxl-facebook' ></i>
                        </div>
                        <div className="CopywriteText">
                            <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank"><b>Outlead solutions.</b></Link> All rights reserved.</p>
                        </div>
                    </div>

                    {/* <div className="copyrightText">
                        <div className="iconsContainer">
                            <i class='bx bxl-instagram'></i>
                            <i class='bx bxl-linkedin' ></i>
                            <i class='bx bxl-facebook' ></i>
                        </div>
                       
                        <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank"><b>Outlead solutions.</b></Link> All rights reserved.</p>
                    </div> */}

                </div>
            </section>
        </>
    )
}
export default Footer