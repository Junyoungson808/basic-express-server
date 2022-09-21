'use strict';

const logger = (req, res, next) => {
  console.log(`REQUEST: ${req.method}, ${req.originialUrl}`);
  next();
};

module.exports = logger;
