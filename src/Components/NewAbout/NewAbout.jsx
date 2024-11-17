import React from 'react'
import { Col, Row } from 'antd'
import "./NewAbout.css"
import ShilpBungalowsImage1 from "/images/ProjectsImages/Banglows/SHILP BUNGLOWS/01.jpg"

const NewAbout = () => {
  return (
    <>
      <Row className='About-Row row1'>
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
      </Row>
    </>
  )
}

export default NewAbout
