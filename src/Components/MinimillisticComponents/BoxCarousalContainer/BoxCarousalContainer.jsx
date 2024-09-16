import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BoxCarousal.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import { TbCheckbox } from "react-icons/tb";
import HospitalityIcon from "./ICONS/HOSPITALITY.png";
import CorporateIcon from "./ICONS/CORPORATE.png";
import RetailIcon from "./ICONS/RETAIL.png";
import CommercialIcon from "./ICONS/COMMERCIAL.png";
import ResidentialIcon from "./ICONS/RESIDENTIAL.png";
import HealthcareIcon from "./ICONS/HEALTH-CARE.png";
import InstitutionalIcon from "./ICONS/INSTITUTIONAL.png";
import MixedUseIcon from "./ICONS/MIXED-USE.png";
import AgedCareIcon from "./ICONS/AGED-CARE.png";
import Title from "antd/es/skeleton/Title";
const BoxCarousalContainer = () => {
    const AboutUsExpertisecarousalData = [
        {
            Icon:HospitalityIcon,
            Title: "Hospitality"
        },
        {
            Icon: CorporateIcon,
            Title: "Corporate"
        },
        {
            Icon:RetailIcon,
            Title: "Retail"
        },
        {
            Icon: CommercialIcon,
            Title: "Commercial"
        },
        {
            Icon: ResidentialIcon,
            Title: "Residential"
        },
        {
            Icon: HealthcareIcon,
            Title: "Healthcare"
        },
        {
            Icon: InstitutionalIcon,
            Title: "Institutional"
        },
        {
            Icon: MixedUseIcon,
            Title: "Mixed-use"
        },
        {
            Icon: AgedCareIcon,
            Title: "Aged-Care"
        },
    ]
    return (
        <>
            <div className="container" id="SwiperSliderContainer">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    // freeMode={true}
                    loop={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        300: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 6,
                        },
                      }}
                    autoplay={{
                        delay: 500, // Continuous scroll
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={1500} // Adjust speed for smooth scrolling
                    modules={[ Autoplay]}
                    className="mySwiper"
                >
                    {AboutUsExpertisecarousalData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="continuesCarousalItems">
                                <div className="icons"><img src={item.Icon}/></div>
                                <div><h5>{item.Title}</h5></div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </>
    )
}
export default BoxCarousalContainer;