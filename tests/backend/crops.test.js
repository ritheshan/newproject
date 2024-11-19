const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app
const { connectDB, closeDB } = require('../../backend/config/db'); // DB connection setup

describe('Crops Routes', () => {
  beforeAll(async () => {
    await connectDB(); // Connect to the database before all tests
  });

  afterAll(async () => {
    await closeDB(); // Close DB connection after all tests
  });

  it('should fetch all crops', async () => {
    const response = await request(app).get('/api/crops');
    
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array); // Ensure it returns an array
  });

  it('should add a new crop', async () => {
    const response = await request(app)
      .post('/api/crops')
      .send({
        name: 'Wheat',
        status: 'Growing',
        userId: 'user123', // Sample userId
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('name', 'Wheat');
    expect(response.body).toHaveProperty('status', 'Growing');
  });
});
