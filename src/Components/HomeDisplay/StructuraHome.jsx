import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import StrucuraInfo from "../StructuraInfo/WhoweAre"
import HomePageProject from "../HomePageProject/HomePageProject";
import HomePageProject2 from "../HomePageProject2/HomePageProject2";
import GalleryCarousal from "../GalleryCarousal/GalleryCarousal";
import ClientCard from "../ClientsAndDirectors/ClientCard";
// import BottomToTopBtn from "../BottomTotopBtn/BottomTotopBtn";
const StructuraHome = () => {
    return (
        <>
            <HomeHero />
            <StrucuraInfo/>
            <HomePageProject2 />
            <section>
                <div id="clientSection">
                    <h1 className="bigHeading">Our Clients</h1>
                    <br /><br />
                    <ClientCard />
                </div>
            </section>
            {/* <HomePageProject/> */}
            {/* <GalleryCarousal/> */}
            {/* <BottomToTopBtn/> */}
        </>
    )
}
export default StructuraHome;