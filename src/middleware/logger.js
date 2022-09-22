'use strict';

module.exports = (req, res, next) => {
  console.log(`REQUEST: ${req.method}, ${req.originialUrl}`);
  next();
};

