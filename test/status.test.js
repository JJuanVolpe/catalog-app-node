import request from 'supertest';
import { expect } from 'chai';
import server from '../src/app/server.js';

describe('Status Endpoint', () => {
  after(() => server.close());

  it('debería responder con status 200 y JSON { status: "ok" }', async () => {
    const res = await request(server).get('/status');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ status: "ok" });
  });
});
