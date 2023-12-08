import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './componentStyles/Testimonials.css';
import { Carousel } from "react-responsive-carousel";
import Dora_img from './Assets/Dora_img.png';
import Susannah_img from './Assets/Susannah_img.png';
import Shrinidhi_img from './Assets/Shrinidhi_img.png';


export default class Testimonials extends Component {
  render() {
    return (
        <div className='Testimonials'>
             <h1>Testimonials
             </h1>
             <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={false}
        interval={6100}
      >
        <div>
        <img className='Testimonial_img' src={Dora_img} />
        
          
          <div className="myCarousel">
          <div className='profile_content'>
        
        <div><h3>Dora Lohas</h3>
        <h4>Founder, CEO of Ourdate</h4></div>
        </div>
            <p>
            Chid is a problem solver, a doer, and willing to take on challenges. She was able to work alone or with our team really well. She is skillful in research, and wireframing, and is able to showcase different designs fast. It's rare to see a UX designer be able to put ideas to reality(the design) so effectively. I highly recommend working with Chid!
            </p>
          </div>
        </div>

        <div><img className='Testimonial_img' src={Susannah_img} />
        
          
          <div className="myCarousel">
          <div className='profile_content'>
        
        <div><h3>Susannah Dhamdhere</h3>
        <h4>Founder, Lassi and Spice</h4></div>
        </div>
            <p>
            This past few months I've had the immense pleasure of working with Chidrupa Mamunooru, a grad student in UX Design at ASU. Chidrupa reached out to ask if she could work on a redesign of the Lassi & Spice website for a class project, and I was more than happy to oblige! Chidrupa is a talented web designer, and worked with skill and professionalism throughout the project. And, if you check out her portfolio here https://lnkd.in/g2Nfr3dj, the result is incredible! It's a major upgrade in the look and functionality of our website that I can't wait to implement. 
            </p>
          </div>
        </div>

        <div><img className='Testimonial_img' src={Shrinidhi_img} />
            
          <div className="myCarousel">
          <div className='profile_content'>
            
            <div><h3>Shrinidhi Patil</h3>
            <h4>Lead Software Engineer, Deloitte</h4></div>
            </div>
            <p>
            I am delighted to write a LinkedIn recommendation for Chidrupa, who I had the pleasure of working with as a fresher UI developer. She is an exceptional talent who truly impressed me with their skills and work ethic Throughout her time on our team, Chidrupa consistently demonstrated a remarkable aptitude for UI design and development. Her ability to grasp complex concepts and apply them to create intuitive and user-friendly interfaces was truly commendable. <br></br>She was not just a quick learner but also had a keen eye for detail, ensuring that every project they worked on met the highest quality standards.I have no doubt that Chidrupa will continue to excel in their career as a UX developer and be a valuable asset to any team they join. I highly recommend her for any UX-related role and have no doubt that she will make a positive impact wherever she goes.</p>
          </div>
        </div>
      </Carousel>
        </div>
    );
  }
}