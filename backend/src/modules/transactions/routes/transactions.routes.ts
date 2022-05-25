import { Router } from 'express';

import ensureAuthenticated from '@modules/users/middlewares/ensureAuthenticated';

import TransactionsController from '../controllers/TransactionsController';
import transactionCategoriesRouter from './transactionCategories.routes';

const transactionsRouter = Router();

const transactionsController = new TransactionsController();

transactionsRouter.use(ensureAuthenticated);
transactionsRouter.use('/categories', transactionCategoriesRouter);

transactionsRouter.post('/create', transactionsController.create);
transactionsRouter.delete('/:id', transactionsController.delete);
transactionsRouter.get('/me', transactionsController.listMy);

export default transactionsRouter;
