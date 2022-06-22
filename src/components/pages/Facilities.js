import React from 'react';
import '../../App.css';
import ImageSlider from '../ImageSlider.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
export default function Facilities() {
  return (
    <>
    <h1 id="facilites-title">Our Facilities</h1>
   
    <Carousel>
                <div>
                    <img src="/images/image2.jpg" className="sliderimg" height="300px" width="200px"/>
                </div>
                <div>
                    <img src="/images/image3.jpg" className="sliderimg" height="300px" width="200px"/>
                </div>
                <div>
                    <img src="/images/image4.jpg" className="sliderimg" height="300px" width="200px"/>
                </div>
            </Carousel>
       
  </>



  );
}
