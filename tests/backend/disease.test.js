const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app
const path = require('path');

describe('Disease Detection Routes', () => {
  it('should upload a crop image and return disease information', async () => {
    const response = await request(app)
      .post('/api/diseases')
      .attach('file', path.join(__dirname, 'testImage.jpg')) // Provide a test image file
      .field('userId', 'user123'); // Send userId if needed

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('disease');
    expect(response.body).toHaveProperty('treatment');
  });
});
