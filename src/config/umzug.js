const { Umzug, SequelizeStorage } = require('umzug');
const sequelize = require('./database');
const path = require('path');

const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.js',
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = umzug; 