import React from 'react';
import './componentStyles/Footer.css';
import Behance from './Assets/Behance.png';
import Linkedin from './Assets/Linkedin.png';
import Email from './Assets/Email.png';
import Medium from './Assets/Medium.png';

const Footer = () => {
    return(
    <div className='Footer'>
        <div>
            <a href="https://www.behance.net/chidrupmamunoo" target="_blank"><img className="Behance" src={Behance} alt=""/></a>
            <a href="https://www.linkedin.com/in/chidrupa-mamunooru-053a04172/" target="_blank"><img className="Linkedin" src={Linkedin} alt=""/></a>
            <a href="mailto:mchidrupa01@gmail.com" target="_blank"><img className="Email" src={Email} alt=""/></a>
            <a href="https://medium.com/@mchidrupa" target="_blank"><img className="Medium" src={Medium} alt=""/></a>
        </div>
        <div className='copyright'>© Designed and developed by Chidrupa Mamunooru</div>
    </div>
    )
}

export default Footer;