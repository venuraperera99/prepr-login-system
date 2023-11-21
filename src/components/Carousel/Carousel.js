// src/components/CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import splash1 from "../../images/Splash_1.png";
import splash2 from "../../images/Splash_2.png";
import splash3 from "../../images/Splash_3.png";
import splash4 from "../../images/Splash_4.png";

const CarouselComponent = () => {
  return (
    <div className="slideshow-container">
      <Carousel showArrows={true} showStatus={false} showIndicators={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src={splash1} alt="Slide 1" />
        </div>
        <div>
          <img src={splash2} alt="Slide 2" />
        </div>
        <div>
          <img src={splash3} alt="Slide 3" />
        </div>
        <div>
          <img src={splash4} alt="Slide 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
