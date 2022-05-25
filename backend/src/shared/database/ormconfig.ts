import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'money-solutions',
  entities: ['src/modules/**/entities/*.ts'],
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
