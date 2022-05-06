import express from 'express';

import { initializeDataSource } from './database/ormconfig';

initializeDataSource();

const app = express();

app.use(express.json());

export default app;
