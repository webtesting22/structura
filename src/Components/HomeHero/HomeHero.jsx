import React from "react";
import "./HomeHero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import DownArrow from "../HomeHero/downArrow.png"
const HomeHero = () => {

    const StructuraCarousalImages = [
        {
            image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
    return (
        <>
            <section id="StructuraHeroSection">
                <div className="Herosectionadjust">
                   
                    <div className="left-side-container">
                        <div className="content-container">
                            <div className="content" data-aos="fade-up"
                                data-aos-duration="2000">
                                <h4>Together, let's build a better
                                    <br />
                                    construction experience
                                </h4>
                            </div>
                        </div>
                        <div className="scrollDownBtnContainer" data-aos="fade-up"
                                data-aos-duration="1000"  data-aos-delay="2000">
                                    <img src={DownArrow} alt=""  style={{width:"100%"}}/>
                        </div>
                    </div>
                    <div className="right-side-image-container">
                        <div className="imageOverlay">

                        </div>
                        <Swiper
                            spaceBetween={30}
                            effect={'fade'}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            style={{ height: "100vh" }}
                            modules={[Autoplay, EffectFade, Pagination]}
                            className="mySwiper"
                        >
                            {StructuraCarousalImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="slidesImg-container">
                                        <img src={item.image} className="zoom-animation" />
                                    </div>
                                </SwiperSlide>
                            ))}


                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
export default HomeHero;