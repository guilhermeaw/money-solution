import { DataSource } from 'typeorm';

const entitiesPreffix = process.env.NODE_ENV === 'dev' ? 'src' : 'dist';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
  entities: [`${entitiesPreffix}/modules/**/entities/*.ts`],
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
