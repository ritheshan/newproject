import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CropGraph = () => {
  const [cropData, setCropData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch crop data for the graph (example data structure)
  useEffect(() => {
    const fetchCropData = async () => {
      try {
        const response = await axios.get('/api/crops/analytics'); // Replace with the actual API endpoint
        setCropData(response.data); // Expecting an array of crop statistics (e.g., growth stages, harvest yields)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crop data:', error);
        setLoading(false);
      }
    };

    fetchCropData();
  }, []);

  // Prepare the data for the chart
  const prepareChartData = () => {
    if (cropData.length === 0) {
      return {
        labels: [],
        datasets: [],
      };
    }

    const labels = cropData.map(item => item.date); // Assuming crop data has a 'date' field
    const harvestData = cropData.map(item => item.harvestYield); // Assuming crop data has 'harvestYield'

    return {
      labels: labels,
      datasets: [
        {
          label: 'Harvest Yield Over Time',
          data: harvestData,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          tension: 0.1,
        },
      ],
    };
  };

  return (
    <div>
      <h2>Crop Growth and Harvest Visualization</h2>
      {loading ? (
        <p>Loading crop data...</p>
      ) : (
        <div style={{ width: '80%', height: '400px', margin: '0 auto' }}>
          <Line data={prepareChartData()} options={{ responsive: true }} />
        </div>
      )}
    </div>
  );
};

export default CropGraph;
