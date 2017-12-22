import { Router } from 'express';

import ssrRouter from './ssr';
import userRouter from './user';

const router: Router = Router();
const apiRouter: Router = Router();

ssrRouter(router);
userRouter(apiRouter);

export const routes = { base: router, api: apiRouter };