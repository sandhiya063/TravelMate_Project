import React, { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Destinations from "./Destinations";
import Explore from "./Explore";
import Login from "./Login";
import TripPlanner from "./TripPlanner";
import MyTrips from "./MyTrips";
import Footer from "./Footer";

function App() {
  const [page, setPage] = useState("home");
  const [trips, setTrips] = useState([]);

  function addTrip(trip) {
    setTrips([...trips, { ...trip, id: Date.now() }]);
    setPage("mytrips");
  }

  function deleteTrip(id) {
    setTrips(trips.filter((trip) => trip.id !== id));
  }

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && (
        <>
          <Hero setPage={setPage} />
          <Destinations setPage={setPage} />
          <Explore setPage={setPage} />
        </>
      )}

      {page === "login" && <Login setPage={setPage} />}

      {page === "planner" && (
        <TripPlanner addTrip={addTrip} />
      )}

      {page === "mytrips" && (
        <MyTrips trips={trips} deleteTrip={deleteTrip} />
      )}

      <Footer />
    </div>
  );
}

export default App;