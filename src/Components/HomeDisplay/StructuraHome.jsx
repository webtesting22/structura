import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import StrucuraInfo from "../StructuraInfo/WhoweAre"
import HomePageProject from "../HomePageProject/HomePageProject";
import HomePageProject2 from "../HomePageProject2/HomePageProject2";
import GalleryCarousal from "../GalleryCarousal/GalleryCarousal";
// import BottomToTopBtn from "../BottomTotopBtn/BottomTotopBtn";
const StructuraHome = () => {
    return (
        <>
            <HomeHero />
            <StrucuraInfo/>
            <HomePageProject2 />
            {/* <HomePageProject/> */}
            {/* <GalleryCarousal/> */}
            {/* <BottomToTopBtn/> */}
        </>
    )
}
export default StructuraHome;