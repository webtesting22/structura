import React from "react";
import "./Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import StructuraLogo from "/images/structuraLogo.png"
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <section id="Footer" style={{ padding: "0px" }}>
                <div className="footerSection">
                    <div>
                        <Row>

                            <div className="FooterRebuild">
                                <Col lg={8} >
                                    <Link to="/">
                                        <div className="footer-logo">
                                            <img src={StructuraLogo} alt="" />
                                        </div>
                                    </Link>
                                </Col>
                                {/* <Col lg={8} >
                                    <p className="footer-para">At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.</p>
                                    <br />
                                </Col> */}
                                <Col lg={16} >
                                    <div className="para">
                                        <p>At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.</p>
                                        <br />
                                    </div>
                                    <div className="Contact">
                                        <span><MdEmail className="footerlocationicon" />&nbsp; <a href="mailto:connect@structuraconsultants.com">connect@structuraconsultants.com</a></span>
                                        <span><FaPhone className="footerlocationicon" /> &nbsp;        <a href="tel:+919825324480">+91-9825324480</a>
                                            &nbsp;
                                            OR
                                            &nbsp;
                                            <a href="tel:+919099024581">+91-9099024581</a>
                                        </span>
                                        <span><MdOutlineLocationOn className="footerlocationicon footerlocation3" />&nbsp;<a href="https://maps.app.goo.gl/DfKxgYaKkWJnAAix9"> 901, A.Shridhar Athens, Ambawadi,
                                            Ahmedabad, Gujarat 380015, India.</a>
                                        </span>
                                    </div>
                                </Col>
                                {/* <button className="commomBtn">Connect</button> */}
                            </div>


                            {/* <Col lg={8}>
                                <div className="AddressColums">
                                   
                                    <div>
                                        <h2>Address </h2>
                                        <hr />
                                        <p>
                                            <a href="#" target="_blank">
                                                901, A.Shridhar Athens, Ambawadi,
                                                Ahmedabad, Gujarat 380015, India.
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </Col> */}
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