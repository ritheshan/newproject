import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const handleProfileUpdate = async () => {
    try {
      const response = await axios.put('/api/auth/updateProfile', { username, profilePicture });
      if (response.data.success) {
        // Redirect or show success message
      }
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div>
      <h2>Profile Settings</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
      <button onClick={handleProfileUpdate}>Update Profile</button>
    </div>
  );
};

export default Settings;
