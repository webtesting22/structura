import React, { useState, useEffect } from "react";
import StructuraCommonHero from "../AllPageCommonHero/StructuraCommonHero";
import "./AllServices.css";

const AllServices = () => {
    const [showList, setShowList] = useState(false);
    const routeLinks = [
        { path: "/", name: "Home" },
        { path: "/clientsanddirectors", name: "Clients And Directors" },
        // Add more links as needed
    ];
    const Image =
        "https://images.unsplash.com/photo-1616531770192-6eaea74c2456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
            <StructuraCommonHero image={Image} text="Directors and Clients" routeLinks={routeLinks} />
            <section className="AllServicesSection">
                <div className="LeftSideAnimatedLinks">
                    <div className="leftSideProgressContainer">
                        <div className="ProgressBarPageScroll"></div>
                        <div className="leftSideLinksContainer">
                            <ul id="scrollList" className={showList ? "showList" : "hideList"}>
                                <li>BIM REVIT & VECTORWORKS</li>
                                <li>INTERIOR DESIGN</li>
                                <li>ARCHITECTURE</li>
                                <li>MECHANICAL, ELECTRICAL, PLUMBING & FIREFIGHTING</li>
                                <li>3D VISUALIZATION</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="AllServicesdata"></div>
            </section>
        </>
    );
};

export default AllServices;
