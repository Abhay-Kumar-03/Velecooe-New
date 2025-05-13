import { useState } from 'react'
import axios from 'axios'
import './App.css'

import logo from './assets/Group 111.png';
import heroImage from './assets/heroImg.jpg';
import aboutImage from './assets/van.png';
import delivery1 from './assets/deliever1.png';
import delivery2 from './assets/deliever2.png';
import delivery3 from './assets/deliever3.png';
import vanDelivery from './assets/vanDelievery.png';
import contactImage from './assets/location.png';
import FaYoutube from './assets/Icon-2.png';
import FaLinkedin from './assets/Icon-3.png'
import FaXTwitter from './assets/Icon.png'
import FaInstagram from './assets/Icon-1.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      
      if (response.status === 201) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
        alert('Form submitted successfully!');
        console.log(formData);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <>

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Innovation</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>

      <div className="hero-container">
        <img src={heroImage} alt="Hero Banner" className="hero-image" />
      </div>

      <section className="about-section">
        <h2 className="about-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              A New Era of Q-Commerce. Veloceeo, a flagship initiative by Yugant Industries Pvt. Ltd., is redefining quick commerce by blending speed, sustainability, and local empowerment. Unlike conventional dark-store models, Veloceeo champions a region-first approach - integrating neighborhood stores, kirana outlets, and micro-warehouses into a smart, tech-enabled delivery network. Built to operate without costly infrastructure, Veloceeo is designed to scale rapidly while keeping commerce hyperlocal, inclusive, and future-ready.
            </p>
          </div>
          <div className="about-image">
            <img src={aboutImage} alt="About Us" />
          </div>
        </div>
        <div className="more-button-container">
          <button className="more-button">more</button>
        </div>
      </section>



      <section className="tech-section">
        <h2 className="tech-heading">Technology & Innovation</h2>
        <p className="tech-paragraph">
          Smarter Commerce, Delivered Veloceeo's strength lies in its cutting-edge tech stack that powers:
        </p>

        <div className="tech-gallery">
          <div className="tech-item">
            <img src={delivery1} alt="Tech 1" />
            <p className="tech-caption">Seamless multi-vendor order processing and realtime inventory sync</p>
          </div>
          <div className="tech-item">
            <img src={delivery2} alt="Tech 2" />
            <p className="tech-caption">Predictive demand analytics and intelligent route optimisation</p>
          </div>
          <div className="tech-item">
            <img src={delivery3} alt="Tech 3" />
            <p className="tech-caption">Dynamic delivery assignments and 30min fulfillment capability</p>
          </div>
        </div>
        <div className="tech-gallery-2">
          <div className="tech-item">
            <img src={delivery3} alt="Tech 1" />
            <p className="tech-caption">Real-time customer interaction and live order tracking</p>
          </div>
          <div className="tech-item">
            <img src={delivery1} alt="Tech 2" />
            <p className="tech-caption">Vendor dashboards, performance incentives, and gamified engagement</p>
          </div>
        </div>
        <p className="tech-paragraph-2">
          Through these innovations, Veloceeo empowers local sellers to operate with the efficiency of large-scale chains - bridging the digital divide in urban retail.
        </p>
      </section>



      <section className="impact-section">
        <h2 className="impact-heading">Impact & Vision</h2>
        <div className="impact-content">
          <img src={vanDelivery} alt="Impact" className="impact-image" />
          <div className="impact-text">
            <p className="impact-text-1">Local First, Nationwide Next</p>
            <p className="impact-text-2">Veloceeo is more than a delivery service — it's a movement toward inclusive digital commerce. By placing regional vendors at the heart of its logistics model, Veloceeo drives economic participation, customer trust, and sustainable urban development. With its scalable micro-logistics framework, the brand is poised to expand across India's cities and towns - ensuring that every essential reaches consumers fast, fairly, and locally.</p>
          </div>
        </div>
      </section>

      {/* Contact Us Heading */}
      <section className="contact-section">
        <h2 className="contact-heading">Contact Us</h2>
      </section>

      <section className="contact-section-1">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <label className="form-label">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name" 
              required 
              className="form-input" 
            />
            <label className="form-label">Phone</label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone" 
              required 
              className="form-input" 
            />
            <label className="form-label">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email" 
              required 
              className="form-input" 
            />
            <label className="form-label">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type a Message" 
              required 
              className="form-textarea"
            ></textarea>
            <button 
            onClick={handleSubmit}
            type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact Us" className="contact-image" />
        </div>
      </section>




      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <div style={{ marginTop: '-30px' }} className="logo"><img src={logo}></img></div>
            <div className="social-icons">
              <img src={FaInstagram} alt="Insta" className="insta-image" />
              <img src={FaYoutube} alt="youtube" className="youtube-image" />
              <img src={FaLinkedin} alt="linkedin" className="linkedin-image" />
              <img src={FaXTwitter} alt="twitter" className="twitter-image" />
            </div>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Use cases</h4>
              <ul>
                <li>UI design</li>
                <li>UX design</li>
                <li>Wireframing</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Online whiteboard</li>
                <li>Team collaboration</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Explore</h4>
              <ul>
                <li>Design</li>
                <li>Prototyping</li>
                <li>Development features</li>
                <li>Design systems</li>
                <li>Collaboration features</li>
                <li>Design process</li>
                <li>FigJam</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Best practices</li>
                <li>Colors</li>
                <li>Color wheel</li>
                <li>Support</li>
                <li>Developers</li>
                <li>Resource library</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2025 Yugant Industries Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>



    </>
  )
}

export default App
