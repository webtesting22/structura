import React, { useEffect, useRef } from "react";
import img1 from "./Images/1.png"
import img2 from "./Images/2.png"
import img3 from "./Images/3.png"
import img4 from "./Images/4.png"
import img5 from "./Images/5.png"
import img6 from "./Images/6.png"
import img7 from "./Images/7.png"
import img8 from "./Images/8.png"
import img9 from "./Images/9.png"
import img10 from "./Images/10.png"
import img11 from "./Images/11.png"
const AnimatedStackCards = ({activeCard }) => {
    const containersRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.7,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const container = entry.target;
                if (entry.isIntersecting) {
                    container.classList.remove('dark');
                } else {
                    container.classList.add('dark');
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
            img: img1,
            serviceTitle: "STRUCTURAL DESIGN",
            serviceDescription: "Our forward-thinking structural design solutions prioritize strength and longevity while ensuring the highest standards of safety. Using advanced engineering principles, we create projects that stand the test of time. Combining aesthetic excellence with efficiency, we push the limits of structural design to deliver visually stunning and functionally superior buildings that comply with all relevant codes and regulations.",
            servicePoints: [
                "Residential Structures",
                "Commercial Buildings",
                "Industrial Facilities",
                "Restoration of Historical Structures",
                "Repair and Conservation of Heritage Buildings"
            ]
        },
        {
            img: img2,
            serviceTitle: "MEP DESIGN",
            serviceDescription: "Our MEP designs focus on optimizing the mechanical, electrical, and plumbing systems to ensure efficient and comfortable environments. Using the latest in Building Information Modeling (BIM) and 3D modeling, we tailor each system to the unique needs of the project, ensuring it meets performance standards while maintaining operational efficiency.",
            servicePoints: [
                "Residential Projects",
                "Commercial Buildings",
                "Industrial Structures",
                "Renovation and Remodeling",
                "Heritage Building Repair"
            ]
        },
        {
            img: img3,
            serviceTitle: "INTERIOR DESIGN",
            serviceDescription: "Our interior design services are crafted to elevate living and working spaces with a focus on functionality and style. From luxurious homes to dynamic commercial spaces, we customize each project to reflect the client's unique vision while ensuring sustainability and eco-friendly practices throughout the design process.",
            servicePoints: [
                "Residential Interiors",
                "Commercial Spaces",
                "Renovation & Remodeling",
                "Furniture and Decor Selection",
                "Sustainable Design Solutions"
            ]
        },
        {
            img: img4,
            serviceTitle: "ARCHITECTURAL CAD DRAFTING",
            serviceDescription: "We provide top-notch architectural CAD services, from detailed 2D drawings to advanced 3D renderings. Our experienced team ensures precise architectural construction drawings that comply with all local building codes and standards, providing a seamless design-to-construction workflow.",
            servicePoints: [
                "2D Floor Plan Drawings",
                "Section and Elevation Drawings",
                "Site Plans & Roof Plan Drawings",
                "Furniture Layouts",
                "Scan-to-CAD Drafting Services"
            ]
        },
        {
            img: img5,
            serviceTitle: "MEP CAD DRAFTING",
            serviceDescription: "Our MEP CAD drafting services ensure optimal design for mechanical, electrical, and plumbing systems, integrating architectural and structural drawings to meet project requirements. We specialize in creating accurate MEP CAD drawings for seamless installation and construction management.",
            servicePoints: [
                "HVAC CAD Drawings",
                "Electrical CAD Plans",
                "Plumbing CAD Drawings",
                "Fire Protection CAD Drawings",
                "MEP Detail Drawings"
            ]
        },
        {
            img: img6,
            serviceTitle: "STRUCTURAL CAD DRAFTING",
            serviceDescription: "We possess the technical knowledge and technological resources, combined with our thorough research, to deliver the best structural drawings and solutions for each challenge. Specializing in generating structural CAD drawings for residential, commercial, and industrial buildings, we adhere to the standards dictated by project locations and building codes, ensuring optimal results in every project.",
            servicePoints: [
                "Foundation Layouts",
                "General arrangement drawings",
                "Structural assembly drawings",
                "Erection layouts",
                "Roof framing plans",
                "Steel plate fabrication drawings",
                "Connection Sketches",
                "Reinforcement Detailing"
            ]
        },
        {
            img: img7,
            serviceTitle: "ARCHITECTURAL BIM SERVICES",
            serviceDescription: "We offer solutions tailored for dynamic environments where business and technology strategies intersect. Our expertise lies in creating detailed 3D visuals that validate building designs before construction begins. Our adept architectural drafters excel at identifying design issues, detecting clashes early, and minimizing costly rework, ensuring a smoother and more efficient construction process.",
            servicePoints: [
                "3D Building Visuals",
                "Design Validation",
                "Clash Detection",
                "Rework Minimization",
                "Efficient Construction Workflow"
            ]
        },
        {
            img: img8,
            serviceTitle: "STRUCTURAL BIM SERVICES",
            serviceDescription: "We specialize in providing comprehensive structural engineering BIM services tailored for residential, industrial, and commercial projects. Our team of BIM experts excels in developing detailed structural BIM models, drafting, and producing comprehensive shop drawings for precision and efficiency throughout the project lifecycle.",
            servicePoints: [
                "Structural BIM Models",
                "Structural Drafting",
                "Shop Drawings",
                "Lifecycle Project Management",
                "Precision Engineering"
            ]
        },
        {
            img: img9,
            serviceTitle: "MEP BIM SERVICES",
            serviceDescription: "We develop accurate MEP models that enable consultants, contractors, manufacturers, and fabricators to seamlessly manage on-site activities. Our services cover standalone and integrated BIM modeling, adhering to international standards for complex projects such as laboratories, hospitals, schools, universities, and industrial facilities.",
            servicePoints: [
                "HVAC Ducts and Mechanical Piping",
                "Fire Protection BIM Services",
                "Sanitary and Water Supply Systems",
                "Electrical BIM Modeling",
                "Piping Modeling"
            ]
        },
        {
            img: img10,
            serviceTitle: "FACADE BIM SERVICES",
            serviceDescription: "We specialize in creating comprehensive 2D and 3D drawings, along with 3D to 5D BIM models, to enhance building data management, visualization, and BOQ calculations. Our facade BIM services encompass glazing, cladding, prefabricated metals, canopies, doors, windows, and skylights, meeting diverse project needs.",
            servicePoints: [
                "Glazing and Cladding",
                "Prefabricated Metals",
                "Canopies, Doors, and Windows",
                "Skylights",
                "BOQ Calculation"
            ]
        },
        {
            img: img11,
            serviceTitle: "RENDERING SERVICES",
            serviceDescription: "At Structura Consultants, we elevate your vision with comprehensive 3D visualization and branding services. From architectural rendering to product modeling, we bring ideas to life with precision and creativity, crafting immersive experiences tailored to your unique needs.",
            servicePoints: [
                "3D Exterior Rendering",
                "3D Interior Renderings",
                "3D Animation/Walkthrough Services",
                "Site Plan 3D Rendering"
            ]
        }
    ];

    return (
        <>
            <div className="AnimatedStackCards">
                {StackCards.map((item, index) => {

                    const wrapFirstWord = (text) => {
                        const words = text.split(' ');
                        if (words.length > 1) {
                            return `<span class="FirstWord">${words[0]}</span> ${words.slice(1).join(' ')}`;
                        }
                        return text;
                    };
                    return (
                        <div
                        key={item.id}
                            className="StackCardContainer"
                            ref={(el) => (containersRef.current[index] = el)}
                        >
                            <img src={item.img} alt="" />
                            <div className="Imageoverlay"></div>
                            <div className="AnimatedCardContentContainer">
                                <div className="ContentInsideContainer">
                                    <h4 className="ServiceTitle" dangerouslySetInnerHTML={{ __html: wrapFirstWord(item.serviceTitle) }} />
                                    <p>{item.serviceDescription}</p>
                                    <ul className="ServicePointsList">
                                        {item.servicePoints.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default AnimatedStackCards