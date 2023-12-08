import React from 'react';
import RapidSMS from './Assets/RapidSMS.png'
import Jerry from './Assets/Jerry.png'
import Ourdate from './Assets/Ourdate.png'
import LassiAndSpice from './Assets/LassiAndSpice.png'
import Travia from './Assets/Travia.png'
import Inflection from './Assets/Inflection.png'
import './componentStyles/Projects.css';

const Projects = () => {
    return(
        <div className='Projects'>
            <a href="https://www.behance.net/gallery/186284487/RapidSMS-A-Redesign-of-RRMS-Burglary-Alarm-System" target="_blank"><img class="item1 large" src={RapidSMS}/></a>
            <a href="https://www.behance.net/gallery/178967057/Jerry-The-Jr-Researcher-Phase-1" target="_blank"><img class="item2 small" src={Jerry}/></a>
            <a href="https://www.behance.net/gallery/178109913/Ourdate-Case-Study-Internship" target="_blank"><img class="item3 small" src={Ourdate}/></a>
            <a href="https://www.behance.net/gallery/162215037/Lassi-Spice-A-Redesign-project" target="_blank"><img class="item4 large" src={LassiAndSpice}/></a>
            <a href="https://www.behance.net/gallery/159697011/TRAVIA-A-Travel-Application-Case-Study" target="_blank"><img class="item5 large" src={Travia}/></a>
            <a href="https://medium.com/@mchidrupa" target="_blank"><img class="item6 small" src={Inflection}/></a>
        </div>


    )
}
export default Projects;