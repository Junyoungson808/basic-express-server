'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3002;

// design principle: singleton
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.get('/bad', (req, res, next) => {
  next('this is a bad route');
});

app.get('/pet', (req, res, next) => {
  // console.log(req);
  let { petName } = req.query;
  // console.log("petName", petName);
  try {
    if (petName) {
      res.status(200).send(`${petName} is awesome`);
    } else {
      res.status(200).send('What');
    }
  } catch (err) {
    next(err.message);
  }
});

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

module.exports = { app, start };
