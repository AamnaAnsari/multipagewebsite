import React from 'react'

const Hero = () => {
  return (
    <section className="hero" style={{backgroundImage:"url(heroimage.jpg)"}}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Aura Events</h1>
        <p className="hero-subtitle">
          Creating memorable events with ease and elegance.
        </p>
        <a href="/events" className="hero-button">Explore More</a>
      </div>
    </section>
  )
}

export default Hero