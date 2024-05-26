import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import StrucuraInfo from "../StructuraInfo/WhoweAre"
import HomePageProject from "../HomePageProject/HomePageProject";
import GalleryCarousal from "../GalleryCarousal/GalleryCarousal";
// import BottomToTopBtn from "../BottomTotopBtn/BottomTotopBtn";
const StructuraHome = () => {
    return (
        <>
            <HomeHero />
            <StrucuraInfo/>
            <HomePageProject/>
            <GalleryCarousal/>
            {/* <BottomToTopBtn/> */}
        </>
    )
}
export default StructuraHome;