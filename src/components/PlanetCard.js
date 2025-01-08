// src/components/PlanetCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PlanetCard.css';

const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
      <img src={planet.image} alt={planet.name} className="planet-image" />
      <h3>{planet.name}</h3>
      <p>{planet.description}</p>
      <Link to={`/planet/${planet.name}`} className="details-link">EXPLORE MORE</Link>
    </div>
  );
};

export default PlanetCard;
