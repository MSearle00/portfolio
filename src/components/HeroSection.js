import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='heroContainer'>
      <video src={process.env.PUBLIC_URL + '/images/pinkFlowers.mp4'} autoPlay loop muted />
      <div className='infoContainer'>
      <h1>Maria Searle</h1>
      <p>Junior Developer ||  Sheffield, UK</p>
      <div className='infoButtons'>
      <Link to="/aboutMe">
        <Button
          className='buttons'
          buttonStyle='buttonOutlined'
          buttonSize='buttonLarge'
          buttonPage='buttonAboutMe'
        >
          ABOUT ME
        </Button>
        </Link>
        <Link to="/projects">
        <Button
          className='buttons'
          buttonStyle='buttonPrimary'
          buttonSize='buttonLarge'
          buttonPage='buttonProjects'
        >
          VIEW MY PROJECTS <i className='fas fa-project-diagram'></i>
        </Button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
