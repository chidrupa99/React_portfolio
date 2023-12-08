import React, { useState } from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import './componentStyles/Navbar.css';

const Navbar = () => {
    const [displayHome, setDisplayHome] = useState(true);
    const [displayAbout, setDisplayAbout] = useState(false);

    const handleDisplayHome = () => {
        setDisplayHome(true);
        setDisplayAbout(false);
    };

    const handleDisplayAbout = () => {
        setDisplayHome(false);
        setDisplayAbout(true);
    };

    return (
        <div>
            <div className='Navbar'>
                <a onClick={handleDisplayHome}>
                    <svg className="logo"  viewBox="0 0 121 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7144 27.1861C12.7651 30.5663 40.7749 37.5145 51.7293 33.9464C65.0594 29.6045 74.2876 21.5524 74.2876 15.9187C74.2876 8.19671 66.7255 5.79415 54.8054 11.4118C42.5011 17.2105 24.0443 44.252 38.3996 76.7623C50.6482 104.502 74.6296 86.9029 80.4401 76.7623C81.7313 74.5088 84.9516 69.1005 86.5922 70.0019C88.2328 70.9033 82.8326 84.6494 81.4654 90.283C83.1744 85.025 89.8734 72.4807 90.6937 73.3821C91.514 74.2835 88.9849 85.7761 88.6431 90.283C89.3267 86.9028 93.1546 78.1144 94.7952 79.0157C96.4358 79.9171 94.5305 88.1086 93.8469 90.7376C94.5305 89.2353 97.051 83.748 97.8713 84.6494C98.6916 85.5508 98.6662 88.8927 99.2686 89.1563H110.714" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                </a>
                <ul>
                    <li><a href="https://www.behance.net/chidrupmamunoo" target="_blank">Projects</a></li>
                    <li><a onClick={handleDisplayAbout}>About Me</a></li>
                    <li><a href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:3a0f45a0-4e49-3100-b7b5-3107ec411ab6" target="_blank">Resume</a></li>
                </ul>
            </div>
           
            <div className="pages">
                <div className={`Home ${displayHome ? 'true' : 'false'}`}>
                    <HomePage />
                </div>
                <div className={`AboutMe ${displayAbout ? 'true' : 'false'}`}>
                    <AboutMe />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
