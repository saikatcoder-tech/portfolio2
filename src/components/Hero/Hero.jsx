import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img1.svg'
import {Link} from 'react-scroll'
import resumePDF from '../../assets/SB_resume.pdf';

const Hero = () => {
  return (


    <div id='home' className='hero'>

      <div className="hero-right-mob"><img src={profile_img} alt="" /></div> 
        
       <div className="hero-left"> 
        <h1><span>Saikat Biswas,</span></h1>
        <p>I'm Frontend Developer based in Kolkata, <br /> focused on creating clean, responsive websites. </p>

        <div className="hero-action">
            <div className="hero-connect"><Link to="contact" spy={true} smooth={true} offset={0} duration={500}> Connect with me </Link></div>
            
            <a href={resumePDF} download className="text-resume"><div className="hero-resume">My resume</div></a>
        </div>
        </div>
        <div className="hero-right"><img src={profile_img} alt="" /></div> 
    </div>


  )
}

export default Hero