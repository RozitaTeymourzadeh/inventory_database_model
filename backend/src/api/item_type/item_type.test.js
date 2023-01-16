const supertest = require('supertest');
const app = require('../../app');


describe('GET /api/v1/item_type', () => {
    it('should respond with an array of item type', async () => {
        const response = await supertest(app)
        .get('/api/v1/item_type')
        .expect('Content-Type', /json/)
        .expect(200);
        expect(response.body.length).toBeGreaterThan(0);

    

    });
});