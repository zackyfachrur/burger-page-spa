import Navbar from '../components/Navbar';
import './Food.css'
import BurgerAbout from '../img/burger-about.jpg'
import TwoOfBurgerAbout from '../img/burger-about-2.png'
import ThreeOfBurgerAbout from '../img/burger-about-3.png'

export default function Food () {
  return(
    <main>
      <Navbar/>
      <div className="food">
        <div className="food-container">
          <div className="food-item">
            <img src={BurgerAbout} alt="" />
          </div>
          <div className="food-item-two">
            <img src={TwoOfBurgerAbout} alt="" />
          </div>
          <div className="food-item-three">
            <img src={ThreeOfBurgerAbout} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}