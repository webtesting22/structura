import React from "react"
import clientData from "./StructuralClients"
import StructuralArchitecttData from "./StructuralArchitects"
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./ClientCard.css"
const ClientCard = () => {
    return (
        <>
            <div className="clientCardContainer">
                <h1 className="bigHeading">Our Clients</h1>
                <br /><br />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,

                        disableOnInteraction: false,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    speed={700}
                    breakpoints={{
                        // when window width is <= 768px
                        768: {
                            slidesPerView: 5, // Show 2 slides per view on mobile
                            spaceBetween: 20, // Adjust space between slides if needed
                        },
                        // you can add more breakpoints for different screen sizes if needed
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                   {clientData.map((client, index) => (
                        <SwiperSlide key={`client-${index}`}>
                            <div className="ClientCard">
                                <img src={client.companyLogo} alt={client.companyTitle} className="client-logo" />
                                <h3>{client.companyTitle}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="clientCardContainer">
                <h1 className="bigHeading">Our Architects</h1>
                <br /><br />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,

                        disableOnInteraction: false,

                    }}
                    pagination={{
                        clickable: true,
                    }}
                    speed={700}
                    breakpoints={{
                        // when window width is <= 768px
                        768: {
                            slidesPerView: 5, // Show 2 slides per view on mobile
                            spaceBetween: 20, // Adjust space between slides if needed
                        },
                        // you can add more breakpoints for different screen sizes if needed
                    }}
                    navigation={false}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {StructuralArchitecttData.map((architect, index) => (
                        <SwiperSlide key={`architect-${index}`}>
                            <div className="ClientCard">
                                <img src={architect.companyLogo} alt={architect.companyTitle} className="client-logo" />
                                <h3>{architect.companyTitle}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </>
    );
};
export default ClientCard;