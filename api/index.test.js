const request = require('supertest');
const app = require('./index');


let id;
test('should have mode=testing', () => {
    expect(process.env.DB_MODE).toBe('testing');
})

test('should return 200 status and array of movies', async () => {
    const result = await request(app).get('/');
    expect(result.status).toEqual(200);
    expect(Array.isArray(result.body)).not.toBeFalsy();
})
test('should return 201 status and object put into movies DB', async () => {
    const newMovie = {title: '', director: ''}
    const result = await request(app).post('/', newMovie);
    id = result.id;
    const receivedObject = {title:result.title, director: result.director}
    expect(result.status).toEqual(201);
    expect(receivedObject).toMatchObject(newMovie);
})
test('should return 201 status and message:"deleted"', async () => {
    const result = await request(app).delete('/');
    expect(result.status).toEqual(201);
    expect(result.body.message).toMatch(/deleted/);
})