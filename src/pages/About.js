import './About.css'
import Navbar from '../components/Navbar.js'
import SliderOfBurger from '../components/SliderOfBurger.js'
import BurgerAbout from '../img/burger-about.jpg'
import ChefCharacter from '../img/chef-character.jpg'
import TwoOfBurgerAbout from '../img/burger-about-2.png'
import ThreeOfBurgerAbout from '../img/burger-about-3.png'
import Footers from '../components/Footer.js'


export default function About () {
  return (
    <main>
      <Navbar />
      <div className="About">
          <div className="About-welcome">
            <h2>Delicious Food By Maman</h2>
            <button className='btn-menu' onClick={() => window.location='/food'}>Let's Get Started</button>
          </div>
        <SliderOfBurger />
      </div>

      <div className="About-food">
        <img src={ChefCharacter} className='About-chef-img' alt="" />
        <h2>About <span>Masakan Maman</span></h2>
        <div className="About-food-container">

          <div className="About-food-item">
            <div className="About-food-item-title">
              <h2>Deliciousness Displayed</h2>
              <button>Go To Menu</button>
            </div>
            <img src={TwoOfBurgerAbout} alt="" />
          </div>

          <div className="About-food-item">
            <div className="About-food-item-title">
              <h2>True Taste Experience</h2>
              <button>Go To Menu</button>
            </div>
            <img src={BurgerAbout} alt="" />
          </div>

          <div className="About-food-item">
            <div className="About-food-item-title">
              <h2>Unforgettable Burger</h2>
              <button>Go To Menu</button>
            </div>
            <img src={ThreeOfBurgerAbout} alt="" />
          </div>

        </div>
      </div>

      <footer>
        <Footers />
      </footer>
    </main>
  );
}