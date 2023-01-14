const supertest = require('supertest');


//const { describe, it } = require('node:test');
const app = require('./app');

describe('GET /', () => {
    it('should respond with a message', async () => {
        const response = await supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200);
        expect(response.body.message).toEqual('👣 Azbil Inventory App 👩‍💻👩‍💻');        
    });
});
