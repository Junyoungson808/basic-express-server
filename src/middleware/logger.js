'use strict';

const logger = (req, res, next) => {
  let time = Date.now();
  console.log('time', time);
  next();
};

module.exports = logger;
