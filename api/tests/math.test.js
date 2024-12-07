

import { add, subtract } from '../src/utils/math.js';
import { expect } from 'chai';
import app from '../src/index.js';
import request from 'supertest';

describe('Test Express API', () => {
  it('devrait retourner un statut 200', async () => {
    const res = await request(app).get('/users');
    expect(res.status).to.equal(200);
  });
  it('Le Endpoint des videos 200',async()=>{
    const res  = await request(app).get('/videos');
    expect(res.status).to.equal(200);
  })
});


describe('Math Functions', ()=>{
    it('Retourne la somme de 2 + 3', () => {
        const result = add(2,3);
        const attempt_result = 5;
        expect(result).to.equal(attempt_result);
    });
    it('subtract', ()=>{
        const result=subtract(2,3)
        const attempt_result=-1;
        expect(result).to.equal(attempt_result);
    })
})

