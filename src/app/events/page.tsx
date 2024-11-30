import React from 'react'

const events = () => {
  return (
    <div className="events-container">
    {/* Hero Section */}
    <section className="events-hero">
      <div className="events-overlay"></div>
      <div className="events-content">
        <h1 className="hero-title">Our Events</h1>
        <p className="hero-description">
          Experience the elegance and charm of unforgettable moments with <strong>Aura Events</strong>.
          We design events that inspire and captivate.
        </p>
      </div>
    </section>

    {/* Events Section */}
    <section className="events-list">
      <h2 className="section-title">Upcoming Events</h2>
      <div className="events-grid">
        <div className="event-card">
          <h3 className="event-title">IceCream Birthday Party Theme</h3>
          {/* <p className="event-date">January 25, 2025</p> */}
          <p className="event-description">
          "Creating magical ice cream-themed birthday parties, where every scoop brings joy, fun, and unforgettable memories!"
          </p>
        </div>
        <div className="event-card">
          <h3 className="event-title">Luxury Wedding Expo</h3> <br />
          <p className="event-description">
            Explore premium wedding vendors and plan your dream wedding in style.
          </p>
        </div>
        <div className="event-card">
          <h3 className="event-title">Musical Events</h3>
          {/* <p className="event-date">April 15, 2025</p> */}
          <p className="event-description">
          "Bringing melodies to life with expertly organized musical events that captivate hearts and create unforgettable rhythms!"
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default events