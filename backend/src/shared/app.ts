import express from 'express';
import 'express-async-errors';

import { initializeDataSource } from './database/ormconfig';
import errors from './middlewares/errors';

initializeDataSource();

const app = express();

app.use(express.json());
app.use(errors);

export default app;
