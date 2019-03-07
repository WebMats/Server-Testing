const request = require('supertest');
const app = require('./index');



test('should have mode=testing', () => {
    expect(process.env.DB_MODE).toBe('testing')
})