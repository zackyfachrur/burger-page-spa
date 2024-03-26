import './Submit.css'
import Navbar from '../components/Navbar.js'
import ChefContact from '../img/chef-contact.jpg'


export default function Contact () {

  return(
    <main>
      <Navbar />
      <div className="submit">
        <div className="submit-container">
            <img src={ChefContact} alt="Chef IMG" className='chef-contact'/>
            <div className='submit-item'>
              <h2>Thank You For Ordering</h2>
              <h3>Masakan Maman</h3>
              <button className='btn-submit' onClick={() => window.location='/'}>Back Home</button>
            </div>
        </div>
      </div>
    </main>
  );
}
