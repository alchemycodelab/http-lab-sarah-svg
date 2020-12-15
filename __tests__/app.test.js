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

  it('should GET red', async() => {
    
    const res = await request(app)
      .get('/red');
    
    expect(res.text).toEqual('<h1>red</h1>');
  });

  it('should get red', async() => {
    const res = await request(app)
      .get('/green');
     
    expect(res.text).toEqual('<h1>green</h1>');
  });

  it('should get red', async() => {
    const res = await request(app)
      .get('/blue');
  
    expect(res.text).toEqual('<h1>blue</h1>');
  });



});
