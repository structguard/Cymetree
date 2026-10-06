// import React from 'react'

// const Nav = () => {
//   return (
//     <div>Navss</div>
//   )
// }

// export default Nav


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Header from '../screens/Header';
import Landingscreen from '../screens/Landingscreen';
import WhatWeDo from '../screens/WhatWeDo';
import Services from '../screens/Services';
import Contact from '../screens/Contact';
import Footer from '../screens/Footer';
import BuildingConstruction from '../screens/BuildingConstruction';
import HealthcareInfrastructure from '../screens/HealthcareInfrastructure';
import IndustrialInfrastructure from '../screens/IndustrialInfrastructure';
import TransportandCivil from '../screens/TransportandCivil';
import DigitalInfrastructure from '../screens/DigitalInfrastructure';
import SustainableInfrastructure from '../screens/SustainableInfrastructure';







const Nav = () => {

    return (

        <Routes>


            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Landingscreen />} />
            <Route path="About" element={<About />} />
            <Route path="WhatWeDo" element={<WhatWeDo />} />
            <Route path="Services" element={<Services />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Footer" element={<Footer />} />
            <Route path="Header" element={<Header />} />

            <Route
                path="/building-construction-development"
                element={<BuildingConstruction />}
            />

            <Route
                path="/healthcare-infrastructure"
                element={<HealthcareInfrastructure />}
            />

            <Route
                path="/industrial-infrastructure"
                element={<IndustrialInfrastructure />}
            />

            <Route
                path="/transport-civil-infrastructure"
                element={<TransportandCivil />}
            />

            <Route
                path="/digital-industrial-infrastructure"
                element={<DigitalInfrastructure />}
            />

            <Route
                path="/green-sustainable-infrastructure"
                element={<SustainableInfrastructure />}
            />

        </Routes>


    );
};

export default Nav;