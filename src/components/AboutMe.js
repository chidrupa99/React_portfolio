import React from 'react';
import './componentStyles/AboutMe.css';
import Chidrupa_img from './Assets/Chidrupa_img.png';

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <h1> About me </h1>
            <div className='About_content_div'>
                <div ><img src={Chidrupa_img}/></div>
                <div className='About_content'>
                    <p>Hi there! I'm Chidrupa Mamunooru, a User Experience graduate student at Arizona State University with a 4.33 GPA. With experience as a UX Design intern at Ourdate, a technical writer at Arizona State University, and a front-end developer at Deloitte Consulting US India, I have a diverse skill set in research, user flows, storyboarding, wireframing, prototyping, and visual design using Adobe XD, Figma, Adobe Illustrator, Sketch, and Adobe Photoshop. </p>
                    <p>During my internship, I primarily focused on UX design, user flow design, persona development, and Usability testing, collaborating with the Development team to create feasible designs and facilitate Design Handoff. As a front-end developer at Deloitte, I was responsible for designing Mobile/Tablet/Desktop specific designs in a fast-paced iterative design process, and I received a spot award for my contributions during a critical phase.</p>
                    <p>Apart from my professional experience, I am a creative thinker, go-getter, passionate content writer, avid reader, history buff, and travel enthusiast. I am always eager to learn more about the world around me and thrive on discovering the why, what, when, and how of everything.</p>
                    <p>As a highly passionate and detail-oriented individual, I am enthusiastic about creating innovative and intuitive designs. Currently seeking UX internships for Summer 2023, I am excited about facing new challenges and upskilling. If you have any project ideas or would like to get in touch, please feel free to email me at <a href="mailto:mchidrupa01@gmail.com" target="_blank">mchidrupa01@gmail.com.</a></p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;