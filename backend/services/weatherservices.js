const axios = require('axios');

exports.getWeather = async (req, res) => {
  const { location } = req.params; // location can be city name or coordinates

  try {
    const apiKey = process.env.WEATHER_API_KEY; // Set this in your .env file
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    const response = await axios.get(weatherURL);

    const data = {
      location: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    };

    res.status(200).json({ message: 'Weather fetched successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch weather data', error: error.response?.data || error });
  }
};
