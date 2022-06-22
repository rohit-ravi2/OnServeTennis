import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/drone.mp4' autoPlay loop muted />
      <p>Join us this summer!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register for our camps
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
