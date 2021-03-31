import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

function Contact() {
    return (
        <div>
            <h1>Contact page</h1>
            <div className='info-links'>
      <div className='info-link'>
      <a href='https://www.linkedin.com/in/thomas-degroot/'><FaLinkedin />Linkedin</a>
      </div>
      <div className='info-link'>
      <a href='https://github.com/degroot12'><FaGithub />GitHub</a>
      </div>
      <div className='info-link'>
      <a href='degroot12@gmail.com'><FaRegEnvelope />Mail</a>
      </div>
         
          
          
      </div>
        </div>
    )
}

export default Contact