const express = require('express');
const routes = express();

//API's
const cards = require('../database/cards');
const oldApi = require('../database/oldApi');

//routes
routes.get('/cards', (req, res) => {
  return res.json(cards)
})

routes.get('/oldApi', (req, res) => {
  return res.json(oldApi)
});

module.exports = routes;