import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';



function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>BOOK AN APPOINTMENT</h1>
      
      <div className='hero-btns'>
        <Button
          to="https://squareup.com/us/en"
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Book Now
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
