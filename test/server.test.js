import request from 'supertest';
import { expect } from 'chai';
import server from '../src/app/server.js';

describe('API Tests', () => {
  // Cierra el servidor después de ejecutar todos los tests
  after(() => {
    server.close();
  });

  /**
   * 🟢 Test de integración - Verifica el endpoint raíz "/"
   * 
   * ✅ Comprueba que el servidor responde con un status 200
   * ✅ Verifica que el mensaje devuelto sea "Hello World"
   */
  it('debería responder con status 200 y mensaje "Hello World"', async () => {
    const res = await request(server).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Hello World');
  });

  /**
   * 🟢 Test de integración - Verifica el endpoint "/status"
   * 
   * ✅ Comprueba que el servidor responde con un status 200
   * ✅ Verifica que la respuesta sea un JSON con `{ status: "ok" }`
   */
  it('debería responder con status 200 y JSON { status: "ok" }', async () => {
    const res = await request(server).get('/status');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ status: "ok" });
  });
});
