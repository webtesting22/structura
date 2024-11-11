import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHero from './Components/HomeHero/HomeHero';
import "./App.css"
import "./index.css"
import Navigation from './Components/Navigation/Navigation';
import StructuraHome from './Components/HomeDisplay/StructuraHome';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import StructuraCommonHero from './Components/AllPageCommonHero/StructuraCommonHero';
import BottomToTopBtn from './Components/BottomTotopBtn/BottomTotopBtn';
import AllProjects from './Components/AllProjects/AllProjects';
import ClientsAndDirectors from './Components/ClientsAndDirectors/ClientsAndDirectors';
import AllServices from './Components/AllServices/AllServices';
import Contact from './Components/Contact/Contact';
function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<StructuraHome />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/StructuraCommonHero" element={<StructuraCommonHero />} />
        <Route exact path="/Projects" element={<AllProjects />} />
        <Route exact path="/clientsanddirectors" element={<ClientsAndDirectors />} />
        <Route exact path="/Services" element={<AllServices />} />
        <Route exact path="/Contact" element={<Contact/>}/>
      </Routes>
      <BottomToTopBtn />
      <Footer />

    </Router>
  );
}

export default App;


