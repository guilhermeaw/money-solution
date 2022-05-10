import { Router } from 'express';

import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';

import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();

const transactionsController = new TransactionsController();

transactionsRouter.use(ensureAuthenticated);

transactionsRouter.post('/create', transactionsController.create);
transactionsRouter.get('/me', transactionsController.listMy);

export default transactionsRouter;
