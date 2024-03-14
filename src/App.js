import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <div className="container">
                <Title title= "What We Offer" subTitle= "OUR PROGRAM" />
                <Programs />
                <About />
                <Title title= "Gallery" subTitle="Campus photo" />
                <Campus />
                <Title title= "Testimonials" subTitle="What Student Says" />
                <Testimonials />
                <Title title= "Contact Us" subTitle="Get in touch" />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App
