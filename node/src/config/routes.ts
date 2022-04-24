import  express, { Request, Response, NextFunction } from 'express';
const routes = express();

//API's
import { cards } from '../database/cards';
import { oldApi } from '../database/oldApi';

//routes
routes.get('/cards', (req: Request, res: Response, next: NextFunction) => {
  return res.json(cards)
})

routes.get('/oldApi', (req: Request, res: Response, next: NextFunction) => {
  return res.json(oldApi)
});

module.exports = routes;