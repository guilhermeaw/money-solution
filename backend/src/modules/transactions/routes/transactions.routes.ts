import { Router } from 'express';

import TransactionsController from '../controllers/TransactionsController';

const transactionsRouter = Router();

const transactionsController = new TransactionsController();

transactionsRouter.post('/create', transactionsController.create);

export default transactionsRouter;
