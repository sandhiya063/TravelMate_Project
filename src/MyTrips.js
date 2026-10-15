import React from "react";

function MyTrips({ trips, deleteTrip }) {
  return (
    <section className="section my-trips">
      <div className="section-heading">
        <p className="section-tag">YOUR TRAVEL PLANS</p>
        <h2>My Trips</h2>
        <p>All your planned adventures in one place.</p>
      </div>

      {trips.length === 0 ? (
        <div className="empty-trips">
          <h3>No trips planned yet!</h3>
          <p>Start planning your next adventure.</p>
        </div>
      ) : (
        <div className="trips-grid">
          {trips.map((trip) => (
            <div className="trip-card" key={trip.id}>
              <h3>📍 {trip.destination}</h3>
              <p>📅 Travel Date: {trip.date}</p>
              <p>👥 Travelers: {trip.people}</p>
              <p>
                💰 Budget: ₹
                {Number(trip.budget).toLocaleString("en-IN")}
              </p>

              <button
                className="delete-button"
                onClick={() => deleteTrip(trip.id)}
              >
                Delete Trip
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyTrips;