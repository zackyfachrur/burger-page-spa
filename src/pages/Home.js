import './Home.css'
import Burger from '../img/burger.png';
import Navbar from '../components/Navbar.js'

export default function Home() {
  const home = {
    title: "Delicious Food",
    desc: "Processed snacks originate from Konoha, renowned for delivering top-notch flavor in each mouthful, characterized by unique tastes crafted with premium recipes."
  }
  const handleClick = () => {
    window.location='/about'
  }
  return (
    <main>
    <Navbar />
      <div className="home">
        <div className="home-intro">
          <h1>{home.title}</h1>
          <p>{home.desc}</p>  
          <div className="btn-group">
            <button className="btn-order" onClick={handleClick}>Order</button>
            <button className="btn-message">Message</button>
          </div>
        </div>
        <div className="home-img">
          <img src={Burger} alt="Intro IMG" />
        </div>
      </div>
    </main>
  );
}