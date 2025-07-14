import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile1.svg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a 2025 B.Tech graduate in Electronics and Communication Engineering. 
                        I enjoy building simple and responsive frontend websites. </p>
                    <p>I'm learning Java development and working on real-world projects to grow my skills.
                       Passionate about clean code, continuous learning, and real-world problem solving. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skills-text"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skills-text"><p>JavaScript</p><hr style={{width:"40%"}}/></div>
                    <div className="about-skills-text"><p>ReactJS</p><hr style={{width:"30%"}}/></div>
                    <div className="about-skills-text"><p>Java</p><hr style={{width:"45%"}}/></div>
                    <div className="about-skills-text"><p>Python</p><hr style={{width:"40%"}}/></div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS  OF  LEARNING</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>Open to</h1>
                <p>FREELANCE  PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS  COMPLETED</p>
            </div>

        </div>
    </div>
  )
}

export default About