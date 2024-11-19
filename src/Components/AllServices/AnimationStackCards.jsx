import React, { useEffect, useRef, useState } from "react";
import icon1 from "./Images/A-BIM.png";
import icon2 from "./Images/ACD.png";
import icon3 from "./Images/MEP_CAD.png";
import icon4 from "./Images/MEP_BIM.png";
import icon5 from "./Images/MEP.png";
import icon6 from "./Images/RS.png";
import icon7 from "./Images/S-BIM.png";
import icon8 from "./Images/SCD.png";
import icon9 from "./Images/structural.png";
import { Row, Col, Modal } from "antd";
import AOS from "aos";

const AnimatedStackCards = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, // Start animations slightly earlier
      once: false, // This allows animations to occur more than once
    });
  }, []);

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
      serviceTagline:
        "Designing resilient structures that stand the test of time and meet the highest standards of safety.",
      dataAosType: "fade-right",
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
      serviceTagline:
        "Efficient and integrated MEP systems for optimal comfort and performance.",
      dataAosType: "fade-left",
    },

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
      serviceTagline:
        "Transforming ideas into detailed drawings that bring projects to life.",
      dataAosType: "fade-right",
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
      serviceTagline:
        "Precision-driven MEP drawings for seamless construction management.",
      dataAosType: "fade-left",
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
      serviceTagline:
        "Accurate drafting solutions tailored to meet structural standards.",
      dataAosType: "fade-right",
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
      serviceTagline:
        "3D BIM solutions that streamline the design-to-construction process.",
      dataAosType: "fade-left",
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
      serviceTagline:
        "Comprehensive BIM models for precision and lifecycle management.",
      dataAosType: "fade-right",
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
      serviceTagline:
        "Integrated MEP models that simplify on-site coordination and installation.",
      dataAosType: "fade-left",
    },

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
      serviceTagline:
        "Immersive 3D visuals that bring your architectural vision to reality.",
      dataAosType: "fade-right",
    },
  ];
  const handleOpenModal = (card) => {
    setSelectedCard(card);
    setIsModalVisible(true);
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCard(null);
    AOS.refresh();
  };
  return (
    <>
      <div className="AnimatedStackCards">
        <Row gutter={[16, 16]}>
          {StackCards.map((card, index) => (
            <Col
              md={24}
              lg={12}
              key={index}
              data-aos-delay={index * 100}
              // data-aos="fade-right"
              data-aos={card.dataAosType}
              
              data-aos-duration="1000"
            >
              <div className="cardHeader" onClick={() => handleOpenModal(card)} >
                <img
                  src={card.img}
                  alt={card.serviceTitle}
                  width={50}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                />
                <div>
                  <p
                    className="serviceTitle"
                    data-aos="fade-left"
                    data-aos-duration="800"
                  >
                    {card.serviceTitle}
                  </p>
                  <p
                    className="serviceTagline"
                    data-aos="fade-left"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    {card.serviceTagline}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
        afterClose={() => {
          // Reset AOS elements when modal closes
          AOS.refresh();
        }}
      >
        {selectedCard && (
          <>
            <div className="serviceModal">
              <p className="serviceTitle">{selectedCard.serviceTitle}</p>

              <p>{selectedCard.serviceDescription}</p>
              <ul>
                {selectedCard.servicePoints.map((point, i) => (
                  <li
                    key={i}
                    // data-aos="fade-right"
                    // data-aos-duration="800"
                    // data-aos-delay={200 + i * 100}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};
export default AnimatedStackCards;
{
}
