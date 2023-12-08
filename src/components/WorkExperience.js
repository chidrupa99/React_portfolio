import React from 'react';
import './componentStyles/WorkExperience.css';
import WorkExperienceImg from './Assets/WorkExperienceImg.png';

const WorkExperience = () => {
    return(
    <div className='WorkExperience'>
        <h1>Work Experience</h1>
        <img src={WorkExperienceImg} className="WorkExperience--Img" alt="Work Experience Image" />
    </div>
    )
}

export default WorkExperience;