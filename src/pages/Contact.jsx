import './Contact.css'
import Navbar from '../components/Navbar'
import { useState } from "react";
import React from 'react'
import Select from 'react-select'
import ChefContact from '../img/chef-contact.jpg'
import Footers from '../components/Footer'

export default function Contact () {
const optionsBurger = [
  {value: 'large', label: 'Large Burger'},
  {value: 'medium', label: 'Medium Burger' },
  {value: 'special', label: 'Special Burger' }
]

const optionsDrink = [
  { value: 'tea', label: 'Iced Tea' }, 
  { value: 'orange', label: 'Orange Juice' },
  { value: 'strawberry', label: 'Strawberry Juice' },
  { value: 'water', label: 'Water Drink' }
]

const [formData, setFormData] = useState({
  username: "",
  location: "",
  message: "",
});

const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevState) => ({ ...prevState, [name]: value }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData);
};

  return(
    <main>
      <Navbar />
      <div className="contact">
        <h2>Order Your Food and Drink</h2>
        <div className="contact-container">
            <img src={ChefContact} alt="Chef IMG" className='chef-contact'/>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="username"
                  placeholder='Input Your Name'
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Location:
                <input
                  placeholder='Input Your Location'
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
              </label>
              <label>
                Messages:
                <input
                  placeholder='Input Your Messages'
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <label>
                Select Your Burger:
                <Select options={optionsBurger} className='select-food'/>
              </label>
              <label >
                Select Your Drink :
                <Select options={optionsDrink} className='select-food' /> 
              </label>
              <button className='btn-contact' onClick={() => window.location='/submit'}>Order Now</button>
            </form>
        </div>
      </div>
      <footer>
        <Footers />
      </footer>
    </main>
  );
}
