import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import Logo from '../../assets/logo.png'
import { Link, ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check initial scroll position
            setSticky(window.scrollY > 50);
        };

        // Add event listener
        window.addEventListener('scroll', handleScroll);

    }, []);

return (
    <> 
        <nav className = {`container ${sticky? 'dark-nav' : ''}`}>
            <img src={Logo} alt="no img found" className='logo' />
            <ul>
                <li><Link to= "hero">Home</Link></li>
                <li><Link to= "program">Program</Link></li>
                <li><Link to= "about">About Us</Link></li>
                <li><Link to= "campus">Campus</Link></li>
                <li><Link to= "testimonials">Testimonials</Link></li>
                <li><button className="btn"><Link to= "contact">Contact Us</Link></button></li>
            </ul>
        </nav>
    </>
)
}

export default Navbar
