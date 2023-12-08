import React from 'react';
import './componentStyles/Banner.css';
import BannerImage from './Assets/BannerImage.png';

const Banner = () => {
    return(
    <div className='Banner'>
        <div className='Banner--content'>
            <h1>Hi, I am Chidrupa!✌🏼</h1>
            <h2>A <span>UX / Product Designer</span> with a Developer’s lens! </h2>
            <h3>With a background in UX Research, Design, Front-End Development, and Content Writing, I have a holistic approach towards Product design and Problem-solving.</h3>
            <h3><span>3+ years of Work Experience | Worked at Deloitte, Ourdate, ASU</span></h3>
        </div>
        <img src={BannerImage} className="Banner--image" alt="memoji" />
    </div>
    )
}

export default Banner;