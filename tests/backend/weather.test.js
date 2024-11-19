const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app

describe('Weather Routes', () => {
  
  it('should return weather forecast data', async () => {
    const response = await request(app).get('/api/weather?location=bangalore');
    
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('forecast');
    expect(response.body.forecast).toBeInstanceOf(Array);
  });
});
