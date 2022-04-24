import  express from 'express';
const routes = express();

//API's
import { cards } from '../database/cards';
import { oldApi } from '../database/oldApi';

//routes
routes.get('/cards', (req, res) => {
  return res.json(cards)
})

routes.get('/oldApi', (req, res) => {
  return res.json(oldApi)
});

module.exports = routes;