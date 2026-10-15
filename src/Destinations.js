import React from "react";
import DestinationCard from "./DestinationCard";

function Destinations({ setPage }) {
  const destinations = [
    {
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
      price: "₹25,000",
      description: "Tropical beaches and peaceful temples."
    },
    {
      name: "Swiss Alps",
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
      price: "₹65,000",
      description: "Beautiful mountains and scenic views."
    },
    {
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      price: "₹45,000",
      description: "Romantic streets and iconic landmarks."
    }
  ];

  function planDestination(name) {
    setPage("planner");
  }

  return (
    <section className="section" id="destinations">
      <div className="section-heading">
        <p className="section-tag">FIND YOUR HAPPY PLACE</p>
        <h2>Popular Destinations</h2>
        <p>Explore some of the world's most beautiful places.</p>
      </div>

      <div className="destination-grid">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.name}
            name={destination.name}
            country={destination.country}
            image={destination.image}
            price={destination.price}
            description={destination.description}
            onPlan={planDestination}
          />
        ))}
      </div>
    </section>
  );
}

export default Destinations;