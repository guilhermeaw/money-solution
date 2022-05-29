import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import { initializeDataSource } from './database/ormconfig';
import errors from './middlewares/errors';
import routes from './routes';

import '@shared/container';

initializeDataSource();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors);

export default app;
