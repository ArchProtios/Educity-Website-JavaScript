import React from 'react'
import './Programs.css'
import Prog1 from '../../assets/program-1.png'
import Prog2 from '../../assets/program-2.png'
import Prog3 from '../../assets/program-3.png'
import ProgIcon1 from '../../assets/prog-icon-1.png'
import ProgIcon2 from '../../assets/prog-icon-2.png'
import ProgIcon3 from '../../assets/prog-icon-3.png'

const Programs = () => {
    return (
        <>
            <div className="programs">
                <div className="program">
                    <img src={Prog1} alt="Notting Found" />
                    <div className="caption">
                        <img src={ProgIcon1} alt="Nope" />
                        <p>Graduation</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Prog2} alt="Notting Found" />
                    <div className="caption">
                        <img src={ProgIcon2} alt="Nope" />
                        <p>Master's</p>
                    </div>
                </div>
                <div className="program">
                    <img src={Prog3} alt="Notting Found" />
                    <div className="caption">
                        <img src={ProgIcon3} alt="Nope" />
                        <p>Post Graduation</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs
