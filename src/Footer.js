import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h2>TravelMate<span>.</span></h2>
      <p>Discover places. Create memories. Travel more.</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#explore">Explore</a>
      </div>

      <p className="copyright">
        © 2026 TravelMate. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;