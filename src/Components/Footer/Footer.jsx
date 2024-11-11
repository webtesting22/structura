import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import StructuraLogo from "/images/structuraLogo.png"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <section id="Footer" style={{ padding: "0px" }}>
                <div className="footerSection">
                    <div>
                        <Row>
                            <Col lg={16}>
                                <div className="FooterRebuild">
                                    <img src={StructuraLogo} alt="" />
                                    <br /><br />
                                    <p>At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.</p>
                                    <br />
                                    <div className="Contact">
                                        <span><MdEmail />&nbsp; <a href="mailto:connect@structuraconsultants.com">connect@structuraconsultants.com</a></span>
                                        <span><FaPhone /> &nbsp;        <a href="tel:+919825324480">+91-9825324480</a>
                                            &nbsp;
                                            OR
                                            &nbsp;
                                            <a href="tel:+919099024581">+91-9099024581</a>
                                        </span>
                                    </div>
                                    {/* <button className="commomBtn">Connect</button> */}
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="AddressColums">
                                    {/* <div>

                                        <h2>New York Office</h2>
                                        <hr />
                                        <p>
                                            <a href="#">
                                                SKETS studio, 373 BroadWay, Suite 611,
                                                New York City, New York 10013
                                            </a><br />
                                            <a href="tel:9174146441">Phone: 9174146441</a>
                                        </p>
                                    </div> */}
                                    {/* <div>

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
                                    </div> */}
                                    {/* <div>

                                        <h2>SKETS Campus</h2>
                                        <hr />
                                        <p>
                                            <a href="https://maps.app.goo.gl/JBJ9rw34fWbAUmjv9" target="_blank">
                                                SKETS Studio Private Limited
                                                297 & 298, Patparganj Industrial Estate,
                                                Delhi 110092, India.
                                            </a><br />
                                            <a href="tel:+91-981004142">Phone +91-981004142</a>
                                        </p>
                                    </div> */}
                                    <div>
                                        <h2>Office</h2>
                                        <hr />
                                        <p>
                                            <a href="#" target="_blank">
                                                901, A.Shridhar Athens, Ambawadi,
                                                Ahmedabad, Gujarat 380015, India.
                                            </a>
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
                            <p>@2024 <Link to="https://www.outleadsolutions.com/" target="_blank"><b>OutLead solutions.</b></Link> All rights reserved.</p>
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