import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './SliderOfBurger.css'
import BurgerAbout from '../img/burger-about.jpg'
import TwoOfBurgerAbout from '../img/burger-about-2.png'
import ThreeOfBurgerAbout from '../img/burger-about-3.png'

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function MultipleItems() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    rtl: true
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="About-img">
          <img src={BurgerAbout} alt="" />
        </div>
        <div className="About-img-Two">
          <img src={TwoOfBurgerAbout} alt="Burger About" />
        </div>
        <div className="About-img-Three">
          <img src={ThreeOfBurgerAbout} alt="Burger About" />
        </div>
        <div className="About-img">
          <img src={BurgerAbout} alt="Burger About" />
        </div>
        <div className="About-img-Two">
          <img src={TwoOfBurgerAbout} alt="Burger About" />
        </div>
        <div className="About-img-Three">
          <img src={ThreeOfBurgerAbout} alt="Burger About" />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
