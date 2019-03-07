const request = require('supertest');
const app = require('./index');



test('should have mode=testing', () => {
    expect(process.env.DB_MODE).toBe('testing')
})

test('should return 200 status', async () => {
    const result = await request(app).get('/');
    expect(result.status).toEqual(200)
    expect(Array.isArray(result.body)).not.toBeFalsy()
})