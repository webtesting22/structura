import React, { useEffect, useRef } from "react";

const AnimatedStackCards = () => {
    const containersRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.7, // Trigger when 70% of the image is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const container = entry.target;
                if (entry.isIntersecting) {
                    container.classList.remove('dark'); // Remove dark class when intersecting
                } else {
                    container.classList.add('dark'); // Add dark class when not intersecting
                }
            });
        }, observerOptions);

        containersRef.current.forEach((container) => {
            if (container) observer.observe(container);
        });

        return () => {
            containersRef.current.forEach((container) => {
                if (container) observer.unobserve(container);
            });
        };
    }, []);
    const StackCards = [
        {
            img: "https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            img: "https://images.unsplash.com/photo-1468500428914-59a49bceb33c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

    ]
    return (
        <>
            <div className="AnimatedStackCards">
                {StackCards.map((item, index) => (
                    <div
                        key={index}
                        className="StackCardContainer"
                        ref={(el) => (containersRef.current[index] = el)}
                    >
                        <img src={item.img} alt="" />
                        <div className="Imageoverlay"></div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default AnimatedStackCards