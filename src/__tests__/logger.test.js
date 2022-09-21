'use strict';

const { it } = require('node:test');
// const { hasUncaughtExceptionCaptureCallback } = require('process');
// when testing logger, how do i test that a console happened and logged correctly? how do I spy on the console? (google)

const supertest = require('supertest');
const { app } = require('../src/middleware/server');
const request = supertest(app);

describe('Logger Middleware', () => {
  it('works as expected', async () => {
    const response = await request.get('/pet');

    expect(response.time).toBeTruthy();
    expect(response.time).toBeDefined();
  });
});
