import React, { useState, useEffect } from "react";
import "./Whoweare.css"
import WhoweareBack from "../StructuraInfo/Whoweareback.png"
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import StructuraLogo from "/images/structuraLogo.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Whoweare.css"; // Your styles
import StructuralClientsLogo from "../ClientsAndDirectors/StructuralClients.jsx"
import StructuralArchitects from "../ClientsAndDirectors/StructuralArchitects";
import "swiper/css";

const WhoweAre = () => {
    const [clientIndex, setClientIndex] = useState(0);
    const [architectIndex, setArchitectIndex] = useState(0);

    const logosPerPage = 6;

    const [clientImages, setClientImages] = useState([]);
    const [architectImages, setArchitectImages] = useState([]);

    useEffect(() => {
        setClientImages(
            StructuralClientsLogo.slice(0, logosPerPage).map((client) => ({
                ...client,
                flipOut: false,
            }))
        );
        setArchitectImages(
            StructuralArchitects.slice(0, logosPerPage).map((architect) => ({
                ...architect,
                flipOut: false,
            }))
        );
    }, []);

    const flipDuration = 1000; // Duration of flipOut animation in milliseconds
    const updateClientImages = () => {
        // Step 1: Trigger flipOut animation for the containers
        setClientImages((prev) =>
            prev.map((img) => ({
                ...img,
                flipOut: true,
            }))
        );

        // Step 2: Update content after animation completes
        setTimeout(() => {
            setClientImages((prev) =>
                prev.map((_, index) => ({
                    ...StructuralClientsLogo[(clientIndex + index + logosPerPage) % StructuralClientsLogo.length],
                    flipOut: false, // Reset for flipIn animation
                }))
            );
            setClientIndex((prevIndex) => (prevIndex + logosPerPage) % StructuralClientsLogo.length);
        }, flipDuration); // Match flipOut duration
    };

    const updateArchitectImages = () => {
        // Step 1: Trigger flipOut animation for the containers
        setArchitectImages((prev) =>
            prev.map((img) => ({
                ...img,
                flipOut: true,
            }))
        );

        // Step 2: Update content after animation completes
        setTimeout(() => {
            setArchitectImages((prev) =>
                prev.map((_, index) => ({
                    ...StructuralArchitects[(architectIndex + index + logosPerPage) % StructuralArchitects.length],
                    flipOut: false, // Reset for flipIn animation
                }))
            );
            setArchitectIndex((prevIndex) => (prevIndex + logosPerPage) % StructuralArchitects.length);
        }, flipDuration); // Match flipOut duration
    };
    useEffect(() => {
        const clientInterval = setInterval(updateClientImages, 2000);
        const architectInterval = setInterval(updateArchitectImages, 2000);

        return () => {
            clearInterval(clientInterval);
            clearInterval(architectInterval);
        };
    }, [clientIndex, architectIndex]);

    return (

        <>
            <section id="WhoweAre">
                {/* <div className="sectionPadding mobileNone"></div> */}
                {/* <div className="sectionPadding mobileNone"></div> */}
                <div className="WhoweAreContainer architectswhoweare">
                    {/* <div className="backgroundOverlay-image">
                        <img src={WhoweareBack} alt="" />
                    </div> */}
                    {/* <div className="WhoweareImage-container">
                        <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
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
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <div className="CounterBox">
                                    <CountUp
                                        end={40}
                                        duration={10}
                                        suffix="+"
                                    />
                                    <p>Total Number of our Projects</p><br /><br />
                                    <div className="icon-box">
                                        <i class='bx bx-buildings' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="WhoweareImage-container">
                        <div className="boxesContainer transition">
                            {clientImages.map((client, index) => (
                                <div
                                    key={index}
                                    className={`SingleBox ${client.flipOut ? "flipOut" : "flipIn"}`}
                                // data-aos="fade-up"
                                //   data-aos-duration="2000"
                                >
                                    <img
                                        src={client.companyLogo}
                                        alt={client.companyTitle}
                                    // className={client.flipOut ? "flipOut" : "flipIn"}


                                    />
                                </div>
                            ))}
                        </div>
                        {/* <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Clients/AShridhar.png" />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Clients/Nirmaan GROUP 2023 FINAL.png" />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Clients/Sankalp.png" />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Clients/addor_group_logo_dark.png" />
                            </div>
                        </div> */}
                    </div>
                    <div className="WhoweareContent-container">
                        <div className="WhoweareContentText">
                            <img src={StructuraLogo} style={{ width: "50px" }} alt="" />
                            <h1 data-aos="fade-up" data-aos-duration="1000">OUR ESTEEMED CLIENTS</h1>
                            <p data-aos="fade-up" data-aos-duration="2000">
                                At Structura Consultants, we have had the privilege of working with some of the most visionary clients across various industries. Our collaborations focus on delivering innovative and sustainable solutions, ensuring that every project reflects the highest standards of excellence and craftsmanship.
                            </p>
                            <Link to="/Projects"> <button className="commomBtn">Our&nbsp;Projects</button></Link>
                        </div>
                    </div>

                </div>

                <div className="sectionPadding mobileNone"></div>
                {/* <div className="sectionPadding mobileNone"></div> */}
                {/* <div className="sectionPadding mobileNone"></div> */}
                <div className="WhoweAreContainer ">
                    {/* <div className="backgroundOverlay-image">
                        <img src={WhoweareBack} alt="" />
                    </div> */}
                    {/* <div className="WhoweareImage-container">
                        <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
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
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <div className="CounterBox">
                                    <CountUp
                                        end={40}
                                        duration={10}
                                        suffix="+"
                                    />
                                    <p>Total Number of our Projects</p><br /><br />
                                    <div className="icon-box">
                                        <i class='bx bx-buildings' ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="WhoweareContent-container">
                        <div className="WhoweareContentText">
                            <img src={StructuraLogo} style={{ width: "50px" }} alt="" />
                            <h1 data-aos="fade-up" data-aos-duration="1000">OUR PARTNER ARCHITECTS</h1>
                            <p data-aos="fade-up" data-aos-duration="2000">
                                At Structura Consultants, we are proud to collaborate with renowned architects who bring unique visions to life. Together, we create designs that blend innovation with tradition, pushing the boundaries of structural excellence.
                            </p>
                            <Link to="/Drafting"> <button className="commomBtn">Drafting</button></Link>
                        </div>
                    </div>
                    <div className="WhoweareImage-container">
                        <div className="boxesContainer transition">
                            {architectImages.map((architect, index) => (
                                <div
                                    key={index}
                                    // className="SingleBox"
                                    className={`SingleBox ${architect.flipOut ? "flipOut" : "flipIn"}`}

                                //data-aos="fade-up"
                                //data-aos-duration="2000"
                                >
                                    <img
                                        src={architect.companyLogo}
                                        alt={architect.companyTitle}
                                    // className={architect.flipOut ? "flipOut" : "flipIn"}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Architects/ApurvaAmin.svg" style={{ width: "70%" }} />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Architects/Dreamscape.png" />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Architects/RR.png" />
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <img src="/images/Structural Architects/9th-street-clientele.jpg" />
                            </div>
                        </div> */}
                    </div>


                </div>

                <div className="sectionPadding mobileNone"></div>
            </section >
        </>
    )
}

export default WhoweAre