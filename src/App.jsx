import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeHero from './Components/HomeHero/HomeHero';
import "./App.css"
import "./index.css"
import Navigation from './Components/Navigation/Navigation';
import StructuraHome from './Components/HomeDisplay/StructuraHome';
// import Footer from './Components/Footer/Footer';
function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<StructuraHome />} />
      </Routes>
    {/* <Footer/> */}

    </Router>
  );
}

export default App;


