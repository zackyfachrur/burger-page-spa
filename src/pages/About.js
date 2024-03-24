import './About.css'
import Navbar from '../components/Navbar.js'
import BurgerAbout from '../img/burger-about.png'
import BurgerTop from '../img/burger-top.png'

export default function About () {
  return (
    <main>
      <Navbar />
      <div className="About">
          <div className="About-welcome">
            <img src={BurgerTop} alt="Burger Welcome" />
          </div>
        <div className="About-group">
          <div className="About-img">
            <img src={BurgerAbout} alt="Burger About" />
          </div>
          <div className="About-intro">
            <h1>"Explosive Flavors Exploding on Your Taste Buds - Every Bite Enthralls!"</h1>
          </div>
        </div>
      </div>
    </main>
  );
}