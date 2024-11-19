const { connectDB, closeDB } = require('../../backend/config/db'); // DB connection helper

describe('Database Connection', () => {
  beforeAll(async () => {
    await connectDB(); // Try connecting to the DB before running tests
  });

  afterAll(async () => {
    await closeDB(); // Close DB connection after running tests
  });

  it('should connect to the database successfully', () => {
    expect(true).toBe(true); // If we reach this, the connection was successful
  });
});
