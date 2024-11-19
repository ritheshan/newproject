import React, { useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', newImage);
    try {
      await axios.post('/api/gallery/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      // Refresh images
      fetchImages();
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await axios.get('/api/gallery');
      setImages(response.data);
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
    }
  };

  return (
    <div>
      <h2>Your Gallery</h2>
      <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
      <button onClick={handleImageUpload}>Upload</button>

      <div>
        {images.map((image) => (
          <img key={image._id} src={image.url} alt="crop" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
