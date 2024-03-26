import './Home.css'
import Navbar from '../components/Navbar.js'
import Footers from '../components/Footer.js'
import ChefHome from '../img/chef-home.jpg'

export default function Home() {
  const home = {
    title: "Delicious Food",
    desc: "Indulge in Maman's crafted delight with each bite of our signature burgers. Made with love, each burger offers authentic flavors, leaving you craving more after every mouthful."
  }
  return (
    <main>
    <Navbar />
      <div className="home">
        <div className="home-intro">
          <h1>{home.title}</h1>
          <p>{home.desc}</p>  
          <div className="btn-group">
            <button className="btn-order" onClick={() => window.location='/about'}>Let's Get Started</button>
            <button className="btn-message" onClick={() => window.location='/contact'}>Message</button>
          </div>
        </div>
        <div className="home-img">
          <img src={ChefHome} alt="Intro IMG" />
        </div>
      </div>
      <footer>
        <Footers/>
      </footer>
    </main>
  );
}