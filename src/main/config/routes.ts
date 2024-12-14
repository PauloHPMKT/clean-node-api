import { Express, Router } from 'express';
import fg from 'fast-glob';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  const routesPath = '**/src/main/routes/**routes.ts';

  // esse tipo de import é chamado de dynamic import
  // ao fazer um import desse tipo a gente não conseegue dar um nome para ele e chama-lo manualmente
  fg.sync(routesPath).map(async (file) =>
    (await import(`../../../${file}`)).default(router),
  );
};
