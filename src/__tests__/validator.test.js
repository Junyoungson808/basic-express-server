'use strict'; 

const supertest = require('supertest');
const myServer = require('../server');
const request = supertest(myServer);


it('handles \'/person\' route without query param correctly', async () => {
  const response = await request.get('/person');

  expect(response.text).toEqual('Hello person');
});

it('handles \'/person\' route with query param correctly', async () => {
  const response = await request.get('/person&personName');

  expect(response.text).toEqual('Person is awesome');
});