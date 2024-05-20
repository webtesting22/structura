import React from "react";
import HomeHero from "../HomeHero/HomeHero";
import StrucuraInfo from "../StructuraInfo/WhoweAre"
import HomePageProject from "../HomePageProject/HomePageProject";
const StructuraHome = () => {
    return (
        <>
            <HomeHero />
            <StrucuraInfo/>
            <HomePageProject/>
        </>
    )
}
export default StructuraHome;