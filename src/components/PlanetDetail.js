// src/components/PlanetDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/PlanetDetail.css";

const PlanetDetail = () => {
  const { planetName } = useParams();
  const [planetDetails, setPlanetDetails] = useState(null);

  useEffect(() => {
    // Fetch the planet details from your backend API
    axios.get(`https://ubhh5xdfqj.execute-api.us-east-1.amazonaws.com/deploy/planet/${planetName}`)
    .then(response => {
      console.log('Response Data:', response.data);
      console.log('Response Headers:', response.headers);


      const contentType = response.headers['content-type'];

      if (contentType.includes('application/json')) {
        // Directly use the JSON data if the response is of type application/json
        setPlanetDetails(response.data);

      } else if (contentType.includes('text/plain')) {
        // Handle plain text response
        setPlanetDetails({
          name: planetName,
          fullDescription: response.data, // The raw text content from the API
        });
      } else if (contentType.includes('text/html')) {
        // Handle HTML response (convert to plain text if needed)
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.data, 'text/html');
        const plainText = doc.body.textContent || '';
        setPlanetDetails({
          name: planetName,
          fullDescription: plainText, // Extracted plain text from HTML
        });
      }
    })
    .catch(error => {
      console.error('Error fetching planet details:', error);
    });
  }, [planetName]);

  if (!planetDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="planet-detail-container">
      {/* <div className="planet-detail-image-container">
        <img src={planetDetails.image} alt={planetName} className="planet-detail-image" />
      </div> */}
      <div className="planet-detail-content">
        <h2>{planetName}</h2>
        <p>{planetDetails}</p>
      </div>
    </div>
  );
};

export default PlanetDetail;
