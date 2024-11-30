import React from 'react'

const contact = () => {
  return (
    <div className="contact-container">

    <section className="contact-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Get in Touch</h1>
        <p className="hero-description">
          We’d love to hear from you! Whether you have questions or want to
          plan an event, feel free to reach out.
        </p>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="contact-form-section">
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </section>
  </div>
  )
}

export default contact