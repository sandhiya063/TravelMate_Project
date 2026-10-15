import React from "react";

function Explore({ setPage }) {
  const categories = [
    {
      icon: "🏝️",
      title: "Beach Escapes",
      description: "Relax by the sea and enjoy tropical sunsets."
    },
    {
      icon: "🏔️",
      title: "Mountain Adventures",
      description: "Discover scenic trails and mountain views."
    },
    {
      icon: "🏙️",
      title: "City Discoveries",
      description: "Experience culture, food, and city life."
    }
  ];

  return (
    <section className="section explore-section" id="explore">
      <div className="section-heading">
        <p className="section-tag">TRAVEL YOUR WAY</p>
        <h2>Explore Your Interests</h2>
        <p>Choose the kind of adventure you love.</p>
      </div>

      <div className="explore-grid">
        {categories.map((item) => (
          <div className="explore-card" key={item.title}>
            <div className="explore-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => setPage("planner")}>
              Plan an Adventure →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explore;