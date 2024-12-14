import { Express } from 'express';
import { bodyParser, cors, contentType } from '../middlewares';

export default (app: Express): void => {
  const middlewares = [bodyParser, cors, contentType];
  middlewares.forEach((middleware) => app.use(middleware));
};
