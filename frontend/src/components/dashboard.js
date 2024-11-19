import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Dashboard.css'; // For styling the dashboard

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to AgriMaster Dashboard</h1>
      <div className="dashboard-sections">
        <div className="dashboard-section">
          <h2>Crop Management</h2>
          <p>Track your crops, analyze growth, and record harvest data.</p>
          <Link to="/crops">Go to Crops</Link>
        </div>
        <div className="dashboard-section">
          <h2>Disease Detection</h2>
          <p>Upload crop photos to detect diseases and get treatment suggestions.</p>
          <Link to="/disease-detection">Go to Disease Detection</Link>
        </div>
        <div className="dashboard-section">
          <h2>Community</h2>
          <p>Connect with fellow farmers, share tips, and get advice from the community.</p>
          <Link to="/community">Go to Community</Link>
        </div>
        <div className="dashboard-section">
          <h2>Weather Forecast</h2>
          <p>Check the weather updates for your location and plan accordingly.</p>
          <Link to="/weather">Go to Weather</Link>
        </div>
        <div className="dashboard-section">
          <h2>Gallery</h2>
          <p>Upload and view photos of your crops and farming activities.</p>
          <Link to="/gallery">Go to Gallery</Link>
        </div>
        <div className="dashboard-section">
          <h2>Profile Settings</h2>
          <p>Manage your account and personal information.</p>
          <Link to="/profile/settings">Go to Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
