import React from 'react'

const about = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-description">
            At <strong>Aura Events</strong>, we specialize in crafting luxurious, unforgettable experiences.
            From private gatherings to grand celebrations, we bring elegance and style to every moment.
            With years of experience in event planning, we specialize in creating unique and seamless experiences that cater to your every need. 
          </p>
        </div>
      </section>

     
      <section className="about-details">
        <div className="about-card">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-description">
          "Our mission is to create memorable experiences by organizing seamless and innovative events that bring people together, spark joy, and leave lasting impressions."
          </p>
        </div>
        <div className="about-card">
          <h2 className="card-title">Why Choose Us</h2>
          <p className="card-description">
            With years of expertise and a passion for excellence, we transform your dreams into reality, 
            ensuring every detail is perfect.
          </p>
        </div>
      </section>
    </div>
  )
}

export default about