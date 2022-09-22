'use strict';

let errorHandlerValidate = require('../error-handlers/500.js');

module.export = function(req, res, next) {
  let { name } = req.query;
  try {
    if(name) {
      res.status(200).send({
        name: name,
      });
    } else {
      errorHandlerValidate();
    }
  } catch(err){
    next(err.message);
  }
};


// module.exports = (req, res, next) => {
//   if (req.query.name) {
//     next();
//   } else {
//     next('Name required for a person.');
//   }
// };

