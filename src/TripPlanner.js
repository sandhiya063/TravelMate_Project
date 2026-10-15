import React, { useState } from "react";

function TripPlanner({ addTrip }) {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("1");
  const [budget, setBudget] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    addTrip({
      destination: destination,
      date: date,
      people: people,
      budget: budget
    });

    alert("Your trip has been saved!");

    setDestination("");
    setDate("");
    setPeople("1");
    setBudget("");
  }

  return (
    <section className="form-section">
      <form className="form-card" onSubmit={handleSubmit}>
        <p className="section-tag">YOUR NEXT ADVENTURE</p>
        <h2>Plan Your Trip</h2>
        <p>Fill in your travel details below.</p>

        <label>Destination</label>
        <input
          type="text"
          placeholder="Where do you want to go?"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          required
        />

        <label>Travel Date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />

        <label>Number of Travelers</label>
        <select
          value={people}
          onChange={(event) => setPeople(event.target.value)}
        >
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6+ people</option>
        </select>

        <label>Estimated Budget (₹)</label>
        <input
          type="number"
          placeholder="Enter your budget"
          min="1"
          value={budget}
          onChange={(event) => setBudget(event.target.value)}
          required
        />

        <button type="submit" className="primary-button">
          Save My Trip →
        </button>
      </form>
    </section>
  );
}

export default TripPlanner;