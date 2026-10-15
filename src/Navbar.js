import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => setPage("home")}>
        TravelMate<span>.</span>
      </h2>

      <div className="nav-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("home")}>Explore</button>
        <button onClick={() => setPage("planner")}>Plan Trip</button>
        <button onClick={() => setPage("mytrips")}>My Trips</button>
      </div>

      <button
        className="login-button"
        onClick={() => setPage("login")}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;