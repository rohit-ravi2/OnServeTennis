import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider.js'
import { SliderData } from '../SliderData.js';
export default function Facilities() {
  return (
    <>
    <h1 id="facilites-title">Our Facilities</h1>
   
    <div className="wrapperFacilities">
    <ImageSlider slides={SliderData} />
   
      </div>  
       
  </>



  );
}



