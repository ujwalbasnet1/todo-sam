const config = {
  type: 'mysql',
  host: '139.59.91.153',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test_sam',
  timezone: 'Z',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
  logger: 'file',
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'migrations',
  },
};

module.exports = config;
