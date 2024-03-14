import React from 'react'
import '../Hero/Hero.css'
import Farrow from '../../assets/front-icon.png'

const Hero = () => {
    return (
        <>
            <div className="hero  container">
                <div className="hero-text">
                    <h1>We ensure better education for a better world</h1>
                    <p>Our cutting-edge curriculum is designed to empower students with the knowledge , skills <br /> and experinces needed to excel in the dynamic feild.</p>
                    <button className="btn">Explore More<img src={Farrow} alt="No Image Found" className='image'/></button>
                </div>
            </div>
        </>
    )
}

export default Hero
