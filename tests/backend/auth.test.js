const request = require('supertest');
const app = require('../../backend/app'); // Import your Express app

describe('Authentication Routes', () => {
  
  it('should sign up a new user', async () => {
    const response = await request(app)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        phoneNumber: '1234567890',
        password: 'password123',
      });
      
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'User created successfully');
  });

  it('should log in an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'testuser',
        password: 'password123',
      });
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token'); // Ensure a token is returned
  });

  it('should return 400 for invalid login credentials', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        username: 'wronguser',
        password: 'wrongpassword',
      });
      
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'Invalid credentials');
  });
});
