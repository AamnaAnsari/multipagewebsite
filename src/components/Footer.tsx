import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Aura Events</h3>
          <p>
          Aura Events is your one-stop platform for organizing and managing memorable events. From conferences to concerts, we've got you covered!
          </p>
        </div>
      
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

    
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@Auraevents.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>


      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Aura Events. All rights reserved.
      </p>
      <p>Designed By Aamna Ansari</p>
    </footer>
  )
}

export default Footer