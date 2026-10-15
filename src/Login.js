import React, { useState } from "react";

function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      setMessage("Please enter your email and password.");
    } else {
      setMessage("Demo login successful!");
    }
  }

  return (
    <section className="form-section">
      <form className="form-card" onSubmit={handleLogin}>
        <h2>Welcome Back!</h2>
        <p>Login to your TravelMate account.</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        <button className="primary-button" type="submit">
          Login
        </button>

        {message !== "" && <p className="message">{message}</p>}

        <button
          className="text-button"
          type="button"
          onClick={() => setPage("home")}
        >
          Back to Home
        </button>
      </form>
    </section>
  );
}

export default Login;