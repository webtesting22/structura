import React, { useState, useEffect, useRef } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import "./AllServices.css";
import Image from "../AllServices/4.png"
import AnimatedStackCards from "./AnimationStackCards";

const AllServices = () => {

    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/allservices", name: "All Services" },
    ];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);






    return (
        <>
            <StructuraCommonHero image={Image} text="Expert Services, Exceptional Results"
                routeLinks={routeLinks} />
            <section className="allServicesSection">
                <h1 className="bigHeading">Our Services</h1>
                {/* <p>At Structura Consultants, we specialize in delivering end-to-end solutions tailored to meet the diverse needs of modern engineering and architectural projects. From robust Structural Design that ensures safety and durability to innovative MEP Design that optimizes functionality and efficiency, we bring expertise and precision to every stage of development. Our cutting-edge Architectural CAD Drafting and MEP CAD Drafting services provide detailed and accurate drawings that set the foundation for flawless execution. With advanced BIM Services for architectural, structural, and MEP systems, we empower clients to visualize, validate, and streamline construction processes like never before. To top it all, our high-quality Rendering Services turn concepts into captivating 3D visuals, bringing projects to life with creativity and technical brilliance. Together, our services are designed to transform your vision into reality with excellence and efficiency.</p> */}
                <AnimatedStackCards />
            </section>


        </>
    );
};

export default AllServices;
