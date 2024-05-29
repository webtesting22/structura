import React from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import TopBack from '../Navigation/ResidentialBacl.webp'

const AllProjects = () => {
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/AllProjects", name: "AllProjects" },
        // Add more links as needed
    ];

    return (
        <>

            <StructuraCommonHero
                image={TopBack}
                text="All the Project Here"
                routeLinks={routeLinks}
            />
            <section id="AllProjects">
                <div className="container">
                    <div className="Smalltagline"><h4 className="sectionHeading"><div></div>All Projects</h4></div>
                    <h1 data-aos="fade-up" className="bigHeading"
                        data-aos-duration="1000">Residential and Commertial Projects</h1>
                </div>
            </section>
        </>
    )
}
export default AllProjects