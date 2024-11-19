import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CropTracker = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('/api/crops');
        setCrops(response.data);
      } catch (error) {
        console.error('Failed to fetch crops:', error);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div>
      <h2>Your Crops</h2>
      {crops.map(crop => (
        <div key={crop._id}>
          <h3>{crop.name}</h3>
          <p>Status: {crop.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CropTracker;
