const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app

describe('Community Routes', () => {
  
  it('should fetch all community posts', async () => {
    const response = await request(app).get('/api/community');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array); // Ensure the response is an array
  });

  it('should add a new community post', async () => {
    const response = await request(app)
      .post('/api/community')
      .send({
        title: 'Looking for advice on Wheat farming',
        content: 'Can anyone suggest the best time to plant Wheat?',
        userId: 'user123',
      });
      
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('title', 'Looking for advice on Wheat farming');
  });
});
