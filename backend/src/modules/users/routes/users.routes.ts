import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post('/create', usersController.create);
usersRouter.get('/test', usersController.test);

export default usersRouter;
