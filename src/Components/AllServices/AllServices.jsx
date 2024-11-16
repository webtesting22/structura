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
            <StructuraCommonHero image={Image} text="Expert Services, Exceptional Results"
                routeLinks={routeLinks} />
            <section className="allServicesSection">
                <h1 className="bigHeading">Our Services</h1>
                <AnimatedStackCards />
            </section>


        </>
    );
};

export default AllServices;
