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

    it('should respond with an individual item type', async () => {
        const response = await supertest(app)
            .get('/api/v1/item_type/1')
            .expect('Content-Type', /json/)
            .expect(200);
            expect(response.body.id).toBe(1);
    });

    it('should respond with a 404 for not found item type', async () => {
        await supertest(app)
            .get('/api/v1/item_type/5000')
            .expect('Content-Type', /json/)
            .expect(404);
    });
});