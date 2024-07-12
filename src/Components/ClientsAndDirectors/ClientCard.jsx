import React from "react"
import clientData from "./ClientsLogo"
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./ClientCard.css"
const ClientCard = () => {
    return (
        <div className="clientCardContainer">
            <Swiper
                // slidesPerView={6}
                // centeredSlides={true}
                // spaceBetween={30}
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                // autoplay={{
                //   delay: 2500,
                //   disableOnInteraction: false,
                // }}
                // pagination={{
                //     clickable: true,
                // }}
                autoplay={{
                    delay: 0, // Continuous scroll
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={7000} // Adjust speed for smooth scrolling
                modules={[FreeMode, Autoplay]}
                // navigation={true}
                // modules={[Autoplay, Pagination, Navigation]}
                // // modules={[Pagination]}
                className="mySwiper"
            >
                {clientData.map((client, index) => (
                    <SwiperSlide key={index}>
                        <div className="client-card">
                            <img src={client.companyLogo} alt={client.companyTitle} className="client-logo" />
                            <h3>{client.companyTitle}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};
export default ClientCard;