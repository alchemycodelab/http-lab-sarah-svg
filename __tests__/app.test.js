const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('should get spot', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('should post', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');
    expect(res.text).toEqual('hi');
  });
});
