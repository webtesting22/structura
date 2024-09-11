import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./BoxCarousal.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import { TbCheckbox } from "react-icons/tb";
import Title from "antd/es/skeleton/Title";
const BoxCarousalContainer = () => {
    const AboutUsExpertisecarousalData = [
        {
            Icon: <TbCheckbox />,
            Title: "Hospitality"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Corporate"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Retail"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Commercial"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Residential"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Healthcare"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Institutional"
        },
        {
            Icon: <TbCheckbox />,
            Title: "Mixed-use"
        },
        {
            Icon: <TbCheckbox />,
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
                        delay: 0, // Continuous scroll
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    speed={5000} // Adjust speed for smooth scrolling
                    modules={[ Autoplay]}
                    className="mySwiper"
                >
                    {AboutUsExpertisecarousalData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="continuesCarousalItems">
                                <div className="icons"><span>{item.Icon}</span></div>
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