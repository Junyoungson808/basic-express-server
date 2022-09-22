'use strict';

// const { hasUncaughtExceptionCaptureCallback } = require('process');
// when testing logger, how do i test that a console happened and logged correctly? how do I spy on the console? (google)

const logger = require('../middleware/logger');


describe('Logger Middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('works as expected', async () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith();
    expect(next).toHaveBeenCalledWith();

  });
});
