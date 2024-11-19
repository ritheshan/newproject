const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app
const path = require('path');

describe('Gallery Routes', () => {
  
  it('should upload a crop image to the gallery', async () => {
    const response = await request(app)
      .post('/api/gallery')
      .attach('image', path.join(__dirname, 'cropImage.jpg')) // Provide test image
      .field('userId', 'user123'); // Send userId if needed
      
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('imageUrl');
  });

  it('should fetch all images in the gallery', async () => {
    const response = await request(app).get('/api/gallery');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
