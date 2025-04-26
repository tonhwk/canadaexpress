import React from 'react';
import './App.css';


import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Destinos from "./components/Destinos"
import Servicios from "./components/Servicios"
import Testimonios from "./components/Testimonios"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"






function App() {
  return (
    <div className="app">
     <Navbar/>
     <HeroSection/>
     <Destinos/>
     <Servicios />
     <Testimonios />
     <Contacto />
     <Footer />

    </div>
  );
}

export default App;
