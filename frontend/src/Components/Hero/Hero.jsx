import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  const latestCollectionRedirect = () => {
    window.location.replace('/latest-collection');
}
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New arrivals only!</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <p><img src={hand_icon} alt="" /></p>
          </div>
          <p>Collection</p>
        </div>
        <div className="hero-latest-btn" onClick={latestCollectionRedirect}>
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
