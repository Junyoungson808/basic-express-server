'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const PORT = process.env.PORT || 3002;

// design principle: singleton
const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.get('/person', validator,  (req, res, next) => {
  res.status(200).send(req.query);
  // console.log(req);
  // let { personName } = req.query;
  // console.log("personName", personName);
  // try {
  //   if (personName) {
  //     res.status(200).send(`${personName} is awesome`);
  //   } else {
  //     res.status(200).send('What');
  //   }
  // } catch (err) {
  //   next(err.message);
  // }
});

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };
