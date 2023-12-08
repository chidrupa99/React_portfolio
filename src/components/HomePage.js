import React from 'react';
import Banner from './Banner';
import Projects from './Projects';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Banner />
            <Projects />
            <WorkExperience />
            <Testimonials />
      </div>
    );
}

export default HomePage;