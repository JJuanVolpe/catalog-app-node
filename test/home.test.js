import request from 'supertest';
import { expect } from 'chai';
import server from '../src/app/server.js';

describe('Home Endpoint', () => {
  after(() => server.close());

  it('debería responder con status 200 y mensaje "Hello World"', async () => {
    const res = await request(server).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello World');
  });
});
