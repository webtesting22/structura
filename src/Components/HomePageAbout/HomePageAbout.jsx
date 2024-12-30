import React, { useState, useEffect, useRef } from "react";
import "./HomePageAbout.css"
const HomePageAbout = () => {
    const imageRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                const calculatedOffset = (scrollPosition - rect.top) * 0.5; // Adjust multiplier
                console.log("Calculated Offset:", calculatedOffset); // Debugging
                setOffset(calculatedOffset);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="AboutUsHomeContainer" id="AboutUsHomeContainer">
                <div className="AboutInfoContainer">
                    <div className="ContentContainerAbout" data-aos="fade-right" data-aos-duration="1000">
                        <div>
                            <div className="Smalltagline"><h4 className="sectionHeading"><div></div>About Structura</h4></div>
                            <h2>Crafting Excellence: Innovative Construction Solutions with Integrity</h2>
                            <p>At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.
                            </p>
                        </div>
                    </div>
                    <div className="PositionImageAjust" 
                    >
                        <img src="/images/ProjectsImages/Banglows/K.C.PATEL%20BUNGLOW/02.jpg" alt="" ref={imageRef}
                            style={{
                                transform: `translateY(${offset}px)`,
                                // transition:".2s"
                            }}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePageAbout