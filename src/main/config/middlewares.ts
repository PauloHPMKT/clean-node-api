import { Express } from 'express';
import { bodyParser } from '../middlewares/body-parser';

export default (app: Express): void => {
  const middlewares = [bodyParser];
  middlewares.forEach((middleware) => app.use(middleware));
};
