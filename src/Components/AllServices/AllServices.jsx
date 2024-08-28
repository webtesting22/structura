import React, { useState, useEffect, useRef } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import "./AllServices.css";
import { Link } from "react-router-dom";
import Image from "../AllServices/4.png"
const AllServices = () => {
    const [showList, setShowList] = useState(false);
    const [progress, setProgress] = useState(0);

    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/allservices", name: "All Services" },
        // Add more links as needed
    ];

    const BIM = useRef(null);
    const REVIT = useRef(null);
    const INTERIOR = useRef(null);
    const ARCHITECTURE = useRef(null);
    const MECHANICAL = useRef(null);
    const VISUALIZATION = useRef(null);

    const scrollToSection = (ref) => {

        const offsetTop = ref.current.offsetTop;
        const offset = -50; // Adjust this value to set how much below the top you want to scroll
        window.scrollTo({
            top: offsetTop + offset,
            behavior: 'smooth'
        });
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollDistance = window.scrollY;
            const triggerDistance = 150 * window.innerHeight; // 150vh

            if (scrollDistance >= triggerDistance) {
                setShowList(true);
            } else {
                setShowList(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <StructuraCommonHero image={Image} text="All Services" routeLinks={routeLinks} />
            <section>
                <div className="Smalltagline">
                    <h4 className="sectionHeading"><div></div>All Services</h4>
                    <h1 data-aos="fade-up" className="bigHeading"
                        data-aos-duration="1000">Provides</h1>
                </div>
            </section>

            <section className="AllServicesSection" >


                <div className="LeftSideAnimatedLinks">
                    <div className="progressbar">

                    </div>

                    <ul >
                        <li onClick={() => scrollToSection(BIM)}>BIM</li>
                        <li onClick={() => scrollToSection(REVIT)}>BIM REVIT & VECTORWORKS</li>
                        <li onClick={() => scrollToSection(INTERIOR)}>INTERIOR DESIGN</li>
                        <li onClick={() => scrollToSection(ARCHITECTURE)}>ARCHITECTURE</li>
                        <li onClick={() => scrollToSection(MECHANICAL)}>MECHANICAL, ELECTRICAL,...</li>
                        <li onClick={() => scrollToSection(VISUALIZATION)}>3D VISUALIZATION</li>
                    </ul>
                </div>
                <div className="AllServicesdata">
                    <div ref={BIM}>
                        <h1 className="DualTopHeading">B<span>IM</span></h1>
                        <p>We were one of the early adopters of BIM and have worked on over 325+
                            large architectural, interior, and engineering projects apart from 10,000+
                            Retail outlets.</p>
                        <br />
                        <p>We have over 12+ years of experience in providing high-quality BIM Services to our clients in both
                            the Architecture and Interior Design industries. We work with architectural practices based in the
                            U.S., U.K. Australia & MENA region.
                        </p>
                        <br />
                        <p>Our clientele include Architects, ID Firms, Engineers, Construction Firms, Developers & Business
                            Owners.</p>
                    </div>

                    <div ref={REVIT}>
                        <h1 className="DualTopHeading">R<span>EVIT & VECTORWORKS</span></h1>
                        <div>
                            <h4>Pre-Design</h4>
                            <ul>
                                <li>Program Schemes and Design Schemes</li>
                                <li>Massing study Model</li>
                                <li>3D Presentations</li>
                                <li>Marketing material</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Schematic Design</h4>
                            <ul>
                                <li>3D Design Intent Model & Early conflict resolution</li>
                                <li>Embedding product info.</li>
                                <li>Orientation and Energy analysis, Site & Area Analysis</li>
                                <li>Schematic Design Set</li>
                                <li>“Intelligent” Parametric Library creation</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Design Development</h4>
                            <ul>
                                <li>Update Design per feedback</li>
                                <li>Coordination and Clash detection</li>
                                <li>ASMEPF coordinated Model</li>
                                <li>DD Documentation set</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Construction Documents</h4>
                            <ul>
                                <li>ASMEPF Coordinated BIM model with Interference analysis</li>
                                <li>Permit drawings for approvals & BID sets</li>
                                <li>Exterior & Interior Construction Details drawings</li>
                                <li>Schedules, quantities, area reports, etc.</li>
                                <li>Value engineering</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Bid Stage</h4>
                            <ul>
                                <li>Procurement tracking</li>
                                <li>Instantly verify data</li>
                                <li>Tracking budget</li>
                                <li>Accurate specifications</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Construction</h4>
                            <ul>
                                <li>Construction Sequencing (4D modeling)</li>
                                <li>Monitoring progress</li>
                                <li>Speedy fabrication process</li>
                                <li>Sub-contractor coordination</li>
                                <li>5D modeling</li>
                                <li>Tracking construction progress vis-a-vis cost</li>
                                <li>Change management process</li>
                                <li>As-built Modeling</li>
                            </ul>
                        </div>
                        <div>
                            <h4>FacilityMgmt.</h4>
                            <ul>
                                <li>Double ‘Digital’ asset</li>
                                <li>Maintenance management</li>
                            </ul>
                        </div>
                    </div>
                    <div ref={INTERIOR}>
                        <h1 className="DualTopHeading">I<span>NTERIOR DESIGN</span></h1>
                        <p>We are a market leader in Design Document and arguably the World's no 1 in Documentation
                            for Interior projects. We lead the market in the following verticals : </p>
                        <br />
                        <div>
                            <h4>Hospitality :</h4>
                            <ul>
                                <li>More than 250 experts with a cumulative experience of 400+ years.</li>
                                <li>A glamorous portfolio of 1100+ I.D. projects Worldwide.</li>
                                <li>Experience in creating Iconic buildings from the ground up</li>
                                <li>Experts in BIM & AutoCAD to suit all needs</li>
                                <li>35% more cost-efficient</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Corporate Interiors : </h4>
                            <ul>
                                <li>An Experience of more than 350 projects.</li>
                                <li>A dedicated team of over 20 people</li>
                                <li>The flexibility of expansion in accordance with the project.</li>
                            </ul>
                        </div>
                    </div>
                    <div ref={ARCHITECTURE}>
                        <h1 className="DualTopHeading">A<span>RCHITECTURE</span> </h1>
                        <p>Our architects are trained in global design standards and construction technology. Owing to our
                            specialization, our team value-adds by proactively working on projects even with minimal inputs.</p>
                        <br />
                        <p>We act as an extended arm of the client’s studio, providing documentation services for Architectural
                            projects</p>
                        <br />
                        <div>
                            <h4>We have completed large Architectural projects in the following sectors:</h4>
                            <ul>
                                <li>Institutional & Public Buildings</li>
                                <li>Retail Outlets & Rollouts</li>
                                <li>Mixed-use</li>
                                <li>Hotels and Resorts</li>
                                <li>Restaurants & Clubs</li>
                                <li>Commercial Buildings</li>
                                <li>Residential (Single family & Multi-storied)</li>
                                <li>Renovation of Projects</li>
                                <li>Healthcare</li>
                                <li>Aged-care</li>
                            </ul>
                        </div>
                    </div>
                    <div ref={MECHANICAL}>
                        <h1 className="DualTopHeading">M<span>ECHANICAL, ELECTRICAL, PLUMBING & FIREFIGHTING</span></h1>
                        <p>SKETS MEP team is supported by highly experienced Engineers and Designers providing
                            HVAC/Mechanical, Electrical, Plumbing, Fire Fighting, Fire Alarm, Public Address, Security,
                            Telephone/Data Documentation & BIM services to Consultants, Contractors and Real-Estate
                            Developers. </p>
                        <br />
                        <p>We work closely with design firms during the design development stages using a well-defined
                            process. Our team members work with a range of inputs, including conceptual drawings, hand
                            sketches, data sheets, design calculation excels, Red-Line Markups, and Single-Line Diagrams.</p>
                        <br />
                        <p><b>We specialize in BIM modeling to validate the design for constructability, performance,
                            and maintenance. </b></p>
                        <br />
                        <p><b>Our MEP team has executed various Design Development projects with respect to BS,
                            IS, NBC, NFPA, IEEE, ASME and ASHRAE codes.
                        </b></p>
                    </div>
                    <div ref={VISUALIZATION}>
                        <h1 className="DualTopHeading">3<span>D VISUALIZATION</span></h1>
                        <p>The 3D Visualization Studio stands apart as our designers and specialists understand Architecture,
                            Engineering, and Interior Design.</p>
                        <br />
                        <p><b>Our 3D designers are experts at creating 'Realistic Images & 3D Walkthroughs' for Corporate
                            interiors, Hotels, Villas, Residences, Retail Outlets, Exhibitions, Commercial buildings, Malls
                            and so on.
                        </b></p>
                        <br />
                        <div>
                            <h4>3D Services:</h4>
                            <ul>
                                <li>Presentation Drawings</li>
                                <li>Interactive VR based Walkthroughs in Unreal Engine Package</li>
                                <li>Unreal Engine Walkthroughs & Flythroughs</li>
                                <li>3D Still Rendering</li>
                                <li>3D Interior and External Animation</li>
                                <li>4D & 5D Modeling and Animation</li>
                            </ul>
                            <p><b>Our team of experienced architects, engineers, designers and artists
                                pool their skills to create amazing 3D & 4D visualization & animations</b></p>
                        </div>
                    </div>


                </div>

            </section>
            <hr />
            <div className="AllServicesData">
                {/* <div className="PaddingAdjust"> */}
                <h1 data-aos="fade-up" className="bigHeading"
                    data-aos-duration="1000">AWARDS & RECOGNITIONS</h1>

                <div className="awards-container" >
                    <h1 className="DualTopHeading">E<span>xcellence Award</span></h1>
                    <p>Our strong commitment in providing the very best for our clients is reflected in the Excellence award
                        conferred to us by one of the biggest US-based firms. The award was presented by the company’s Founder &
                        CEO for excellence in Design Documentation service provided by SKETS.
                    </p>
                    <h1 className="DualTopHeading">A<span>uto desk India Case Study</span></h1>
                    <p>We were approached by AutoDesk to make a case study which reflects our technical capabilities in Revit. It
                        showcased our work process, ability to handle & deliver complex Revit projects & our dedication towards
                        quality excellence.</p>
                    {/* </div> */}
                </div>
            </div>
            <br /><br />
        </>
    );
};

export default AllServices;
