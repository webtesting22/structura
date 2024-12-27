import React from "react";
import "./struraCommonHero.css"
import { Link } from "react-router-dom";
const StructuraCommonHero = (props) => {
    const { image, text, routeLinks } = props;

    return (
        <>
            <section id="commonHerosection">
                <div className="commonHerosectionOverlay">

                </div>
                <div className="imageContainerWithText">
                    <div className="imageContainer" style={{ width: "100%" }}>
                        <img src={image} alt="Hero Image" className="zoom-animation" />
                    </div>
                    <div className="contentContainer1">
                        <div className="content" data-aos="fade-up"
                            data-aos-duration="2000">
                            <h4>{text}</h4>
                        </div>
                        {/* <div className="routeChangelinks"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="2000">
                            <div className="linksNames">
                                {routeLinks.map((link, index) => (
                                    <React.Fragment key={index}>
                                        <Link to={link.path}>{link.name}</Link>
                                        {index !== routeLinks.length - 1 && <span style={{ color: 'white' }}> /</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div> */}
                    </div>

                </div>
            </section>
        </>
    );
};

export default StructuraCommonHero;
