import React,{ useRef } from 'react'
import './Testimonials.css'
import User1 from '../../assets/user-1.png'
import User2 from '../../assets/user-2.png'
import User3 from '../../assets/user-3.png'
import User4 from '../../assets/user-4.png'
import BackIcon from '../../assets/back-icon.png'
import FrontIcon from '../../assets/next-icon.png'


const Testimonials = () => {

    const slider = useRef(null);
    let tx = 0

    const slideFrwd = () => {
        if(tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBkwd = () => {
        if(tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <>
            <div className="testimonials">
                <img className="back-btn" src={BackIcon} alt="NOPE" onClick={slideFrwd} />
                <img className="next-btn" src={FrontIcon} alt="NOPE" onClick={slideBkwd} />
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={User1} alt="No" />
                                    <div>
                                        <h3>Narendra Modi</h3>
                                        <span>Delhi,India</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>                                
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={User2} alt="No" />
                                    <div>
                                        <h3>Amit Shah</h3>
                                        <span>Delhi,India</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={User3} alt="No" />
                                    <div>
                                        <h3>Yogi Adityanath</h3>
                                        <span>Delhi,India</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={User4} alt="No" />
                                    <div>
                                        <h3>Owesi</h3>
                                        <span>Delhi,India</span>
                                    </div>
                                </div>
                                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}   

export default Testimonials
