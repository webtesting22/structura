import React, { useState } from "react";
import "./bottomtoup.css";
import UpArrow from "../HomeHero/downArrow.png"
const BottomToTopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    // Function to handle scroll event and toggle button visibility
    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add scroll event listener when the component mounts
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`bottom-to-top-container ${isVisible ? "visible" : ""}`}>
            <div className="btnDesign">
                <button onClick={scrollToTop}><img src={UpArrow} alt="" /></button>
            </div>
        </div>
    );
};

export default BottomToTopBtn;
