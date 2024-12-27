import React from "react";
import "./HomePageAbout.css"
const HomePageAbout = () => {
    return (
        <>
            <section className="AboutUsHomeContainer" id="AboutUsHomeContainer">
                <div className="AboutInfoContainer">
                    <div className="ContentContainerAbout" data-aos="fade-right" data-aos-duration="1000">
                        <div>
                        <h1>Crafting Excellence: Innovative Construction Solutions with Integrity</h1>
                        <p>At <b>STRUCTURA</b>, we specialize in delivering high-quality construction services, combining innovation and craftsmanship to bring your vision to life, ensuring lasting results with professionalism and integrity on every project.
                        </p>
                        </div>
                    </div>
                    <div className="PositionImageAjust" data-aos="fade-left" data-aos-duration="1000">
                        <img src="/images/ProjectsImages/Banglows/K.C.PATEL%20BUNGLOW/02.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomePageAbout