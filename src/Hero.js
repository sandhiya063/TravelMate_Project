import React from "react";

function Hero({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-tag">DISCOVER YOUR NEXT ADVENTURE</p>

        <h1>
          Explore the World,
          <br />
          One Journey at a Time.
        </h1>

        <p>
          Discover beautiful places, plan your perfect trip,
          and create memories that last forever.
        </p>

        <button
          className="primary-button"
          onClick={() => setPage("planner")}
        >
          Start Your Journey →
        </button>
      </div>
    </section>
  );
}

export default Hero;