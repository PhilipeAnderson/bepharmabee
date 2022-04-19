const express = require('express');
const routes = express();

//API's
const cards = require('../database/cards');
const db = require('../database/oldApi');


routes.get('/cards', (req, res) => {
  return res.json(cards)
})

routes.get('/oldApi', (req, res) => {
  return res.json(db)
});

module.exports = routes;