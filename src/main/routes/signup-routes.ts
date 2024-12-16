import { Router } from 'express';
import { adaptRoute } from '../adapters/express-routes-adapter';
import { makeSignupControllerFactory } from '../factories/signup';

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignupControllerFactory()));
};
