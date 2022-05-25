import { Router } from 'express';

import TransactionCategoriesController from '../controllers/TransactionCategoriesController';

const transactionCategoriesRouter = Router();

const transactionCategoriesController = new TransactionCategoriesController();

transactionCategoriesRouter.post(
  '/create',
  transactionCategoriesController.create,
);

transactionCategoriesRouter.get(
  '/list',
  transactionCategoriesController.listAll,
);

export default transactionCategoriesRouter;
