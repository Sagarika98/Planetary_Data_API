// src/components/PlanetList.js
import React, { useState } from 'react';
import PlanetCard from './PlanetCard';
import SolarSystemOverview from './SolarSystemOverview';
import SearchBar from './SearchBar';
import Mercury from '../assets/Mercury.webp';
import Venus from '../assets/Venus.webp';
import Earth from '../assets/Earth.webp';
import Mars from '../assets/Mars.jpg';
import Jupiter from '../assets/Jupiter.webp';
import Saturn from '../assets/Saturn.avif';
import Uranus from '../assets/Uranus.jpg';
import Neptune from '../assets/Neptune.webp';

const planets = [
  { name: 'MERCURY', image: Mercury, description: 'Mercury is the smallest planet in our solar system, and the nearest to the Sun.Mercury is only slightly larger than Earth Moon.' },
  { name: 'VENUS', image: Venus, description: 'Venus is the second planet from the Sun, and Earth closest planetary neighbor.It the hottest planet in our solar system, and is sometimes called Earth twin.' },
  { name: 'EARTH', image: Earth , description: 'Earth our home planet is the third planet from the Sun, and the fifth largest planet.It the only place we know of inhabited by living things.' },
  { name: 'MARS', image: Mars, description: 'Mars the fourth planet from the Sun is a dusty, cold, desert world with a very thin atmosphere.This dynamic planet has seasons, polar ice caps, extinct volcanoes.' },
  { name: 'JUPITER', image: Jupiter, description: 'Jupiter is the largest planet in our solar system if it were a hollow shell, 1,000 Earths could fit inside.'},
  { name: 'SATURN', image: Saturn, description: 'Saturn is the sixth planet from the Sun, the second-largest planet in our solar system.'},
  { name: 'URANUS', image: Uranus, description: 'The seventh planet from the Sun, Uranus has the third largest diameter of planets in our solar system.' },
  { name: 'NEPTUNE', image: Neptune, description: 'Neptune is the eighth and most distant planet in solar system.It is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us.' },
];

const PlanetList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter planets based on the search term
  const filteredPlanets = planets.filter(planet =>
    planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="planet-container">
      <SolarSystemOverview />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <div className="planet-list">
        {filteredPlanets.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
};

export default PlanetList;
