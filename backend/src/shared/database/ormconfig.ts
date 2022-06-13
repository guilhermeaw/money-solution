import { DataSource } from 'typeorm';

const entitiesDir =
  process.env.NODE_ENV === 'dev'
    ? 'src/modules/**/entities/*.ts'
    : 'src/modules/**/entities/*.js';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
  entities: [entitiesDir],
  synchronize: true,
});

export const initializeDataSource = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch(err => {
      console.error('Error during Data Source initialization:', err);
    });
};

export default AppDataSource;
