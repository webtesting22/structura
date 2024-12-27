import React, { useState, useEffect } from "react";
import "./HomeHero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import DownArrow from "../HomeHero/downArrow.png"
// import img2 from "./2.jpg";
// import img3 from "./3.jpg";
// import img4 from "./4.jpg";
// import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "/images/ProjectsImages/Banglows/AMITBHAI - BUNGALOW/01.jpg"
import img1 from '/images/ProjectsImages/HighRiseBuilding/ProfitRoyal/01.jpg'
import img2 from "/images/ProjectsImages/HighRiseBuilding/Rudveda/02.jpg"
import img3 from "/images/ProjectsImages/HighRiseBuilding/SankalpAnanta/05.jpg"
import img4 from "/images/ProjectsImages/HighRiseBuilding/SuparnaResidence/01.jpg"
import img5 from "/images/ProjectsImages/HighRiseBuilding/BeaufortPark/01.jpg"
const HomeHero = () => {
    const headings = [
        "Together, let's build a better construction experience",
        'Building with confidence and trust',
        'Creating a lasting construction legacy'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);  // Start fading out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
                setFade(true);  // Fade in after switching
            }, 1000); // Wait for fade-out animation to finish
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const StructuraCarousalImages = [
        // {
        //     image: img6,
        // },
        // {
        //     image: img5,
        // },
        // {
        //     image: img3,
        // },
        // {
        //     image: img4,
        // },
        {
            image: img7,
        },
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img5,
        }
    ]


    return (
        <>

            <section id="StructuraHeroSection">
                <div className="Herosectionadjust">

                    {/* <div className="left-side-container">
                        <div className="view-only-Mobile">
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
                        <div className="content-container" >
                            <div className="content" data-aos="fade-up"
                                data-aos-duration="2000">
                                <h4>Together, let's build a better
                                    <br />
                                    construction experience
                                </h4>
                            </div>
                        </div>
                        <div className="scrollDownBtnContainer"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="2000"
                        >
                            <i className='bx bx-down-arrow-alt' style={{color:"#ffffff"}}  ></i>
                            <FaArrowDown className="downArrow" />

                            <img src={DownArrow} alt="" style={{ width: "100%", cursor: "pointer" }} onClick={() => window.scrollBy({ top: 650, behavior: 'smooth' })} />
                        </div>
                    </div> */}
                    <div className="right-side-image-container">
                        <div className="content-container" >
                            <div className="content" data-aos="fade-up"
                                data-aos-duration="2000">
                                <h4 className={`fade ${!fade ? 'fade-exit' : ''}`}>
                                    {headings[currentIndex]}
                                </h4>
                            </div>
                            {/* <div className="scrollDownBtnContainer"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="2000"
                            >

                                <img src={DownArrow} alt="" style={{ width: "100%", cursor: "pointer" }} onClick={() => window.scrollBy({ top: 650, behavior: 'smooth' })} />
                            </div> */}

                        </div>

                        <div className="imageOverlay">

                        </div>
                        <Swiper
                            spaceBetween={30}
                            autoplay={{
                                delay: 2300,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            speed={1000}
                            modules={[Autoplay]}
                            className="mySwiper"
                            id="Myswiper"
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