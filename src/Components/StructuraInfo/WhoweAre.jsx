import React from "react";
import "./Whoweare.css"
import WhoweareBack from "../StructuraInfo/Whoweareback.png"
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
const WhoweAre = () => {
    return (

        <>
            <section id="WhoweAre">
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>
                <div className="WhoweAreContainer">
                    {/* <div className="backgroundOverlay-image">
                        <img src={WhoweareBack} alt="" />
                    </div> */}
                    <div className="WhoweareImage-container">
                        <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
                                    {/* 20,000+ */}
                                    <CountUp
                                        end={20000}
                                        duration={10}
                                        suffix="+"
                                    />

                                    <p>Retail Roll Outs
                                    till date</p>
                                    <div className="icon-box">
                                        <i class='bx bx-buildings' ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
                                    <CountUp
                                        end={100}
                                        duration={10}
                                        suffix="%"
                                    />
                                    <p>Near-100% Client
                                    Retention rate</p>
                                    <div className="icon-box">
                                        <i class='bx bx-buildings' ></i>
                                    </div>
                                </div>
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <div className="CounterBox">
                                    <CountUp
                                        end={32}
                                        duration={10}
                                        suffix="+"
                                    />
                                    <p>Countries where our
                                    projects have been located</p>
                                    <div className="icon-box">
                                        <i class='bx bx-buildings' ></i>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000">
                                <div className="CounterBox">
                                    <div className="icon-box">

                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="WhoweareContent-container">
                        <div className="WhoweareContentText">
                            <div className="Smalltagline"><h4 className="sectionHeading"><div></div>WHO WE ARE</h4></div>
                            <h1 data-aos="fade-up"
                                data-aos-duration="1000">Hello Demo Content</h1>
                            <p data-aos="fade-up"
                                data-aos-duration="2000">Our team has worked on 1500+ multifarious projects. Positioning itself as a navigator, SKETS has been
                                guiding customers on their quest for maximizing business value.</p>
                                <button className="commomBtn"><Link to="/AboutUs">About Us</Link></button>
                        </div>
                    </div>
                </div>
                <div className="sectionPadding"></div>
                <div className="sectionPadding"></div>
            </section>
        </>
    )
}

export default WhoweAre