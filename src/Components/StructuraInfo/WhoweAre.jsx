import React from "react";
import "./Whoweare.css"
import WhoweareBack from "../StructuraInfo/Whoweareback.png"
const WhoweAre = () => {
    return (

        <>
            <section id="WhoweAre">
                <div className="WhoweAreContainer">
                    {/* <div className="backgroundOverlay-image">
                        <img src={WhoweareBack} alt="" />
                    </div> */}
                    <div className="WhoweareImage-container">
                        <div className="boxesContainer">
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
                                    <div className="icon-box">

                                    </div>
                                </div>
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="1000">
                                <div className="CounterBox">
                                    <div className="icon-box">

                                    </div>
                                </div>
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000" >
                                <div className="CounterBox">
                                    <div className="icon-box">

                                    </div>
                                </div>
                            </div>
                            <div className="SingleBox" data-aos="fade-up"
                                data-aos-duration="2000">
                                <div className="CounterBox">
                                    <div className="icon-box">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="WhoweareContent-container">
                        <div className="WhoweareContentText">
                            <div className="Smalltagline"><h4 className="sectionHeading"><div></div>WHO WE ARE</h4></div>
                            <h1 data-aos="fade-up"
                                data-aos-duration="1000">Hello Demo Content</h1>
                            <p data-aos="fade-up"
                                data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Optio animi nesciunt esse rerum, ducimus unde quam quae,
                                deserunt, inventore praesentium a iste dignissimos sapiente
                                labore cupiditate fugit vitae. Dolores, delectus!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoweAre