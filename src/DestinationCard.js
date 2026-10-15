import React from "react";

function DestinationCard({ name, country, image, price, description, onPlan }) {
  return (
    <div className="destination-card">
      <img src={image} alt={name} />

      <div className="card-content">
        <p className="country">{country}</p>
        <h3>{name}</h3>
        <p>{description}</p>

        <div className="card-bottom">
          <strong>{price}</strong>
          <button onClick={() => onPlan(name)}>
            Plan Trip →
          </button>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;