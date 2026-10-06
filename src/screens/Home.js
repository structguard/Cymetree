import React from 'react'
import Header from './Header'
import WhatWeDo from './WhatWeDo'
import About from './About'
import Landingscreen from './Landingscreen'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <div>

            {/* <Header /> */}

            <section id="Landingscreen">
                <Landingscreen />
            </section>

            <section id="About">
                <About />
            </section>

            <section id="whatwedo">
                <WhatWeDo />
            </section>

            <section id="Services">
                <Services />
            </section>


            <section id="Contact">
                <Contact />

            </section>

            {/* <Footer /> */}

        </div>
    )
}

export default Home