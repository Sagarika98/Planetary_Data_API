// src/components/SolarSystemOverview.js
import React from 'react';
import '../styles/SolarSystemOverview.css';
import solar from '../assets/SolarSystem.jpeg';
import sun from '../assets/sun.jpg';

const SolarSystemOverview = () => {
  return (
    <section className="solar-system-overview">
    
      <img
        src={solar}
        alt="Solar System"
        className="solar-system-image"
      />
      <div className="overview-content">
        <h2>SOLAR SYSTEM OVERVIEW</h2>
        <p>The solar system has one star, eight planets, five officially named dwarf planets, hundreds of moons, thousands of comets, and more than a million asteroids.

Our solar system is located in the Milky Way, a barred spiral galaxy with two major arms, and two minor arms. Our Sun is in a small, partial arm of the Milky Way called the Orion Arm, or Orion Spur, between the Sagittarius and Perseus arms. Our solar system orbits the center of the galaxy at about 515,000 mph (828,000 kph). It takes about 230 million years to complete one orbit around the galactic center.

We call it the solar system because it is made up of our star, the Sun, and everything bound to it by gravity.</p>
      </div>
      <div className="sun-section">
        <div className="sun-image">
          <img src={sun} alt="Sun" />
        </div>
        <div className="sun-description">
          <h2>ABOUT THE SUN</h2>
          <p>The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, radiating energy that supports life on Earth through photosynthesis. Its gravitational influence holds the solar system together.The Sun's gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.

</p>
        </div>
      </div>
    </section>
  );
};

export default SolarSystemOverview;
