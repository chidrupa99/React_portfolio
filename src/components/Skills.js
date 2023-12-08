import React from 'react';
import './componentStyles/Skills.css';

const Skills = () => {
    return(
    <div className='Skills'>
        <h1>💼 Skills</h1>
        <div className='skills--container'>
            <div className='skills--List'>
                <div>UX Research</div>
                    <ul>
                        <li>Storyboarding</li>
                        <li>Journey Mapping</li>
                        <li>Survey Design</li>
                        <li>Heuristic Evaluation</li>
                        <li>Usability Testing</li>
                        <li>Content Management System</li>
                        <li>Search Engine Optimisation</li>
                        <li>Learning Management System</li>
                        <li>Contextual Inquiry</li>
                        <li>User Interviews</li>
                        <li>Focus Group Moderation</li>
                    </ul>
            </div>
            <div className='skills--List'>
                <div>UX Design</div>
                <ul>
                    <li>Interaction Design</li>
                    <li>Graphic Design</li>
                    <li>Content Design</li>
                    <li>Visual Design</li>
                    <li>Prototyping</li>
                    <li>Wire-framing</li>
                    <li>Design Systems</li>
                    <li>Illustration</li>
                    <li>Colour Theory</li>
                    <li>Typography</li>
                    <li>Responsive Web Design</li>
                </ul>
            </div>
            <div className='skills--List'>
                <div>Development</div>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React JS</li>
                    <li>Angular JS</li>
                    <li>Node JS</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>Data Visualisation</li>
                </ul>
            </div>
            
        </div>
    </div>
    )
}

export default Skills;