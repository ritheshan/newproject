import axios from 'axios';

// Set up the base URL for your backend API
const API_URL = 'http://localhost:5000/api'; // Change this to your backend server URL

// Function to send GET requests
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${API_URL}/${endpoint}`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error
  }
};

// Function to send POST requests
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error posting data:', error);
    throw error; // Propagate the error
  }
};

// Function to send PUT requests
export const updateData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_URL}/${endpoint}`, data);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error updating data:', error);
    throw error; // Propagate the error
  }
};

// Function to send DELETE requests
export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_URL}/${endpoint}`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error; // Propagate the error
  }
};

// Function to handle file uploads (e.g., for crop images or disease detection)
export const uploadFile = async (endpoint, formData) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error; // Propagate the error
  }
};
