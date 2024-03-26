import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Oranges from '../img/orange.png'
import Strawberrys from '../img/strawberry.png'
import Teas from '../img/tea.png'
import Waters from '../img/water.png'
import '../pages/Food.css'

export default function SliderOfDrink() {
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
    <div className="food-container">
          <h2>Drinks Menu</h2>
              <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}
                nextArrow={<NextArrow/>}
                prevArrow={<PrevArrow/>}>
            <div className='food-item'>
              <img src={Teas} alt="Drink IMG" style={{ padding: 30 + "px" }}/>
              <h2>Iced Tea Drink</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
            <div className='food-item-two'>
              <img src={Oranges} alt="Drink IMG" />
              <h2>Orange Juice Drink</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
            <div className='food-item-three'>
              <img src={Strawberrys} alt="" />
              <h2>Strawberry Juice Drink</h2>
              <button className='btn-burger-secondary' onClick={() => window.location='/contact'}>Order Now</button>
            </div>
            <div className='food-item'>
              <img src={Waters} alt="Drink IMG" />
              <h2>Water Drink</h2>
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
              <img src={Teas} alt="" />
            </div>
            <div className='food-item-child-two'>
              <img src={Oranges} alt="" />
            </div>
            <div className='food-item-child-three'>
              <img src={Strawberrys} alt="" />
            </div>
            <div className='food-item-child'>
              <img src={Waters} alt="" />
            </div>
            <div className='food-item-child'>
              <img src={Teas} alt="" />
            </div>
            <div className='food-item-child-two'>
              <img src={Oranges} alt="" />
            </div>
          </Slider>
        </div>
  );
}