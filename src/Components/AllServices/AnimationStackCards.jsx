import React, { useEffect, useRef, useState } from "react";
// import img1 from "../AnimatedHoverableCard/8.png";
import icon1 from "./Images/A-BIM.png";
import icon2 from "./Images/ACD.png";
import icon3 from "./Images/MEP_CAD.png";
import icon4 from "./Images/MEP_BIM.png";
import icon5 from "./Images/MEP.png";
import icon6 from "./Images/RS.png";
import icon7 from "./Images/S-BIM.png";
import icon8 from "./Images/SCD.png";
import icon9 from "./Images/structural.png";
import { Collapse, Row, Col, Image, theme } from "antd";

const { Panel } = Collapse;

const AnimatedStackCards = () => {
  const [activeKey, setActiveKey] = useState(null);
  const { token } = theme.useToken();
  const panelStyle = {
    // marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusMD,

    width: 100,
  };
  const StackCards = [
    {
      key: "1",
      id: "StructuralDesign",
      ref: "StructuralDesign",
      img: icon9,
      serviceTitle: "STRUCTURAL DESIGN",
      serviceDescription:
        "Our forward-thinking structural design solutions prioritize strength and longevity while ensuring the highest standards of safety. Using advanced engineering principles, we create projects that stand the test of time. Combining aesthetic excellence with efficiency, we push the limits of structural design to deliver visually stunning and functionally superior buildings that comply with all relevant codes and regulations.",
      servicePoints: [
        "Residential Structures",
        "Commercial Buildings",
        "Industrial Facilities",
        "Restoration of Historical Structures",
        "Repair and Conservation of Heritage Buildings",
      ],
      style: panelStyle,
    },
    {
      key: "2",
      id: "MepDesign",
      img: icon5,
      serviceTitle: "MEP DESIGN",
      serviceDescription:
        "Our MEP designs focus on optimizing the mechanical, electrical, and plumbing systems to ensure efficient and comfortable environments. Using the latest in Building Information Modeling (BIM) and 3D modeling, we tailor each system to the unique needs of the project, ensuring it meets performance standards while maintaining operational efficiency.",
      servicePoints: [
        "Residential Projects",
        "Commercial Buildings",
        "Industrial Structures",
        "Renovation and Remodeling",
        "Heritage Building Repair",
      ],
      style: panelStyle,
    },
    // {
    //     id: "InteriorDesign",
    //     img: img3,
    //     serviceTitle: "INTERIOR DESIGN",
    //     serviceDescription: "Our interior design services are crafted to elevate living and working spaces with a focus on functionality and style. From luxurious homes to dynamic commercial spaces, we customize each project to reflect the client's unique vision while ensuring sustainability and eco-friendly practices throughout the design process.",
    //     servicePoints: [
    //         "Residential Interiors",
    //         "Commercial Spaces",
    //         "Renovation & Remodeling",
    //         "Furniture and Decor Selection",
    //         "Sustainable Design Solutions"
    //     ]
    // },
    {
      key: "3",
      id: "Architecture",
      img: icon2,
      serviceTitle: "ARCHITECTURAL CAD DRAFTING",
      serviceDescription:
        "We provide top-notch architectural CAD services, from detailed 2D drawings to advanced 3D renderings. Our experienced team ensures precise architectural construction drawings that comply with all local building codes and standards, providing a seamless design-to-construction workflow.",
      servicePoints: [
        "2D Floor Plan Drawings",
        "Section and Elevation Drawings",
        "Site Plans & Roof Plan Drawings",
        "Furniture Layouts",
        "Scan-to-CAD Drafting Services",
      ],
      style: panelStyle,
    },
    {
      key: "4",
      id: "MepDrafting",
      img: icon3,
      serviceTitle: "MEP CAD DRAFTING",
      serviceDescription:
        "Our MEP CAD drafting services ensure optimal design for mechanical, electrical, and plumbing systems, integrating architectural and structural drawings to meet project requirements. We specialize in creating accurate MEP CAD drawings for seamless installation and construction management.",
      servicePoints: [
        "HVAC CAD Drawings",
        "Electrical CAD Plans",
        "Plumbing CAD Drawings",
        "Fire Protection CAD Drawings",
        "MEP Detail Drawings",
      ],
      style: panelStyle,
    },
    {
      key: "5",
      id: "StructureDrafting",
      img: icon8,
      serviceTitle: "STRUCTURAL CAD DRAFTING",
      serviceDescription:
        "We possess the technical knowledge and technological resources, combined with our thorough research, to deliver the best structural drawings and solutions for each challenge. Specializing in generating structural CAD drawings for residential, commercial, and industrial buildings, we adhere to the standards dictated by project locations and building codes, ensuring optimal results in every project.",
      servicePoints: [
        "Foundation Layouts",
        "General arrangement drawings",
        "Structural assembly drawings",
        "Erection layouts",
        "Roof framing plans",
        "Steel plate fabrication drawings",
        "Connection Sketches",
        "Reinforcement Detailing",
      ],
      style: panelStyle,
    },
    {
      key: "6",
      id: "ArchitectureBIM",
      img: icon1,
      serviceTitle: "ARCHITECTURAL BIM SERVICES",
      serviceDescription:
        "We offer solutions tailored for dynamic environments where business and technology strategies intersect. Our expertise lies in creating detailed 3D visuals that validate building designs before construction begins. Our adept architectural drafters excel at identifying design issues, detecting clashes early, and minimizing costly rework, ensuring a smoother and more efficient construction process.",
      servicePoints: [
        "3D Building Visuals",
        "Design Validation",
        "Clash Detection",
        "Rework Minimization",
        "Efficient Construction Workflow",
      ],
      style: panelStyle,
    },
    {
      key: "7",
      id: "StructureBIM",
      img: icon7,
      serviceTitle: "STRUCTURAL BIM SERVICES",
      serviceDescription:
        "We specialize in providing comprehensive structural engineering BIM services tailored for residential, industrial, and commercial projects. Our team of BIM experts excels in developing detailed structural BIM models, drafting, and producing comprehensive shop drawings for precision and efficiency throughout the project lifecycle.",
      servicePoints: [
        "Structural BIM Models",
        "Structural Drafting",
        "Shop Drawings",
        "Lifecycle Project Management",
        "Precision Engineering",
      ],
      style: panelStyle,
    },
    {
      key: "8",
      id: "MepBim",
      img: icon4,
      serviceTitle: "MEP BIM SERVICES",
      serviceDescription:
        "We develop accurate MEP models that enable consultants, contractors, manufacturers, and fabricators to seamlessly manage on-site activities. Our services cover standalone and integrated BIM modeling, adhering to international standards for complex projects such as laboratories, hospitals, schools, universities, and industrial facilities.",
      servicePoints: [
        "HVAC Ducts and Mechanical Piping",
        "Fire Protection BIM Services",
        "Sanitary and Water Supply Systems",
        "Electrical BIM Modeling",
        "Piping Modeling",
      ],
      style: panelStyle,
    },
    // {
    //     id: "FacadeBim",
    //     img: img10,
    //     serviceTitle: "FACADE BIM SERVICES",
    //     serviceDescription: "We specialize in creating comprehensive 2D and 3D drawings, along with 3D to 5D BIM models, to enhance building data management, visualization, and BOQ calculations. Our facade BIM services encompass glazing, cladding, prefabricated metals, canopies, doors, windows, and skylights, meeting diverse project needs.",
    //     servicePoints: [
    //         "Glazing and Cladding",
    //         "Prefabricated Metals",
    //         "Canopies, Doors, and Windows",
    //         "Skylights",
    //         "BOQ Calculation"
    //     ]
    // },
    {
      key: "9",
      id: "Rendering",
      img: icon6,
      serviceTitle: "RENDERING SERVICES",
      serviceDescription:
        "At Structura Consultants, we elevate your vision with comprehensive 3D visualization and branding services. From architectural rendering to product modeling, we bring ideas to life with precision and creativity, crafting immersive experiences tailored to your unique needs.",
      servicePoints: [
        "3D Exterior Rendering",
        "3D Interior Renderings",
        "3D Animation/Walkthrough Services",
        "Site Plan 3D Rendering",
      ],
      style: panelStyle,
    },
  ];
  //   const cards=StackCards(panelStyle);

  return (
    <>
      {/* <div className="AnimatedStackCards">
                {StackCards.map((card, index) => (
                    <div key={index} className="accordion-item">
                        <img
                            src={card.img}
                            alt=""
                            className="accordion-image"
                            onClick={() => handleImageClick(index)}
                        />
                        <p className="accordion-text">{card.serviceTitle}</p>
                        <div className={`accordion-content ${activeKey === index ? 'show' : ''}`}>
                            {activeKey === index && (
                                <Collapse
                                    accordion
                                    activeKey={`${index}`}
                                    expandIconPosition={null} // Hide the default arrow
                                >
                                    <Panel header={card.serviceTitle} key={index}>
                                        <ul className="accordion-list">
                                            {card.servicePoints.map((point, pointIndex) => (
                                                <li key={pointIndex}>{point}</li>
                                            ))}
                                        </ul>
                                    </Panel>
                                </Collapse>
                            )}
                        </div>
                    </div>
                ))}

            </div> */}
      <div className="AnimatedStackCards">
        <Row gutter={[16, 16]}>
          {StackCards.map((card, index) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={12}
              key={index}
              data-aos-delay={index * 200}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Collapse
                // expandIconPosition="end"
                bordered={false}
                expandIcon={() => null} // Hides the default arrow icon
                className="stackCardCollapse"
                accordion
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
              >
                <Panel
                  header={
                    <div className="cardHeader">
                      <img src={card.img} alt={card.serviceTitle} width={50} />
                      <p className="serviceTitle">{card.serviceTitle}</p>
                    </div>
                  }
                  key={card.id}
                >
                  <p>{card.serviceDescription}</p>
                  <ul>
                    {card.servicePoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </Panel>
              </Collapse>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default AnimatedStackCards;
