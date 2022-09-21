'use strict';

const validator = (req, res, next) => {
  console.log('name:', req.params);
  next();
};

module.exports = validator;