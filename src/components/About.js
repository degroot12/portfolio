import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope, FaArrowLeft} from 'react-icons/fa'

function About() {
    return (
        <div className='about-page'>
        <div>
         <a className='back' href='/'><FaArrowLeft className='font-awesome'/>  Back</a>
            <h5>About</h5>
            <p>
                I'm a Dutch full-stack developer who enjoys building projects.
            </p>

            <h5>Contact</h5>
            <div className='info-links'>
      <div className='info-link'>
      <a href='https://www.linkedin.com/in/thomas-degroot/'><FaLinkedin className='font-awesome'/>Linkedin</a>
      </div>
      <div className='info-link'>
      <a href='https://github.com/degroot12'><FaGithub className='font-awesome'/>GitHub</a>
      </div>
      <div className='info-link'>
      <a href='me@thomasdegroot.dev'><FaRegEnvelope className='font-awesome'/>Mail</a>
      </div>
         
          
          
      </div>
      </div>
        </div>
    )
}

export default About