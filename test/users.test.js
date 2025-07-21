import request from 'supertest';
import { expect } from 'chai';
import server from '../src/app/server.js';

describe('Users Endpoint', () => {
  after(() => server.close());

  it('debería responder con status 200 y una lista de usuarios', async () => {
    const res = await request(server).get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.length(2);
  });
});
