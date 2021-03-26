import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'

function Home() {
  return (
    <div className='homepage'>
      <div className='title'>
        <h1>Thomas de Groot</h1>
      </div>
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
  );
}

export default Home;
