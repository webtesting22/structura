import React, { useEffect, useState } from 'react'
import { Col, Row, Tooltip } from 'antd'
import "./NewAbout.css"
import ShilpBungalowsImage1 from "/images/ProjectsImages/Banglows/SHILP BUNGLOWS/01.jpg"
import image1 from "/images/ProjectsImages/HighRiseBuilding/MajesticSquare/05.jpg"
import image2 from "/images/ProjectsImages/HighRiseBuilding/Nirmansatva/01.jpg"
const images = [
  image1,
  image2,
  // "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&w=2940&q=80&auto=format&fit=crop",
];
const NewAbout = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <>

      <section id='AboutUsNewContainer'>
        <div className='hoverableTags'>
          <h1>
            <Tooltip title="We bring creativity and advanced techniques to every structural and drafting design project.">
              <span>We create Innovation</span>
            </Tooltip>
            <Tooltip title="Our meticulous approach ensures every detail aligns perfectly with your vision and needs.">
              <span>We ensure Precision</span>
            </Tooltip>
            <Tooltip title="We deliver smart, cost-effective solutions that maximize value without compromising quality.">
              <span>We deliver Efficiency</span>
            </Tooltip>
            <Tooltip title="We design with an eco-conscious mindset, balancing functionality and environmental responsibility.">
              <span>We promote Sustainability</span>
            </Tooltip>
            <Tooltip title="Our team works closely with clients, ensuring seamless integration of ideas into designs.">
              <span>We foster Collaboration</span>
            </Tooltip>
          </h1>
        </div>
        <div className='AdjustHeightContainer'>
          <div className="AboutUsImageContainer">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={`fade-image ${index === currentImageIndex ? "active" : ""
                  }`}
              />
            ))}
          </div>
        </div>
        <div className='BorderContainer'>
          <div className='AboutUsTextContent'>
            <h2 style={{ textTransform: "uppercase", color: "rgb(188,119,66)" }}>Preserving Legacies, Designing the Future with Excellence</h2>
            <br />
            <p><b>Structura Consultants</b>, a trusted name in <b>structural design and drafting</b>, brings over <b>eight years of expertise</b> to every project. As a proud venture of the esteemed Nirman Group, we specialize in creating innovative <b>designs for residential, commercial, industrial, and heritage</b> properties. Our services include <b>CAD drafting, MEP design, BIM modeling, and the restoration</b> of timeless structures. With a commitment to quality, integrity, and timely delivery, we collaborate closely with architects, engineers, and contractors to deliver exceptional results that stand the test of time.</p>
          </div>
        </div>
      </section>



      {/* <Row className='About-Row row1'>
        <Col lg={10} md={24} >
          <div className='About-img' data-aos-duration="1000" data-aos="fade-right" >
            <img src="/images/ProjectsImages/HighRiseBuilding/MajesticSquare/05.jpg" />
          </div>
        </Col>
        <Col lg={1} md={0} />
        <Col lg={13} md={24} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="200">
          <div className='About-content'>
            <p>We focus on designing and restoring the timeless values of buildings.</p><br></br>
            <p>Structura Consultants, a distinguished privately-owned firm with an
              eight-year legacy, excels in design and drafting services. As a venture
              of the renowned Nirman Group—Gujarat's leading developer since 1976,
              headed by Prashant Shah and Chetan Shah—Structura Consultants has
              firmly established its reputation in the industry.</p><br />
            <p>We provide professional consulting services for a wide range of
              properties, including residential, commercial, industrial, institutional, and
              public. Our expertise lies in structural and earth-retaining design, as well
              as the repair and conservation of heritage structures. We are dedicated
              to restoring these edifices to their original glory, ensuring their historical
              significance is preserved for future generations.</p>

          </div>
        </Col>

      </Row>

      <Row className='About-Row row2'>
        <Col lg={13} md={24} data-aos-duration="1000" data-aos="fade-right">
          <div className='About-content'>
            <p>Structura Consultants is a premier outsourcing company specializing in CAD drafting services. We are a dedicated and
              professional team committed to excellence in every project. Our guiding principles—superior quality, unwavering integrity, and
              timely delivery—are deeply embedded in our services, earning us a distinguished reputation and fostering long-lasting client
              relationships.</p>
            <p><br />
              Our flexible working strategy enables us to build strong, candid relationships with our clients. We take immense pride in our work,
              approaching each task with a dynamic perspective and a problem-solving mindset. Our commitment is to deliver top-quality
              results while continuously expanding our services to meet the ever-growing demands of the industry.
            </p><br />
            <p>
              Our team of expert designers and drafters collaborates closely with architects, engineers, contractors, and design professionals
              to provide high-quality drafting work and production-ready 2D CAD drawings. In addition to drafting and drawings, we offer
              exceptional MEP design, interior design, building information modeling (BIM), and rendering services. Utilizing industry
              standard tools, we produce excellent 3D visualizations that are both cost-effective and reliable. Our team leaves no stone unturned
              in leveraging our in-house capabilities to achieve excellence in every project.
            </p>

          </div>
        </Col>
        <Col lg={1} md={0} />
        <Col lg={10} md={24} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="200">
          <div className='About-img'>
            <img src="/images/ProjectsImages/HighRiseBuilding/Nirmansatva/01.jpg" />
          </div>
        </Col>
      </Row>
      <Row className='About-Row row3'>
        <Col lg={10} md={24} data-aos-duration="1000" data-aos="fade-right" >
          <div className='About-img'>
            <img src="/images/ProjectsImages/HighRiseBuilding/BeaufortPark/03.jpg" />
          </div>
        </Col>
        <Col lg={1} />
        <Col lg={13} md={24} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="200">
          <div className='About-content'>
            <h1 className='bigHeading'>Vision</h1>
            <br></br>
            <p>Our vision is to be the premier outsourcing company for CAD drafting and design
              services, recognized for our commitment to quality, integrity, and timely delivery.
              We aim to build lasting relationships with our clients by consistently providing
              high-quality, cost-effective solutions that meet the evolving demands of the
              industry. Through continuous innovation and leveraging the best industry
              standard tools, we strive to deliver exceptional 3D visualizations and
              comprehensive design services, ensuring excellence in every project.</p>
          </div>
        </Col>
      </Row> */}
    </>
  )
}

export default NewAbout
