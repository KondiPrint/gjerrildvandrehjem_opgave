import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="bg-fontFarve">
        <h2>Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="../../../public/assets/images/konferencemedkant.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/images/madmedkant.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}