import Navbar from '../components/Navbar';
import './Food.css'
import BurgerAbout from '../img/burger-about.jpg'
import TwoOfBurgerAbout from '../img/burger-about-2.png'
import ThreeOfBurgerAbout from '../img/burger-about-3.png'
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderOfDrink from '../components/SliderOfDrink';
import Footers from '../components/Footer';

export default function Food () {
const [nav1, setNav1] = useState(null);
const [nav2, setNav2] = useState(null);
let sliderRef1 = useRef(null);
let sliderRef2 = useRef(null);

useEffect(() => {
  setNav1(sliderRef1);
  setNav2(sliderRef2);
}, []);

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#ffc526", borderRadius: 20 + "px"}}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#ffc526", borderRadius: 20 + "px"}}
      onClick={onClick}
    />
  );
}


  return(
    <main>
      <Navbar/>
        <div className="food-container">
          <h2>Burger Menu</h2>
              <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
            nextArrow={<NextArrow/>}
            prevArrow={<PrevArrow/>}>
            <div className='food-item'>
              <img src={BurgerAbout} alt="Burger IMG" />
              <h2>Large Burger</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
            <div className='food-item-two'>
              <img src={TwoOfBurgerAbout} alt="Burger IMG" />
              <h2>Medium Burger</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
            <div className='food-item-three'>
              <img src={ThreeOfBurgerAbout} alt="" />
              <h2>Special Burger</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
          </Slider>
              <Slider style={{ marginTop: 50 + "px" }}
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={5}
            infinite={true}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className='food-item-child'>
              <img src={BurgerAbout} alt="" />
            </div>
            <div className='food-item-child-two'>
              <img src={TwoOfBurgerAbout} alt="" />
            </div>
            <div className='food-item-child-three'>
              <img src={ThreeOfBurgerAbout} alt="" />
            </div>
            <div className='food-item-child'>
              <img src={BurgerAbout} alt="" />
            </div>
            <div className='food-item-child-three'>
              <img src={ThreeOfBurgerAbout} alt="" />
            </div>
          </Slider>
        </div>
        <SliderOfDrink />
        <footer><Footers /></footer>
        
    </main>
  );
}