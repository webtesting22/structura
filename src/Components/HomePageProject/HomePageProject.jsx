import React ,{useState }from "react";
import "./HomePageProject.css"
import { Row, Col } from "antd";
const HomePageProject = () => {
    const [activeTab, setActiveTab] = useState('Residential');

    const ResidentialProjectsCardData = [
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Residencial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Residencial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Residencial Project Name"
        },

    ]
    const CommertialProjectsCardData = [
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },
        {
            cardImage: "https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            cardCategory: "Commercial & Residential",
            cardTitle: "Commercial Project Name"
        },

    ]
    return (
        <>
            <section id="HomePageprojectsSection">
                <div className="sectionHeaderPart">
                    <div>
                        <div className="Smalltagline"><h4><div></div>FEATURED PROJECTS</h4></div>
                    </div>
                    <div className="headingTabsSection">
                        <div>
                            <h1 className="sectionHeading">We Build the Projects</h1>
                        </div>
                        <div className="categoryProjectsBtn">
                            <button className={activeTab === 'Residential' ? 'activeBtn' : 'nonActiveBtn'}  onClick={() => setActiveTab('Residential')}>Residential</button>
                            <button className={activeTab === 'Commercial' ? 'activeBtn' : 'nonActiveBtn'} onClick={() => setActiveTab('Commercial')}>Commercial</button>
                        </div>
                    </div>
                </div>

                <div className="tabsContentcards">
                    <div className="cardsContent">
                        <Row>
                            {(activeTab === 'Residential' ? ResidentialProjectsCardData : CommertialProjectsCardData).map((item, index) => (
                                <Col lg={8} md={8} key={index}>
                                    <div className="projectsCardDesigns" data-aos="fade-up" data-aos-delay={`${index * 300}`} data-aos-duration="1000">
                                        <div className="cardImage">
                                            <img src={item.cardImage} alt="" />
                                        </div>
                                        <div className="cardContent">
                                            <span className="Category">{item.cardCategory}</span>
                                            <h2>{item.cardTitle}</h2>
                                            <div className="arrowIcon">
                                                <i className='bx bx-right-arrow-alt'></i> {/* Note: Use className instead of class for React */}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </div>
                </div>
            </section>

        </>
    )
}
export default HomePageProject