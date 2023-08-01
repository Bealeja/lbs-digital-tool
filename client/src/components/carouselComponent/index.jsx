import "./index.scss";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image from "../../assets/child.png";

const DemoCarousel = () => {
  return (
    <Carousel infiniteLoop={true} render>
      <div>
        <img src={image} alt="child" />
      </div>
      <div>
        <img src={image} alt="child" />
      </div>
      <div>
        <img src={image} alt="child" />
      </div>
    </Carousel>
  );
};

export default DemoCarousel;
