import React, { useState } from "react";
import { images } from "./images";
import "swiper/css/swiper.css";
import Swiper from "react-id-swiper";
import "./HeroSlider.css";

const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

const HeroSlider = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      {/* 1 */}
      {
        images.map((ele, index) => (
          <div className="heroSlide" key={index}>
            <div
              className="slideImage"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
            >
              <img src={ele} alt="error" />
            </div>
            <div className="col-md-6 offset-md-3 my-auto text-center text-white content">
              <h1 className="textHeader"> Slide </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
                nobis sint ipsam illo atque quaerat, sed nostrum voluptates
                asperiores hic quidem laboriosam ducimus, molestiae dicta rerum
                necessitatibus in deserunt magni sapiente repellat, consectetur
                dolore placeat. Minima perspiciatis cupiditate quia in.
              </p>
            </div>
          </div>
        ))
      }
    </Swiper>
  );
};

export default HeroSlider;
