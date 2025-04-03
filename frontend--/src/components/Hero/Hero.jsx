import React from 'react';
import her0_img from "../../assets/woman1.png"; // Corrected import path
import { FaShippingFast } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import './Hero.css'; // Ensure this path is correct

function Hero() {
  return (
    <div>
     <div className="hero">
     <div className="hero_top">
        <div className="hero_left">
          <h2>Unleash Your Unique Style.</h2>
          <h1>Discover Your Perfect Fit</h1>
          <p>Explore our curated collection of fashion-forward pieces that reflect your individuality.</p>
        </div>
        <div className="hero_right">
          {/* Fixed img tag: No quotes around {her0_img} */}
          <img src={her0_img} alt="Fashion Model" />
        </div>
      </div>

      <div className="hero_bottom">
        <div className="hero_content">
          <div className="info_icon"><FaShippingFast className='hero_icon' /></div>
          <div className="detail">
            <h3>Free Delivery</h3>
            <p>Free delivery on all orders</p>
          </div>
        </div>

        <div className="hero_content">
          <div className="info_icon"><FiSend className='hero_icon' /></div>
          <div className="detail">
            <h3>Nationwide Delivery</h3>
            <p>We are just a click away</p>
          </div>
        </div>

        <div className="hero_content">
          <div className="info_icon"><BiSupport className='hero_icon' /></div>
          <div className="detail">
            <h3>24/7 Support</h3>
            <p>Full support during the process</p>
          </div>
        </div>

        <div className="hero_content">
          <div className="info_icon"><MdPayment className='hero_icon' /></div>
          <div className="detail">
            <h3>Secure Payment</h3>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Hero;
