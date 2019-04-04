import Sequelize from 'sequelize';

let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'sqlite',
  });
} else {
  sequelize = new Sequelize(
    process.env.TEST_DATABASE || process.env.GQL_DATABASE,
    // process.env.DATABASE_USER,
    // process.env.DATABASE_PASSWORD,
    {
      dialect: 'sqlite',
      // the storage engine for sqlite
      // - default ':memory:'
      storage: process.env.GQL_DB_PATH
    },
  );
}

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
