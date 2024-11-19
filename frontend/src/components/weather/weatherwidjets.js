import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('/api/weather/forecast');
        setWeather(response.data);
      } catch (error) {
        console.error('Weather fetching failed:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      <h2>Weather Forecast</h2>
      {weather ? (
        <div>
          <p>{weather.description}</p>
          <p>Temperature: {weather.temperature}°C</p>
        </div>
      ) : (
        <p>Loading weather information...</p>
      )}
    </div>
  );
};

export default WeatherWidget;
